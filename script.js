const LEAGUE_ID = "4174174";

const SEASON = "2026";

const ESPN_URL =

  `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${SEASON}/segments/0/leagues/${LEAGUE_ID}?view=mTeam`;

async function loadStandings() {

  const standingsBody = document.getElementById("espn-standings");

  if (!standingsBody) return;

  try {

    const response = await fetch(ESPN_URL);

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

      const wins = record.wins || 0;

      const losses = record.losses || 0;

      const pointsFor = record.pointsFor || 0;

      const pointsAgainst = record.pointsAgainst || 0;

      const row = document.createElement("tr");

      row.innerHTML = `

        <td>${index + 1}</td>

        <td><strong>${team.name || "Unknown Team"}</strong></td>

        <td>${manager}</td>

        <td>${wins}</td>

        <td>${losses}</td>

        <td>${Number(pointsFor).toFixed(2)}</td>

        <td>${Number(pointsAgainst).toFixed(2)}</td>

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

loadStandings();
