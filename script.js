const LEAGUE_ID = "4174174";

const SEASON = "2026";

const ESPN_BASE_URL =

  `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${SEASON}/segments/0/leagues/${LEAGUE_ID}`;

/* =========================

   LIVE STANDINGS

========================= */

async function loadStandings() {

  const standingsBody = document.getElementById("espn-standings");

  if (!standingsBody) return;

  try {

    const response = await fetch(`${ESPN_BASE_URL}?view=mTeam`);

    if (!response.ok) throw new Error("Could not connect to ESPN");

    const data = await response.json();

    const teams = data.teams || [];

    const members = data.members || [];

    const memberMap = {};

    members.forEach((member) => {

      memberMap[member.id] =

        member.displayName ||

        `${member.firstName || ""} ${member.lastName || ""}`.trim();

    });

    teams.sort((a, b) => {

      const aRecord = a.record?.overall || {};

      const bRecord = b.record?.overall || {};

      if ((bRecord.wins || 0) !== (aRecord.wins || 0)) {

        return (bRecord.wins || 0) - (aRecord.wins || 0);

      }

      return (bRecord.pointsFor || 0) - (aRecord.pointsFor || 0);

    });

    standingsBody.innerHTML = "";

    teams.forEach((team, index) => {

      const record = team.record?.overall || {};

      const manager =

        team.owners

          ?.map((ownerId) => memberMap[ownerId])

          .filter(Boolean)

          .join(", ") || "—";

      standingsBody.innerHTML += `

        <tr>

          <td>${index + 1}</td>

          <td><strong>${team.name || "Unknown Team"}</strong></td>

          <td>${manager}</td>

          <td>${record.wins || 0}</td>

          <td>${record.losses || 0}</td>

          <td>${Number(record.pointsFor || 0).toFixed(2)}</td>

          <td>${Number(record.pointsAgainst || 0).toFixed(2)}</td>

        </tr>

      `;

    });

  } catch (error) {

    console.error("ESPN standings error:", error);

  }

}

/* =========================

   LIVE CURRENT WEEK MATCHUPS

========================= */

async function loadCurrentMatchups() {

  const matchupContainer = document.getElementById("espn-matchups");

  if (!matchupContainer) return;

  try {

    const response = await fetch(

      `${ESPN_BASE_URL}?view=mTeam&view=mScoreboard&view=mMatchupScore`

    );

    if (!response.ok) throw new Error("Could not connect to ESPN");

    const data = await response.json();

    const currentWeek =

      data.status?.currentMatchupPeriod ||

      data.status?.currentScoringPeriod ||

      1;

    const schedule = data.schedule || [];

    const teams = data.teams || [];

    const matchups = schedule.filter(

      (game) => Number(game.matchupPeriodId) === Number(currentWeek)

    );

    matchupContainer.innerHTML = "";

    if (!matchups.length) {

      matchupContainer.innerHTML =

        `<p class="matchup-message">Matchups for Week ${currentWeek} are not available yet.</p>`;

      return;

    }

    matchups.forEach((game) => {

      const home = game.home || {};

      const away = game.away || {};

      const homeName =

        teams.find((team) => Number(team.id) === Number(home.teamId))?.name ||

        "Home Team";

      const awayName =

        teams.find((team) => Number(team.id) === Number(away.teamId))?.name ||

        "Away Team";

      matchupContainer.innerHTML += `

        <article class="matchup-card">

          <div class="matchup-team">

            <span>${awayName}</span>

            <strong>${Number(away.totalPoints || 0).toFixed(2)}</strong>

          </div>

          <div class="matchup-vs">VS</div>

          <div class="matchup-team">

            <span>${homeName}</span>

            <strong>${Number(home.totalPoints || 0).toFixed(2)}</strong>

          </div>

        </article>

      `;

    });

  } catch (error) {

    console.error("ESPN matchup error:", error);

  }

}

/* =========================

   FULL INTERACTIVE SCHEDULE

========================= */

let leagueSchedule = [];

let leagueTeams = [];

let currentScheduleWeek = 1;

async function loadFullSchedule() {

  const scheduleContainer =

    document.getElementById("espn-full-schedule");

  const weekSelector =

    document.getElementById("schedule-week-selector");

  if (!scheduleContainer || !weekSelector) return;

  try {

    const response = await fetch(

      `${ESPN_BASE_URL}?view=mTeam&view=mMatchupScore&view=mScoreboard`

    );

    if (!response.ok) {

      throw new Error("Could not connect to ESPN");

    }

    const data = await response.json();

    leagueSchedule = data.schedule || [];

    leagueTeams = data.teams || [];

    currentScheduleWeek =

      data.status?.currentMatchupPeriod ||

      data.status?.currentScoringPeriod ||

      1;

    /*

      Get every unique regular-season matchup week

    */

    const availableWeeks = [

      ...new Set(

        leagueSchedule

          .map((game) => Number(game.matchupPeriodId))

          .filter((week) => week > 0)

      )

    ].sort((a, b) => a - b);

    /* Build Week Buttons */

    weekSelector.innerHTML = "";

    availableWeeks.forEach((week) => {

      const button = document.createElement("button");

      button.className = "schedule-week-button";

      if (week === Number(currentScheduleWeek)) {

        button.classList.add("active");

      }

      button.textContent = `Week ${week}`;

      button.addEventListener("click", () => {

        document

          .querySelectorAll(".schedule-week-button")

          .forEach((btn) => btn.classList.remove("active"));

        button.classList.add("active");

        renderScheduleWeek(week);

      });

      weekSelector.appendChild(button);

    });

    /* Show current week first */

    renderScheduleWeek(currentScheduleWeek);

  } catch (error) {

    console.error("ESPN schedule error:", error);

    scheduleContainer.innerHTML = `

      <p class="matchup-message">

        The 2026 schedule is temporarily unavailable.

      </p>

    `;

  }

}

function renderScheduleWeek(week) {

  const scheduleContainer =

    document.getElementById("espn-full-schedule");

  const matchups = leagueSchedule.filter(

    (game) => Number(game.matchupPeriodId) === Number(week)

  );

  if (!matchups.length) {

    scheduleContainer.innerHTML = `

      <p class="matchup-message">

        Week ${week} matchups are not available yet.

      </p>

    `;

    return;

  }

  const matchupsHTML = matchups.map((game) => {

    const home = game.home || {};

    const away = game.away || {};

    const homeTeam = leagueTeams.find(

      (team) => Number(team.id) === Number(home.teamId)

    );

    const awayTeam = leagueTeams.find(

      (team) => Number(team.id) === Number(away.teamId)

    );

    const homeName = homeTeam?.name || "Home Team";

    const awayName = awayTeam?.name || "Away Team";

    const homeScore = Number(home.totalPoints || 0);

    const awayScore = Number(away.totalPoints || 0);

    /*

      Only show scores if at least one team

      has actually scored.

    */

    const hasStarted =

      homeScore > 0 || awayScore > 0;

    return `

      <article class="schedule-matchup-card">

        <div class="schedule-team ${awayScore > homeScore && hasStarted ? "winning" : ""}">

          <span>${awayName}</span>

          <strong>

            ${hasStarted ? awayScore.toFixed(2) : "—"}

          </strong>

        </div>

        <div class="schedule-vs">

          ${hasStarted ? "VS" : "UPCOMING"}

        </div>

        <div class="schedule-team ${homeScore > awayScore && hasStarted ? "winning" : ""}">

          <span>${homeName}</span>

          <strong>

            ${hasStarted ? homeScore.toFixed(2) : "—"}

          </strong>

        </div>

      </article>

    `;

  }).join("");

  scheduleContainer.innerHTML = `

    <div class="schedule-week-title">

      <span>2026 SEASON VII</span>

      <h3>Week ${week}</h3>

    </div>

    <div class="schedule-matchup-grid">

      ${matchupsHTML}

    </div>

  `;

}

/* =========================

   WEEKLY AWARDS

========================= */

async function loadWeeklyAwards() {

  const awardsContainer =

    document.getElementById("espn-weekly-awards");

  if (!awardsContainer) return;

  try {

    const response = await fetch(

      `${ESPN_BASE_URL}?view=mTeam&view=mScoreboard&view=mMatchupScore&view=mRoster`

    );

    if (!response.ok) {

      throw new Error("Could not connect to ESPN");

    }

    const data = await response.json();

    const currentWeek =

      data.status?.currentMatchupPeriod ||

      data.status?.currentScoringPeriod ||

      1;

    const schedule = data.schedule || [];

    const teams = data.teams || [];

    const matchups = schedule.filter(

      (game) => Number(game.matchupPeriodId) === Number(currentWeek)

    );

    const starters = [];

    const benchPlayers = [];

    const teamScores = [];

    matchups.forEach((game) => {

      [game.home, game.away].forEach((side) => {

        if (!side) return;

        const team = teams.find(

          (team) => Number(team.id) === Number(side.teamId)

        );

        const teamName = team?.name || "Unknown Team";

        teamScores.push({

          name: teamName,

          score: Number(side.totalPoints || 0)

        });

        const roster =

          side.rosterForCurrentScoringPeriod?.entries || [];

        roster.forEach((entry) => {

          const player =

            entry.playerPoolEntry?.player || {};

          const playerData = {

            name: player.fullName || "Unknown Player",

            team: teamName,

            score: Number(entry.appliedStatTotal || 0),

            position: Number(player.defaultPositionId)

          };

          const lineupSlot =

            Number(entry.lineupSlotId);

          if (lineupSlot === 20) {

            benchPlayers.push(playerData);

            return;

          }

          if (lineupSlot !== 21) {

            starters.push(playerData);

          }

        });

      });

    });

    const hasScores =

      teamScores.some((team) => team.score > 0);

    if (!hasScores) {

      awardsContainer.innerHTML = `

        <div class="awards-week">

          WEEK ${currentWeek} AWARDS

        </div>

        <div class="award-empty awards-coming-soon">

          <div class="coming-soon-icon">🔥</div>

          <strong>Weekly Awards Coming Soon</strong>

          <p>

            Studs, Duds, Oh Cruds and more will be revealed

            once the games begin.

          </p>

        </div>

      `;

      return;

    }

    const studs = [...starters]

      .sort((a, b) => b.score - a.score)

      .slice(0, 5);

    const duds = [...starters]

      .filter(

        (player) =>

          player.position !== 16 &&

          player.position !== 17

      )

      .sort((a, b) => a.score - b.score)

      .slice(0, 5);

    const ohCruds = [...benchPlayers]

      .sort((a, b) => b.score - a.score)

      .slice(0, 5);

    const sortedTeams = [...teamScores]

      .sort((a, b) => b.score - a.score);

    awardsContainer.innerHTML = `

      <div class="awards-week">

        WEEK ${currentWeek} AWARDS

      </div>

      <div class="awards-grid">

        <section class="award-card">

          <h3>⭐ Studs</h3>

          <p class="award-description">

            This week's highest-scoring starters.

          </p>

          <div class="award-list">

            ${renderPlayerList(studs)}

          </div>

        </section>

        <section class="award-card">

          <h3>💩 Duds</h3>

          <p class="award-description">

            Lowest-scoring starters. No kickers or D/ST.

          </p>

          <div class="award-list">

            ${renderPlayerList(duds)}

          </div>

        </section>

        <section class="award-card">

          <h3>😩 Oh Cruds!</h3>

          <p class="award-description">

            Great scores... from the bench.

          </p>

          <div class="award-list">

            ${renderPlayerList(ohCruds)}

          </div>

        </section>

      </div>

      <div class="team-awards">

        <div class="team-award">

          <span class="team-award-icon">🏆</span>

          <div>

            <small>STUD OF THE WEEK</small>

            <strong>${sortedTeams[0]?.name || "—"}</strong>

            <span>

              ${sortedTeams[0]

                ? sortedTeams[0].score.toFixed(2) + " points"

                : ""}

            </span>

          </div>

        </div>

        <div class="team-award">

          <span class="team-award-icon">💩</span>

          <div>

            <small>TURD OF THE WEEK</small>

            <strong>

              ${sortedTeams[sortedTeams.length - 1]?.name || "—"}

            </strong>

            <span>

              ${sortedTeams.length

                ? sortedTeams[sortedTeams.length - 1].score.toFixed(2) + " points"

                : ""}

            </span>

          </div>

        </div>

      </div>

    `;

  } catch (error) {

    console.error("ESPN weekly awards error:", error);

    awardsContainer.innerHTML = `

      <p class="matchup-message">

        Weekly awards are temporarily unavailable.

      </p>

    `;

  }

}

function renderPlayerList(players) {

  if (!players.length) {

    return `

      <div class="award-empty">

        Player scores will appear here once games begin.

      </div>

    `;

  }

  return players.map((player, index) => `

    <div class="award-player">

      <span class="award-rank">${index + 1}</span>

      <div class="award-player-info">

        <strong>${player.name}</strong>

        <small>${player.team}</small>

      </div>

      <span class="award-score">

        ${player.score.toFixed(2)}

      </span>

    </div>

  `).join("");

}

/* =========================

   LOAD EVERYTHING

========================= */

loadStandings();

loadCurrentMatchups();

loadFullSchedule();

loadWeeklyAwards();
