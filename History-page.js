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

  if (!window.LEAGUE_HISTORY) {

    console.error(
      "LEAGUE_HISTORY was not found. Make sure history.js loads before history-page.js."
    );

    return;
  }


  const years = Object.keys(window.LEAGUE_HISTORY)
    .map(Number)
    .sort((a, b) => a - b);


  if (!years.length) {

    console.error(
      "No historical seasons were found."
    );

    return;
  }


  currentHistoryYear =
    years[years.length - 1];


  renderHistorySummary();

  renderChampionshipHistory();

  renderAllTimeLeaderboard();

  renderLeagueRecords();

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

  const container =
    document.getElementById(
      "league-records"
    );


  if (!container) return;


  const records =
    typeof getLeagueRecords === "function"
      ? getLeagueRecords()
      : null;


  if (!records) {

    container.innerHTML = `
      <div class="history-empty">
        League records are unavailable.
      </div>
    `;

    return;
  }


  const cards = [];


  /* -----------------------------------------
     Highest Points For
  ------------------------------------------ */

  if (records.highestPF) {

    const record =
      records.highestPF;


    cards.push(`

      <article class="record-card">

        <div class="record-icon">
          🔥
        </div>

        <div class="record-label">
          HIGHEST POINTS FOR
        </div>

        <strong class="record-value">
          ${formatNumber(record.pf)}
        </strong>

        <h3>
          ${escapeHTML(record.manager)}
        </h3>

        <p>
          ${escapeHTML(record.team)}
        </p>

        <small>
          ${record.year} •
          ${escapeHTML(record.record)}
        </small>

      </article>

    `);

  }


  /* -----------------------------------------
     Best Regular Season Record
  ------------------------------------------ */

  if (records.bestRecord) {

    const record =
      records.bestRecord;


    cards.push(`

      <article class="record-card">

        <div class="record-icon">
          👑
        </div>

        <div class="record-label">
          BEST REGULAR SEASON RECORD
        </div>

        <strong class="record-value">
          ${escapeHTML(record.record)}
        </strong>

        <h3>
          ${escapeHTML(record.manager)}
        </h3>

        <p>
          ${escapeHTML(record.team)}
        </p>

        <small>
          ${record.year} •
          ${record.wins} wins
        </small>

      </article>

    `);

  }


  /* -----------------------------------------
     Biggest Championship Margin
  ------------------------------------------ */

  if (records.biggestChampionshipMargin) {

    const record =
      records.biggestChampionshipMargin;


    cards.push(`

      <article class="record-card">

        <div class="record-icon">
          💀
        </div>

        <div class="record-label">
          BIGGEST CHAMPIONSHIP MARGIN
        </div>

        <strong class="record-value">
          ${formatNumber(record.margin)}
        </strong>

        <h3>
          ${escapeHTML(record.winner)}
        </h3>

        <p>
          ${formatNumber(record.winnerScore)}
          –
          ${formatNumber(record.loserScore)}
        </p>

        <small>
          ${record.year} •
          vs ${escapeHTML(record.loser)}
        </small>

      </article>

    `);

  }


  /* -----------------------------------------
     Highest Championship Score
  ------------------------------------------ */

  if (records.highestChampionshipScore) {

    const record =
      records.highestChampionshipScore;


    cards.push(`

      <article class="record-card">

        <div class="record-icon">
          💰
        </div>

        <div class="record-label">
          HIGHEST CHAMPIONSHIP SCORE
        </div>

        <strong class="record-value">
          ${formatNumber(record.score)}
        </strong>

        <h3>
          ${escapeHTML(record.manager)}
        </h3>

        <p>
          ${escapeHTML(record.team)}
        </p>

        <small>
          ${record.year} • Championship
        </small>

      </article>

    `);

  }


  container.innerHTML =
    cards.join("");

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
