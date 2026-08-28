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

    if (!response.ok) {

      throw new Error("Could not connect to ESPN");

    }

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

      const aWins = aRecord.wins || 0;

      const bWins = bRecord.wins || 0;

      const aPoints = aRecord.pointsFor || 0;

      const bPoints = bRecord.pointsFor || 0;

      if (bWins !== aWins) {

        return bWins - aWins;

      }

      return bPoints - aPoints;

    });

    standingsBody.innerHTML = "";

    teams.forEach((team, index) => {

      const record = team.record?.overall || {};

      const manager =

        team.owners

          ?.map((ownerId) => memberMap[ownerId])

          .filter(Boolean)

          .join(", ") || "—";

      const row = document.createElement("tr");

      row.innerHTML = `

        <td>${index + 1}</td>

        <td><strong>${team.name || "Unknown Team"}</strong></td>

        <td>${manager}</td>

        <td>${record.wins || 0}</td>

        <td>${record.losses || 0}</td>

        <td>${Number(record.pointsFor || 0).toFixed(2)}</td>

        <td>${Number(record.pointsAgainst || 0).toFixed(2)}</td>

      `;

      standingsBody.appendChild(row);

    });

  } catch (error) {

    console.error("ESPN standings error:", error);

    standingsBody.innerHTML = `

      <tr>

        <td colspan="7" style="text-align:center; padding:25px;">

          ESPN standings are temporarily unavailable.

        </td>

      </tr>

    `;

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

    if (!response.ok) {

      throw new Error("Could not connect to ESPN");

    }

    const data = await response.json();

    const currentWeek =

      data.status?.currentMatchupPeriod ||

      data.status?.currentScoringPeriod ||

      data.scoringPeriodId ||

      1;

    const schedule = data.schedule || [];

    const teams = data.teams || [];

    const matchups = schedule.filter(

      (game) => Number(game.matchupPeriodId) === Number(currentWeek)

    );

    matchupContainer.innerHTML = "";

    if (matchups.length === 0) {

      matchupContainer.innerHTML = `

        <p class="matchup-message">

          Matchups for Week ${currentWeek} are not available yet.

        </p>

      `;

      return;

    }

    matchups.forEach((game) => {

      const home = game.home || {};

      const away = game.away || {};

      const homeTeam = teams.find(

        (team) => Number(team.id) === Number(home.teamId)

      );

      const awayTeam = teams.find(

        (team) => Number(team.id) === Number(away.teamId)

      );

      const homeName = homeTeam?.name || "Home Team";

      const awayName = awayTeam?.name || "Away Team";

      const homeScore = Number(home.totalPoints || 0).toFixed(2);

      const awayScore = Number(away.totalPoints || 0).toFixed(2);

      const card = document.createElement("article");

      card.className = "matchup-card";

      card.innerHTML = `

        <div class="matchup-team">

          <span>${awayName}</span>

          <strong>${awayScore}</strong>

        </div>

        <div class="matchup-vs">VS</div>

        <div class="matchup-team">

          <span>${homeName}</span>

          <strong>${homeScore}</strong>

        </div>

      `;

      matchupContainer.appendChild(card);

    });

  } catch (error) {

    console.error("ESPN matchup error:", error);

    matchupContainer.innerHTML = `

      <p class="matchup-message">

        Live matchups are temporarily unavailable.

      </p>

    `;

  }

}

/* =========================

   WEEKLY AWARDS

========================= */

async function loadWeeklyAwards() {

  const awardsContainer = document.getElementById("espn-weekly-awards");

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

      data.scoringPeriodId ||

      1;

    const schedule = data.schedule || [];

    const teams = data.teams || [];

    const matchups = schedule.filter(

      (game) => Number(game.matchupPeriodId) === Number(currentWeek)

    );

    /* Player arrays */

    const starters = [];

    const benchPlayers = [];

    const teamScores = [];

    /* Go through every matchup */

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

        /*

          ESPN stores the lineup for the current scoring period

          inside rosterForCurrentScoringPeriod.

        */

        const roster =

          side.rosterForCurrentScoringPeriod?.entries || [];

        roster.forEach((entry) => {

          const player =

            entry.playerPoolEntry?.player || {};

          const playerName =

            player.fullName || "Unknown Player";

          const score =

            Number(entry.appliedStatTotal || 0);

          const lineupSlot =

            Number(entry.lineupSlotId);

          /*

            Position IDs:

            16 = D/ST

            17 = Kicker

            20 = Bench

            21 = IR

          */

          const positionId =

            Number(player.defaultPositionId);

          const playerData = {

            name: playerName,

            team: teamName,

            score: score,

            position: positionId

          };

          /* BENCH */

          if (lineupSlot === 20) {

            benchPlayers.push(playerData);

            return;

          }

          /* STARTERS */

          if (lineupSlot !== 21) {

            starters.push(playerData);

          }

        });

      });

    });

    /* =========================

       CALCULATE STUDS

    ========================= */

    const studs = [...starters]

      .sort((a, b) => b.score - a.score)

      .slice(0, 5);

    /* =========================

       CALCULATE DUDS

       Excludes Kicker and D/ST

    ========================= */

    const duds = starters

      .filter(

        (player) =>

          player.position !== 16 &&

          player.position !== 17

      )

      .sort((a, b) => a.score - b.score)

      .slice(0, 5);

    /* =========================

       CALCULATE OH CRUDS

    ========================= */

    const ohCruds = [...benchPlayers]

      .sort((a, b) => b.score - a.score)

      .slice(0, 5);

    /* =========================

       STUD & TURD OF THE WEEK

    ========================= */

    const sortedTeams =

      [...teamScores].sort(

        (a, b) => b.score - a.score

      );

    const studOfWeek =

      sortedTeams[0];

    const turdOfWeek =

      sortedTeams[sortedTeams.length - 1];

    /* =========================

       DISPLAY AWARDS

    ========================= */

    awardsContainer.innerHTML = `

      <div class="awards-week">

        WEEK ${currentWeek} AWARDS

      </div>

      <div class="awards-grid">

        <!-- STUDS -->

        <section class="award-card studs-card">

          <h3>⭐ Studs</h3>

          <p class="award-description">

            This week's highest-scoring starters.

          </p>

          <div class="award-list">

            ${renderPlayerList(studs)}

          </div>

        </section>

        <!-- DUDS -->

        <section class="award-card duds-card">

          <h3>💩 Duds</h3>

          <p class="award-description">

            Lowest-scoring starters. No kickers or D/ST.

          </p>

          <div class="award-list">

            ${renderPlayerList(duds)}

          </div>

        </section>

        <!-- OH CRUDS -->

        <section class="award-card cruds-card">

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

        <div class="team-award stud-team">

          <span class="team-award-icon">🏆</span>

          <div>

            <small>STUD OF THE WEEK</small>

            <strong>

              ${studOfWeek?.name || "—"}

            </strong>

            <span>

              ${studOfWeek

                ? studOfWeek.score.toFixed(2) + " points"

                : "Scores coming soon"}

            </span>

          </div>

        </div>

        <div class="team-award turd-team">

          <span class="team-award-icon">💩</span>

          <div>

            <small>TURD OF THE WEEK</small>

            <strong>

              ${turdOfWeek?.name || "—"}

            </strong>

            <span>

              ${turdOfWeek

                ? turdOfWeek.score.toFixed(2) + " points"

                : "Scores coming soon"}

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

/* =========================

   RENDER PLAYER LIST

========================= */

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

      <span class="award-rank">

        ${index + 1}

      </span>

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

   LOAD ESPN DATA

========================= */

loadStandings();

loadCurrentMatchups();

loadWeeklyAwards();
