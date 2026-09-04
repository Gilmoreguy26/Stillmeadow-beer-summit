/* =========================================================
   STILLMEADOW BEER SUMMIT
   HISTORY PAGE
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderChampionshipHistory();
  renderManagerLeaderboard();
  renderLeagueRecords();
  renderBeerBootHallOfFame();
});
/* =========================================================
   CHAMPIONSHIP HISTORY
   ========================================================= */
function renderChampionshipHistory() {
  const container = document.getElementById("championship-history");
  if (!container || !window.LEAGUE_HISTORY) return;
  const championships = getChampionshipHistory();
  if (!championships || championships.length === 0) {
    container.innerHTML = `
      <p class="empty-state">
        Championship history coming soon.
      </p>
    `;
    return;
  }
  container.innerHTML = championships
    .map(season => `
      <div class="history-championship-row">
        <div class="history-season">
          <span class="history-season-number">
            Season ${season.season}
          </span>
          <span class="history-year">
            ${season.year}
          </span>
        </div>
        <div class="history-champion">
          <span class="history-trophy">🏆</span>
          <div>
            <strong>${season.champion}</strong>
            <span>${season.team || ""}</span>
          </div>
        </div>
      </div>
    `)
    .join("");
}
/* =========================================================
   ALL-TIME MANAGER LEADERBOARD
   ========================================================= */
function renderManagerLeaderboard() {
  const container = document.getElementById("manager-leaderboard");
  if (!container || !window.LEAGUE_HISTORY) return;
  const managers = getAllTimeManagerLeaderboard();
  if (!managers || managers.length === 0) {
    container.innerHTML = `
      <p class="empty-state">
        Manager history coming soon.
      </p>
    `;
    return;
  }
  container.innerHTML = managers
    .map((manager, index) => `
      <div class="manager-leaderboard-row">
        <div class="leaderboard-rank">
          ${index + 1}
        </div>
        <div class="leaderboard-manager">
          <strong>${manager.name}</strong>
        </div>
        <div class="leaderboard-stat">
          <span class="stat-label">Wins</span>
          <strong>${manager.wins ?? 0}</strong>
        </div>
        <div class="leaderboard-stat">
          <span class="stat-label">Titles</span>
          <strong>${manager.championships ?? 0}</strong>
        </div>
        <div class="leaderboard-stat">
          <span class="stat-label">Playoffs</span>
          <strong>${manager.playoffAppearances ?? 0}</strong>
        </div>
      </div>
    `)
    .join("");
}
/* =========================================================
   LEAGUE RECORDS
   ========================================================= */
function renderLeagueRecords() {
  const container = document.getElementById("league-records");
  if (!container) return;
  /*
    These records are manually maintained because the historical
    ESPN data does not contain every regular-season matchup.
  */
  const records = [
    {
      category: "Most Championships",
      value: "3",
      holder: "Mike Ames",
      detail: "2020, 2021, 2024"
    },
    {
      category: "Highest Season Score",
      value: "2,078.86",
      holder: "Daryl Creager",
      detail: "2022"
    },
    {
      category: "Lowest Season Score",
      value: "1,420.14",
      holder: "Jon Rohrbaugh",
      detail: "2023"
    },
    {
      category: "Highest Single-Game Score",
      value: "206.12",
      holder: "Dan Gilmore",
      detail: "Week 5, 2021"
    },
    {
      category: "Lowest Single-Game Score",
      value: "55.88",
      holder: "Jon Rohrbaugh",
      detail: "Week 11, 2024"
    },
    {
      category: "Highest Combined Game Score",
      value: "389.22",
      holder: "Dan Gilmore & Daryl Creager",
      detail: "Dan 206.12 – Daryl 183.10 • Week 5, 2021"
    },
    {
      category: "Biggest Blowout",
      value: "106.90",
      holder: "Dave Cox",
      detail: "162.78 – 55.88 over Jon Rohrbaugh • Week 11, 2024"
    },
    {
      category: "Most Playoff Appearances",
      value: "6",
      holder: "Andy Rohrbaugh",
      detail: "2020–2025"
    },
    {
      category: "Most Career Wins",
      value: "102",
      holder: "Andy Rohrbaugh",
      detail: "Regular-season wins"
    }
  ];
  container.innerHTML = records
    .map(record => `
      <div class="record-card">
        <div class="record-category">
          ${record.category}
        </div>
        <div class="record-value">
          ${record.value}
        </div>
        <div class="record-holder">
          ${record.holder}
        </div>
        <div class="record-detail">
          ${record.detail}
        </div>
      </div>
    `)
    .join("");
}
/* =========================================================
   BEER BOOT HALL OF FAME
   ========================================================= */
function renderBeerBootHallOfFame() {
  const container = document.getElementById("beer-boot-hall-of-fame");
  if (!container) return;
  const inductees = [
    {
      name: "Mike Ames",
      title: "THE ORIGINAL DYNASTY",
      years: "2020 • 2021 • 2024",
      achievement: "3 Championships",
      description:
        "The first true dynasty of the Stillmeadow Beer Summit. Three Beer Boots across the league's first five seasons."
    },
    {
      name: "Daryl Creager",
      title: "THE GODFATHER",
      years: "2022 • 2025",
      achievement: "2 Championships",
      description:
        "A two-time champion who also owns the highest season point total in league history with 2,078.86 points in 2022."
    },
    {
      name: "Dan Gilmore",
      title: "THE BREAKER",
      years: "2023",
      achievement: "1 Championship",
      description:
        "The 2023 champion — and owner of the highest single-game score in league history with 206.12 points in Week 5 of 2021."
    },
    {
      name: "Andy Rohrbaugh",
      title: "THE IRON MAN",
      years: "2020–2025",
      achievement: "6 Straight Playoff Appearances",
      description:
        "The ultimate model of consistency. Andy reached the playoffs in every season from 2020 through 2025 and currently owns the most career regular-season wins."
    },
    {
      name: "Matt Gilmore",
      title: "THE COMMISSIONER",
      years: "2020–2026",
      achievement: "7 Seasons",
      description:
        "Commissioner, organizer, historian and one of the league's most consistent personalities. Matt has also won four Draft Day competitions."
    },
    {
      name: "Heather Hallman",
      title: "FOREVER PART OF THE SUMMIT",
      years: "2020 • 2023",
      achievement: "2 Championship Game Appearances",
      description:
        "A foundational member of the league and two-time championship game participant. Heather helped establish the competitive spirit and personality of the Summit."
    }
  ];
  /*
    Only populate the Hall of Fame if the page contains
    the actual HOF container.
    This prevents the script from interfering with other
    sections of the History page.
  */
  const hofGrid =
    container.querySelector(".hof-grid") ||
    container.querySelector(".hall-of-fame-grid") ||
    container.querySelector(".hof-inductees");
  if (!hofGrid) return;
  hofGrid.innerHTML = inductees
    .map(inductee => `
      <article class="hof-plaque">
        <div class="hof-plaque-top">
          <span class="hof-boot">🍺</span>
          <span class="hof-inducted">INDUCTED</span>
        </div>
        <h3>${inductee.name}</h3>
        <div class="hof-title">
          ${inductee.title}
        </div>
        <div class="hof-years">
          ${inductee.years}
        </div>
        <div class="hof-achievement">
          ${inductee.achievement}
        </div>
        <p>
          ${inductee.description}
        </p>
      </article>
    `)
    .join("");
}
/* =========================================================
   OPTIONAL RECORD HELPERS
   ========================================================= */
function getLeagueRecordByCategory(category) {
  const records = [
    {
      category: "Most Championships",
      value: "3",
      holder: "Mike Ames",
      detail: "2020, 2021, 2024"
    },
    {
      category: "Highest Season Score",
      value: "2,078.86",
      holder: "Daryl Creager",
      detail: "2022"
    },
    {
      category: "Lowest Season Score",
      value: "1,420.14",
      holder: "Jon Rohrbaugh",
      detail: "2023"
    },
    {
      category: "Highest Single-Game Score",
      value: "206.12",
      holder: "Dan Gilmore",
      detail: "Week 5, 2021"
    },
    {
      category: "Lowest Single-Game Score",
      value: "55.88",
      holder: "Jon Rohrbaugh",
      detail: "Week 11, 2024"
    },
    {
      category: "Highest Combined Game Score",
      value: "389.22",
      holder: "Dan Gilmore & Daryl Creager",
      detail: "Week 5, 2021"
    },
    {
      category: "Biggest Blowout",
      value: "106.90",
      holder: "Dave Cox",
      detail: "Week 11, 2024"
    },
    {
      category: "Most Playoff Appearances",
      value: "6",
      holder: "Andy Rohrbaugh",
      detail: "2020–2025"
    },
    {
      category: "Most Career Wins",
      value: "102",
      holder: "Andy Rohrbaugh",
      detail: "Regular-season wins"
    }
  ];
  return records.find(record => record.category === category);
}

One important note

Your highest combined game is correctly calculated:

Dan 206.12 + Daryl 183.10 = 389.22

And the biggest blowout is:

Dave 162.78 − Jon 55.88 = 106.90 points

So we now have all four records ready:

Record	Holder	Score	Week
Highest single-game	Dan Gilmore	206.12	Week 5, 2021
Highest combined game	Dan + Daryl	389.22	Week 5, 2021
Lowest single-game	Jon Rohrbaugh	55.88	Week 11, 2024
Biggest blowout	Dave Cox	106.90 margin	Week 11, 2024

After you replace the file, refresh the History page. The four records should now appear in the Record Book alongside the existing records.
