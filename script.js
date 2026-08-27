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

    const response = await fetch(`${ESPN_BASE_URL}?view=mScoreboard`);

    if (!response.ok) {

      throw new Error("Could not connect to ESPN");

    }

    const data = await response.json();

    const currentWeek = data.scoringPeriodId || 1;

    const schedule = data.schedule || [];

    const matchups = schedule.filter(

      (game) => game.matchupPeriodId === currentWeek

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

      const homeTeam = data.teams.find(

        (team) => team.id === home.teamId

      );

      const awayTeam = data.teams.find(

        (team) => team.id === away.teamId

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

   LOAD ESPN DATA

========================= */

loadStandings();

loadCurrentMatchups();
