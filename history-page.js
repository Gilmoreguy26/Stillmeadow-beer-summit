/* =========================================================
   STILLMEADOW BEER SUMMIT
   HISTORY PAGE RENDERER
   Seasons I–VI / 2020–2025

   Requires:
     history.html
     history.js

   IMPORTANT:
     This file does NOT interact with ESPN.
     2026 live data remains handled by manager.js.
========================================================= */


/* =========================================================
   GLOBAL
========================================================= */

let currentHistoryYear = 2025;


/* =========================================================
   HELPERS
========================================================= */

function escapeHTML(value) {

  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function formatNumber(value, decimals = 2) {

  return Number(value || 0).toFixed(decimals);

}


function getSeason(year) {

  return window.LEAGUE_HISTORY?.[year] || null;

}


/* =========================================================
   PAGE INITIALIZATION
========================================================= */

function initializeHistoryPage() {
    renderHistorySummary();
    renderChampionshipHistory();
    renderAllTimeLeaderboard();
    renderLeagueRecords();

    // Beer Boot Hall of Fame
    renderBeerBootHallOfFame();

    renderSeasonSelector();
    renderSeasonHistory(currentHistoryYear);
    renderHistoricalPlayoffs();
}

/* =========================================================
   HISTORY SUMMARY
========================================================= */

function renderHistorySummary() {

  const seasons =
    Object.values(window.LEAGUE_HISTORY);

  const seasonsElement =
    document.getElementById("history-seasons");

  const championsElement =
    document.getElementById("history-champions");

  const teamsElement =
    document.getElementById("history-teams");


  if (!seasonsElement) return;


  seasonsElement.textContent =
    seasons.length;


  /*
     Unique champions
  */

  const champions =
    [...new Set(
      seasons.map(
        (season) => season.champion
      )
    )];


  if (championsElement) {

    championsElement.textContent =
      champions.length;

    const parent =
      championsElement.closest(
        ".history-stat-card"
      );

    const small =
      parent?.querySelector("small");

    if (small) {

      small.textContent =
        champions.join(" • ");

    }

  }


  /*
     League size
  */

  const teamCounts =
    [...new Set(
      seasons.map(
        (season) => season.teams
      )
    )]
    .sort((a, b) => a - b);


  if (teamsElement) {

    if (teamCounts.length === 1) {

      teamsElement.textContent =
        teamCounts[0];

    } else {

      teamsElement.textContent =
        `${teamCounts[0]}–${teamCounts[teamCounts.length - 1]}`;

    }

  }

}


/* =========================================================
   CHAMPIONSHIP HISTORY
========================================================= */

function renderChampionshipHistory() {

  const container =
    document.getElementById(
      "championship-history"
    );


  if (!container) return;


  const championships =
    typeof getChampionshipHistory === "function"
      ? getChampionshipHistory()
      : [];


  if (!championships.length) {

    container.innerHTML = `
      <div class="history-empty">
        No championship history available.
      </div>
    `;

    return;
  }


  /*
     Show newest season first
  */

  championships.reverse();


  container.innerHTML =
    championships.map(
      (season) => {

        const margin =
          season.championScore -
          season.runnerUpScore;


        return `

          <article
            class="championship-card
              ${season.year === 2025
                ? "latest-championship"
                : ""}"
          >

            <div class="championship-card-header">

              <span class="championship-season">
                ${escapeHTML(season.season)}
              </span>

              <strong class="championship-year">
                ${season.year}
              </strong>

            </div>


            <div class="championship-trophy">
              🏆
            </div>


            <div class="championship-winner">

              <span class="championship-label">
                CHAMPION
              </span>

              <h3>
                ${escapeHTML(season.champion)}
              </h3>

              <p>
                ${escapeHTML(season.championTeam)}
              </p>

            </div>


            <div class="championship-score">

              <strong>
                ${formatNumber(
                  season.championScore
                )}
              </strong>

              <span>
                –
              </span>

              <strong>
                ${formatNumber(
                  season.runnerUpScore
                )}
              </strong>

            </div>


            <div class="championship-runner-up">

              <span>
                RUNNER-UP
              </span>

              <strong>
                ${escapeHTML(
                  season.runnerUp
                )}
              </strong>

              <small>
                ${escapeHTML(
                  season.runnerUpTeam
                )}
              </small>

            </div>


            <div class="championship-margin">

              Victory margin:
              <strong>
                ${formatNumber(margin)}
              </strong>

            </div>

          </article>

        `;

      }
    ).join("");

}


/* =========================================================
   ALL-TIME MANAGER LEADERBOARD
========================================================= */

function renderAllTimeLeaderboard() {

  const tbody =
    document.getElementById(
      "all-time-manager-body"
    );


  if (!tbody) return;


  const managers =
    typeof getAllTimeManagerLeaderboard === "function"
      ? getAllTimeManagerLeaderboard()
      : [];


  if (!managers.length) {

    tbody.innerHTML = `
      <tr>
        <td colspan="9">
          No manager history available.
        </td>
      </tr>
    `;

    return;
  }


  tbody.innerHTML =
    managers.map(
      (manager, index) => {

        const isChampion =
          manager.championships > 0;


        return `

          <tr
            class="
              ${isChampion
                ? "has-championship"
                : ""}
            "
          >

            <td class="history-rank">

              ${
                index === 0
                  ? "👑"
                  : index + 1
              }

            </td>


            <td class="history-manager">

              <strong>
                ${escapeHTML(
                  manager.manager
                )}
              </strong>

            </td>


            <td>
              ${manager.wins}
            </td>


            <td>
              ${manager.losses}
            </td>


            <td>

              <strong>
                ${escapeHTML(
                  manager.record
                )}
              </strong>

            </td>


            <td class="history-titles">

              ${
                manager.championships > 0
                  ? `🏆 ${manager.championships}`
                  : "—"
              }

            </td>


            <td>

              ${
                manager.runnerUps > 0
                  ? manager.runnerUps
                  : "—"
              }

            </td>


            <td>

              ${manager.playoffAppearances}

            </td>


            <td>

              ${formatNumber(
                manager.averageFinish,
                1
              )}

            </td>

          </tr>

        `;

      }
    ).join("");

}


/* =========================================================
   LEAGUE RECORDS
========================================================= */

function renderLeagueRecords() {

/* =========================================================
   BEER BOOT HALL OF FAME
   ========================================================= */

function renderBeerBootHallOfFame() {

    const inducteesContainer =
        document.getElementById("beer-boot-inductees");

    const recordsContainer =
        document.getElementById("beer-boot-records");

    const draftContainer =
        document.getElementById("beer-boot-draft-games");

    if (!inducteesContainer ||
        !recordsContainer ||
        !draftContainer) {
        return;
    }


    /* =====================================================
       HELPER FUNCTIONS
       ===================================================== */

    function normalizeManagerName(name) {

        if (!name) {
            return "";
        }

        if (name === "Andrew Rohrbaugh") {
            return "Andy Rohrbaugh";
        }

        return name;
    }


    function getManagerStats(managerName) {

        const normalizedTarget =
            normalizeManagerName(managerName);

        let championships = 0;
        let playoffAppearances = 0;
        let careerWins = 0;

        if (!window.LEAGUE_HISTORY) {
            return {
                championships,
                playoffAppearances,
                careerWins
            };
        }


        /*
         * Count championships directly from the
         * historical season database.
         */

        Object.values(window.LEAGUE_HISTORY).forEach(season => {

            if (!season) {
                return;
            }

            const champion =
                normalizeManagerName(season.champion);

            if (champion === normalizedTarget) {
                championships++;
            }

        });


        /*
         * Use the existing all-time leaderboard when
         * available for career wins and playoff appearances.
         */

        if (typeof getAllTimeManagerLeaderboard === "function") {

            const leaderboard =
                getAllTimeManagerLeaderboard();

            const manager =
                leaderboard.find(item =>
                    normalizeManagerName(
                        item.manager ||
                        item.name ||
                        item.managerName
                    ) === normalizedTarget
                );

            if (manager) {

                careerWins =
                    Number(
                        manager.wins ??
                        manager.regularSeasonWins ??
                        manager.totalWins ??
                        0
                    );

                playoffAppearances =
                    Number(
                        manager.playoffAppearances ??
                        manager.playoffs ??
                        0
                    );
            }
        }


        return {
            championships,
            playoffAppearances,
            careerWins
        };
    }


    /* =====================================================
       INDUCTEES
       ===================================================== */

    const inducteeDefinitions = [

        {
            manager: "Mike Ames",
            nickname: "THE ORIGINAL DYNASTY",
            icon: "🏆",
            description:
                "The winningest champion in Summit history. Mike built the league's first true dynasty and still owns the crown.",
            highlights: [
                "3 Championships",
                "2020 • 2021 • 2024",
                "Most championships in league history"
            ],
            type: "champion"
        },

        {
            manager: "Daryl Creager",
            nickname: "THE GODFATHER",
            icon: "👑",
            description:
                "A two-time champion and one of the most dominant regular-season forces the Summit has ever seen.",
            highlights: [
                "2 Championships",
                "2022 • 2025",
                "2,078.86 points in 2022"
            ],
            type: "champion"
        },

        {
            manager: "Dan Gilmore",
            nickname: "THE BREAKER",
            icon: "⚡",
            description:
                "The man who finally broke the dynasty. Dan captured the 2023 championship and forever etched his name into Summit history.",
            highlights: [
                "1 Championship",
                "2023",
                "Defeated Heather Hallman for the title"
            ],
            type: "champion"
        },

        {
            manager: "Andy Rohrbaugh",
            nickname: "THE IRON MAN",
            icon: "🛡️",
            description:
                "Six straight playoff appearances. Andy has been there every single season, making him one of the most dependable managers in league history.",
            highlights: [
                "6 Playoff Appearances",
                "2020–2025",
                "Most career regular-season wins"
            ],
            type: "legend"
        },

        {
            manager: "Matt Gilmore",
            nickname: "THE COMMISSIONER",
            icon: "🍺",
            description:
                "The guy keeping this circus moving. League organizer, commissioner, weekly storyteller and the man responsible for making sure the Summit keeps getting bigger.",
            highlights: [
                "Commissioner",
                "7 Seasons",
                "4 Draft Games created"
            ],
            type: "commissioner"
        },

        {
            manager: "Heather Hallman",
            nickname: "FOREVER PART OF THE SUMMIT",
            icon: "🔥",
            description:
                "A former member who left an unmistakable mark on the league. Two championship-game appearances and enough attitude to make sure nobody forgot her.",
            highlights: [
                "2 Championship Game Appearances",
                "2020 • 2023",
                "Still part of Summit lore"
            ],
            quote:
                "just because I have a vagina doesn’t mean I don’t know ball…",
            type: "tribute"
        }

    ];


    let inducteeHTML = "";


    inducteeDefinitions.forEach(inductee => {

        const stats =
            getManagerStats(inductee.manager);


        let highlightsHTML = "";

        inductee.highlights.forEach(highlight => {

            highlightsHTML += `
                <div class="beer-boot-highlight">
                    ${escapeHTML(highlight)}
                </div>
            `;

        });


        let quoteHTML = "";

        if (inductee.quote) {

            quoteHTML = `
                <div class="beer-boot-quote">
                    “${escapeHTML(inductee.quote)}”
                </div>
            `;

        }


        let statHTML = "";


        if (inductee.manager === "Mike Ames") {

            statHTML = `
                <div class="beer-boot-big-stat">
                    <span class="beer-boot-big-number">
                        ${stats.championships || 3}
                    </span>
                    <span class="beer-boot-big-label">
                        CHAMPIONSHIPS
                    </span>
                </div>
            `;

        }


        else if (inductee.manager === "Daryl Creager") {

            statHTML = `
                <div class="beer-boot-big-stat">
                    <span class="beer-boot-big-number">
                        ${stats.championships || 2}
                    </span>
                    <span class="beer-boot-big-label">
                        CHAMPIONSHIPS
                    </span>
                </div>
            `;

        }


        else if (inductee.manager === "Dan Gilmore") {

            statHTML = `
                <div class="beer-boot-big-stat">
                    <span class="beer-boot-big-number">
                        ${stats.championships || 1}
                    </span>
                    <span class="beer-boot-big-label">
                        CHAMPIONSHIP
                    </span>
                </div>
            `;

        }


        else if (inductee.manager === "Andy Rohrbaugh") {

            statHTML = `
                <div class="beer-boot-big-stat">
                    <span class="beer-boot-big-number">
                        ${stats.playoffAppearances || 6}
                    </span>
                    <span class="beer-boot-big-label">
                        STRAIGHT PLAYOFF APPEARANCES
                    </span>
                </div>
            `;

        }


        else if (inductee.manager === "Matt Gilmore") {

            statHTML = `
                <div class="beer-boot-big-stat">
                    <span class="beer-boot-big-number">
                        VII
                    </span>
                    <span class="beer-boot-big-label">
                        SEASONS AS COMMISSIONER
                    </span>
                </div>
            `;

        }


        else if (inductee.manager === "Heather Hallman") {

            statHTML = `
                <div class="beer-boot-big-stat">
                    <span class="beer-boot-big-number">
                        2
                    </span>
                    <span class="beer-boot-big-label">
                        TITLE GAME APPEARANCES
                    </span>
                </div>
            `;

        }


        inducteeHTML += `

            <article class="beer-boot-inductee-card beer-boot-type-${inductee.type}">

                <div class="beer-boot-card-top">

                    <div class="beer-boot-card-icon">
                        ${inductee.icon}
                    </div>

                    <div class="beer-boot-card-status">
                        INDUCTED
                    </div>

                </div>


                <div class="beer-boot-inductee-name">
                    ${escapeHTML(inductee.manager)}
                </div>


                <div class="beer-boot-inductee-nickname">
                    ${escapeHTML(inductee.nickname)}
                </div>


                ${statHTML}


                <p class="beer-boot-inductee-description">
                    ${escapeHTML(inductee.description)}
                </p>


                <div class="beer-boot-highlights">
                    ${highlightsHTML}
                </div>


                ${quoteHTML}

            </article>

        `;

    });


    inducteesContainer.innerHTML =
        inducteeHTML;


    /* =====================================================
       RECORD BOOK
       ===================================================== */

    let highestSeasonScore = null;
    let lowestSeasonScore = null;


    if (window.LEAGUE_HISTORY) {

        Object.values(window.LEAGUE_HISTORY).forEach(season => {

            if (!season || !season.standings) {
                return;
            }


            season.standings.forEach(team => {

                const manager =
                    normalizeManagerName(
                        team.manager ||
                        team.name
                    );

                const pf =
                    Number(
                        team.pf ??
                        team.pointsFor ??
                        team.totalPoints ??
                        0
                    );


                if (!pf) {
                    return;
                }


                const entry = {
                    manager,
                    season: season.year ||
                            season.season ||
                            "",
                    points: pf
                };


                if (!highestSeasonScore ||
                    pf > highestSeasonScore.points) {

                    highestSeasonScore = entry;

                }


                if (!lowestSeasonScore ||
                    pf < lowestSeasonScore.points) {

                    lowestSeasonScore = entry;

                }

            });

        });

    }


    /*
     * Known historical records.
     * These are deliberately explicit so the Hall of Fame
     * remains correct even if the historical data structure
     * changes.
     */

    highestSeasonScore = {
        manager: "Daryl Creager",
        season: "2022",
        points: 2078.86
    };


    lowestSeasonScore = {
        manager: "Jon Rohrbaugh",
        season: "2023",
        points: 1420.14
    };


    const records = [

        {
            icon: "🏆",
            title: "MOST CHAMPIONSHIPS",
            value: "3",
            holder: "Mike Ames",
            detail: "2020 • 2021 • 2024"
        },

        {
            icon: "🔥",
            title: "HIGHEST SEASON SCORE",
            value: formatNumber(
                highestSeasonScore.points
            ),
            holder: highestSeasonScore.manager,
            detail: `${highestSeasonScore.season} season`
        },

        {
            icon: "💀",
            title: "LOWEST SEASON SCORE",
            value: formatNumber(
                lowestSeasonScore.points
            ),
            holder: lowestSeasonScore.manager,
            detail: `${lowestSeasonScore.season} season`
        },

        {
            icon: "🛡️",
            title: "MOST PLAYOFF APPEARANCES",
            value: "6",
            holder: "Andy Rohrbaugh",
            detail: "2020–2025 • Every season"
        },

        {
            icon: "📊",
            title: "MOST CAREER WINS",
            value: "102",
            holder: "Andy Rohrbaugh",
            detail: "Regular season wins"
        },

        {
            icon: "❓",
            title: "HIGHEST SINGLE-GAME SCORE",
            value: "COMING SOON",
            holder: "Record pending",
            detail: "All-time game data will be added"
        },

        {
            icon: "❓",
            title: "LOWEST SINGLE-GAME SCORE",
            value: "COMING SOON",
            holder: "Record pending",
            detail: "All-time game data will be added"
        }

    ];


    let recordsHTML = "";


    records.forEach(record => {

        recordsHTML += `

            <article class="beer-boot-record-card">

                <div class="beer-boot-record-icon">
                    ${record.icon}
                </div>

                <div class="beer-boot-record-title">
                    ${escapeHTML(record.title)}
                </div>

                <div class="beer-boot-record-value">
                    ${escapeHTML(record.value)}
                </div>

                <div class="beer-boot-record-holder">
                    ${escapeHTML(record.holder)}
                </div>

                <div class="beer-boot-record-detail">
                    ${escapeHTML(record.detail)}
                </div>

            </article>

        `;

    });


    recordsContainer.innerHTML =
        recordsHTML;


    /* =====================================================
       DRAFT DAY HALL OF FAME
       ===================================================== */

    const draftGames = [

        {
            year: "2026",
            game: "Man Card Competition",
            winner: "Andy Rohrbaugh",
            icon: "🏆"
        },

        {
            year: "2025",
            game: "Drive, Pitch, Putt",
            winner: "Caufield",
            icon: "🏆"
        },

        {
            year: "2024",
            game: "Punt, Pass, Kick",
            winner: "Matt Gilmore",
            icon: "🏆"
        },

        {
            year: "2023",
            game: "Yard Game Olympics",
            winner: "Matt Gilmore",
            icon: "🏆"
        },

        {
            year: "2022",
            game: "Trivia / Game Picks",
            winner: "Rob Robertson",
            icon: "🏆"
        },

        {
            year: "2021",
            game: "Bad Beer Tasting Competition",
            winner: "Andy Rohrbaugh",
            icon: "🏆"
        },

        {
            year: "2020",
            game: "Hat Pull",
            winner: "Dan Gilmore",
            icon: "🏆"
        }

    ];


    let draftHTML = "";


    draftGames.forEach(item => {

        draftHTML += `

            <article class="beer-boot-draft-card">

                <div class="beer-boot-draft-year">
                    ${escapeHTML(item.year)}
                </div>

                <div class="beer-boot-draft-icon">
                    ${item.icon}
                </div>

                <div class="beer-boot-draft-game">
                    ${escapeHTML(item.game)}
                </div>

                <div class="beer-boot-draft-winner-label">
                    WINNER
                </div>

                <div class="beer-boot-draft-winner">
                    ${escapeHTML(item.winner)}
                </div>

            </article>

        `;

    });


    draftContainer.innerHTML =
        draftHTML;

}
/* =========================================================
   SEASON SELECTOR
========================================================= */

function renderSeasonSelector() {

  const container =
    document.getElementById(
      "history-season-selector"
    );


  if (!container) return;


  const years =
    Object.keys(window.LEAGUE_HISTORY)
      .map(Number)
      .sort((a, b) => b - a);


  container.innerHTML =
    years.map(
      (year) => {

        const season =
          getSeason(year);


        return `

          <button
            type="button"
            class="
              history-season-button
              ${year === currentHistoryYear
                ? "active"
                : ""}
            "
            data-year="${year}"
          >

            <span>
              ${escapeHTML(
                season.season
              )}
            </span>

            <strong>
              ${year}
            </strong>

          </button>

        `;

      }
    ).join("");


  container
    .querySelectorAll(
      ".history-season-button"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            const year =
              Number(
                button.dataset.year
              );


            currentHistoryYear =
              year;


            container
              .querySelectorAll(
                ".history-season-button"
              )
              .forEach(
                (btn) =>
                  btn.classList.remove(
                    "active"
                  )
              );


            button.classList.add(
              "active"
            );


            renderSeasonHistory(
              year
            );


            renderHistoricalPlayoffs(
              year
            );


            /*
               Scroll gently to the
               season history section.
            */

            const seasonContainer =
              document.getElementById(
                "season-history-container"
              );


            if (seasonContainer) {

              seasonContainer.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });

            }

          }
        );

      }
    );

}


/* =========================================================
   SEASON HISTORY
========================================================= */

function renderSeasonHistory(year) {

  const container =
    document.getElementById(
      "season-history-container"
    );


  if (!container) return;


  const season =
    getSeason(year);


  if (!season) {

    container.innerHTML = `
      <div class="history-empty">
        Season history unavailable.
      </div>
    `;

    return;
  }


  const standings =
    [...(season.standings || [])]
      .sort(
        (a, b) =>
          a.rank - b.rank
      );


  container.innerHTML = `

    <div class="season-history-header">

      <div>

        <span class="section-kicker">
          ${escapeHTML(season.season)}
        </span>

        <h3>
          ${year} SEASON
        </h3>

      </div>


      <div class="season-history-champion">

        <span>
          CHAMPION
        </span>

        <strong>
          🏆 ${escapeHTML(
            season.champion
          )}
        </strong>

        <small>
          ${escapeHTML(
            season.championship?.winnerTeam ||
            ""
          )}
        </small>

      </div>

    </div>


    <div class="season-summary-bar">

      <div>

        <span>
          LEAGUE SIZE
        </span>

        <strong>
          ${season.teams}
        </strong>

      </div>


      <div>

        <span>
          RUNNER-UP
        </span>

        <strong>
          ${escapeHTML(
            season.runnerUp
          )}
        </strong>

      </div>


      <div>

        <span>
          CHAMPIONSHIP
        </span>

        <strong>
          ${escapeHTML(
            season.championshipScore
          )}
        </strong>

      </div>

    </div>


    <div class="history-table-wrapper">

      <table class="history-table season-standings-table">

        <thead>

          <tr>

            <th>
              #
            </th>

            <th>
              MANAGER
            </th>

            <th>
              TEAM
            </th>

            <th>
              RECORD
            </th>

            <th>
              PF
            </th>

            <th>
              PA
            </th>

            <th>
              DIFF
            </th>

            <th>
              DIV
            </th>

            <th>
              HOME
            </th>

            <th>
              AWAY
            </th>

          </tr>

        </thead>


        <tbody>

          ${
            standings.map(
              (team) => {

                const isChampion =
                  team.manager ===
                  season.champion;


                const isRunnerUp =
                  team.manager ===
                  season.runnerUp;


                return `

                  <tr
                    class="
                      ${isChampion
                        ? "historical-champion"
                        : ""}
                      ${isRunnerUp
                        ? "historical-runner-up"
                        : ""}
                    "
                  >

                    <td>

                      ${
                        isChampion
                          ? "🏆"
                          : team.rank
                      }

                    </td>


                    <td>

                      <strong>
                        ${escapeHTML(
                          team.manager
                        )}
                      </strong>

                    </td>


                    <td>

                      ${escapeHTML(
                        team.team
                      )}

                    </td>


                    <td>

                      <strong>
                        ${escapeHTML(
                          team.record
                        )}
                      </strong>

                    </td>


                    <td>

                      ${formatNumber(
                        team.pf
                      )}

                    </td>


                    <td>

                      ${formatNumber(
                        team.pa
                      )}

                    </td>


                    <td
                      class="
                        ${team.diff >= 0
                          ? "positive"
                          : "negative"}
                      "
                    >

                      ${
                        team.diff >= 0
                          ? "+"
                          : ""
                      }${formatNumber(
                        team.diff
                      )}

                    </td>


                    <td>

                      ${escapeHTML(
                        team.division
                      )}

                    </td>


                    <td>

                      ${escapeHTML(
                        team.home
                      )}

                    </td>


                    <td>

                      ${escapeHTML(
                        team.away
                      )}

                    </td>

                  </tr>

                `;

              }
            ).join("")
          }

        </tbody>

      </table>

    </div>


    <div class="season-championship-panel">

      <div class="season-championship-heading">

        <span>
          🏆
        </span>

        <div>

          <small>
            ${escapeHTML(
              season.season
            )}
          </small>

          <h3>
            CHAMPIONSHIP
          </h3>

        </div>

      </div>


      <div class="season-final">

        <div class="final-team champion">

          <span>
            CHAMPION
          </span>

          <strong>
            ${escapeHTML(
              season.championship.winner
            )}
          </strong>

          <small>
            ${escapeHTML(
              season.championship.winnerTeam
            )}
          </small>

          <b>
            ${formatNumber(
              season.championship.winnerScore
            )}
          </b>

        </div>


        <div class="final-vs">
          VS
        </div>


        <div class="final-team runner-up">

          <span>
            RUNNER-UP
          </span>

          <strong>
            ${escapeHTML(
              season.championship.loser
            )}
          </strong>

          <small>
            ${escapeHTML(
              season.championship.loserTeam
            )}
          </small>

          <b>
            ${formatNumber(
              season.championship.loserScore
            )}
          </b>

        </div>

      </div>

    </div>

  `;

}


/* =========================================================
   HISTORICAL PLAYOFFS
========================================================= */

function renderHistoricalPlayoffs(
  selectedYear = currentHistoryYear
) {

  const container =
    document.getElementById(
      "historical-playoffs"
    );


  if (!container) return;


  const season =
    getSeason(selectedYear);


  if (!season?.playoffs) {

    container.innerHTML = `
      <div class="history-empty">
        Playoff information unavailable.
      </div>
    `;

    return;
  }


  /*
     The playoff section follows
     the selected season.
  */

  const rounds =
    season.playoffs.rounds || [];


  container.innerHTML = `

    <div class="playoff-history-header">

      <div>

        <span class="section-kicker">
          ${escapeHTML(
            season.season
          )}
        </span>

        <h3>
          ${selectedYear} PLAYOFFS
        </h3>

      </div>


      <div class="playoff-champion-badge">

        🏆

        <span>
          CHAMPION
        </span>

        <strong>
          ${escapeHTML(
            season.champion
          )}
        </strong>

      </div>

    </div>


    <div class="historical-playoff-rounds">

      ${
        rounds.map(
          (round) =>
            renderPlayoffRound(
              round,
              season
            )
        ).join("")
      }

    </div>

  `;

}


/* =========================================================
   PLAYOFF ROUND
========================================================= */

function renderPlayoffRound(
  round,
  season
) {

  const games =
    round.games || [];


  const byes =
    round.byes || [];


  return `

    <section
      class="
        playoff-round
        playoff-round-${slugify(
          round.name
        )}
      "
    >

      <div class="playoff-round-header">

        <span>
          ${escapeHTML(
            round.name
          )}
        </span>

      </div>


      ${
        byes.length
          ? `

            <div class="playoff-byes">

              <span>
                FIRST-ROUND BYES
              </span>

              <div>

                ${
                  byes.map(
                    (bye) => `

                      <div class="playoff-bye">

                        <strong>
                          #${bye.seed}
                        </strong>

                        <span>
                          ${escapeHTML(
                            bye.manager
                          )}
                        </span>

                        <small>
                          ${escapeHTML(
                            bye.team
                          )}
                        </small>

                      </div>

                    `
                  ).join("")
                }

              </div>

            </div>

          `
          : ""
      }


      <div class="playoff-games">

        ${
          games.map(
            (game) =>
              renderPlayoffGame(
                game,
                season
              )
          ).join("")
        }

      </div>

    </section>

  `;

}


/* =========================================================
   PLAYOFF GAME
========================================================= */

function renderPlayoffGame(
  game,
  season
) {

  const managerA =
    game.managerA || "";


  const managerB =
    game.managerB || "";


  const scoreA =
    Number(game.scoreA || 0);


  const scoreB =
    Number(game.scoreB || 0);


  const winner =
    game.winner || "";


  const winnerA =
    winner === managerA;


  const winnerB =
    winner === managerB;


  return `

    <article class="playoff-game">

      <div
        class="
          playoff-team
          ${winnerA
            ? "winner"
            : ""}
        "
      >

        <div class="playoff-seed">
          #${game.seedA}
        </div>


        <div class="playoff-team-info">

          <strong>
            ${escapeHTML(
              managerA
            )}
          </strong>

          <small>
            ${escapeHTML(
              game.teamA
            )}
          </small>

        </div>


        <div class="playoff-score">
          ${formatNumber(scoreA)}
        </div>

      </div>


      <div class="playoff-vs">
        VS
      </div>


      <div
        class="
          playoff-team
          ${winnerB
            ? "winner"
            : ""}
        "
      >

        <div class="playoff-seed">
          #${game.seedB}
        </div>


        <div class="playoff-team-info">

          <strong>
            ${escapeHTML(
              managerB
            )}
          </strong>

          <small>
            ${escapeHTML(
              game.teamB
            )}
          </small>

        </div>


        <div class="playoff-score">
          ${formatNumber(scoreB)}
        </div>

      </div>


      <div class="playoff-result">

        ${
          winner
            ? `🏆 ${escapeHTML(
                winner
              )}`
            : ""
        }

      </div>

    </article>

  `;

}


/* =========================================================
   SLUGIFY
========================================================= */

function slugify(value) {

  return String(value || "")
    .toLowerCase()
    .replace(
      /[^a-z0-9]+/g,
      "-"
    )
    .replace(
      /^-+|-+$/g,
      ""
    );

}


/* =========================================================
   NAVIGATION HELPERS
========================================================= */

function scrollToHistorySection(
  sectionId
) {

  const section =
    document.getElementById(
      sectionId
    );


  if (!section) return;


  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  initializeHistoryPage
);
