const LEAGUE_ID = "4174174";
const SEASON = "2026";

const ESPN_BASE_URL =
  `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${SEASON}/segments/0/leagues/${LEAGUE_ID}`;

/* =========================================================
   MANAGER DATABASE
   ESPN TEAM IDs ARE PERMANENT IDENTIFIERS.
   DO NOT MATCH TEAMS BY NAME.
========================================================= */

const managers = {

  matt: {
    name: "Matt Gilmore",
    team: "Watt She Said",
    espnTeamId: 1,
    division: "CHIEF Division",
    photo: "images/IMG_6482.jpeg",
    role: "Commissioner",
    number: "01",
    nickname: "Still Chasing the Boot",

    legacy: {
      playoffs: "4 of 6",
      championships: "0",
      reputation: "Always in the Hunt",
      message:
        "Four semifinal appearances. One giant question remains: when does the commissioner finally get his Beer Boot?"
    },

    traits: {
      strength: "Always in the Hunt",
      weakness: "Can't Finish the Job",
      signature: "Commissioner Chaos",
      ability: "Never Gives Up"
    },

    quote:
      "Four semifinals. Zero Beer Boots. Somebody has to fix that.",

    story: {
      title: "Still Chasing the Boot",
      text: `
        Matt started the Stillmeadow Beer Summit with one simple goal: beat up on his friends in fantasy football and have a damn good time doing it.
        <br><br>
        Somewhere along the way, that turned into draft parties, the legendary Beer Boot trophy, weekly breakdowns and predictions, Monday Night Lites, Studs, Duds and Oh Cruds, a league Facebook page, and now an entire website dedicated to this beautiful mess.
        <br><br>
        All that creativity and competitiveness has produced plenty of memorable moments—and absolutely zero championships. Four semifinal appearances in six seasons prove he's always around when things get serious, but the Beer Boot has somehow remained just out of reach.
        <br><br>
        A district manager by trade, Matt is used to keeping a group of people organized, informed, and occasionally reined in—which makes him perfectly qualified to run this collection of degenerates. A die-hard Steelers fan, proud owner of a brand-new Bronco, and known to drink almost anyone under the table, the commissioner remains committed to one thing above all else: eventually winning the damn trophy he created.
      `
    }
  },


  dan: {
    name: "Dan Gilmore",
    team: "Mind Ur O's n Q's",
    espnTeamId: 3,
    division: "BEAR DOWN Division",
    photo: "images/IMG_6420.jpeg",
    role: "Manager",
    number: "12",
    nickname: "The Man Who Just Wings It",

    legacy: {
      playoffs: "Competitive",
      championships: "0",
      reputation: "Wings It",
      message:
        "No mock drafts. No elaborate preparation. Somehow he just shows up, drafts a competitive team, and makes everyone wonder why they worked so hard."
    },

    traits: {
      strength: "Natural Instinct",
      weakness: "Preparation",
      signature: "Wing It",
      ability: "Russian Dan"
    },

    quote:
      "Why spend three months preparing when you can just show up and draft?",

    story: {
      title: "The Man Who Just Wings It",
      text: `
        Dan is the commissioner's big brother, longtime childhood bully, and the Godfather's childhood best friend. His approach to fantasy football is beautifully simple: show up and figure it out.
        <br><br>
        While Daryl is completing his fiftieth mock draft and everyone else is studying rankings, Dan is proving that winging it can apparently be an art form. He doesn't need elaborate preparation to walk into the draft and come out with a competitive roster.
        <br><br>
        Dan is a Doctor—but not the kind who prescribes medicine. He's one of those higher-learning Doctors. After a few too many drinks, however, the academic credentials give way to "Russian Dan," an alter ego who suddenly develops an accent and starts calling everyone in his phone contacts.
      `
    }
  },


  caufield: {
    name: "Mike Caufield",
    team: "CauFIELD of Dreams",
    espnTeamId: 4,
    division: "BILLTROTS Division",
    photo: "images/IMG_6429.jpeg",
    role: "Manager",
    number: "05",
    nickname: "The Billtriots Prophet",

    legacy: {
      playoffs: "2nd Place Finish",
      championships: "0",
      reputation: "Smoked Meat Specialist",
      message:
        "A runner-up finish last season shocked the losing-bracket legend. Was it the beginning of a dynasty—or just a perfectly smoked one-season run?"
    },

    traits: {
      strength: "Smoked Meat",
      weakness: "Losing Bracket History",
      signature: "The Perfect Rub",
      ability: "Playoff Surprise"
    },

    quote:
      "The smoker is hot. Maybe the fantasy team will be too.",

    story: {
      title: "The Billtriots Prophet",
      text: `
        Caufield was lucky enough to marry into this collection of misfits, with his wife being a longtime friend of the Stillmeadow crew. Somehow, the group decided he could stay—and fantasy football has been feeding the rivalry ever since.
        <br><br>
        He enjoys smoking meats, getting the rub just right, and a good smoked sausage. His football allegiance is a little more complicated. He's a Bills fan... unless the Patriots are good, in which case the loyalty occasionally shifts faster than his fantasy team. Hence, the Billtrots Division.
        <br><br>
        Last season's second-place finish was a rare bright spot for this losing-bracket legend. Is it a sign of things to come, or will Caufield return to his natural habitat near the bottom of the standings? Only time—and the smoker—will tell.
      `
    }
  },


  rob: {
    name: "Rob Robertson",
    team: "1-Tooth Willies Hillbillies",
    espnTeamId: 5,
    division: "BEAR DOWN Division",
    photo: "images/IMG_6422.jpeg",
    role: "Manager",
    number: "06",
    nickname: "The Legend Who Never Stops Talking",

    legacy: {
      playoffs: "Still Fighting",
      championships: "0",
      reputation: "Talks a Big Game",
      message:
        "What Rob lacks in wins, he more than makes up for in conversation. Just don't start a drinking game based on how often he talks about himself."
    },

    traits: {
      strength: "Confidence",
      weakness: "Knows Everything",
      signature: "The Rob Story",
      ability: "Never Runs Out of Words"
    },

    quote:
      "Eventually one of these stories has to end with a championship.",

    story: {
      title: "The Legend Who Never Stops Talking",
      text: `
        Rob has been the commissioner's best friend since their school years, and their friendship has survived decades of fantasy football, questionable decisions, and conversations that usually revolve back around Rob.
        <br><br>
        At one point, the group attempted a drinking game where everyone took a drink whenever Rob talked about himself. They had to stop because somebody was eventually going to get alcohol poisoning.
        <br><br>
        A high school teacher, good dad, and friend to just about anyone, Rob brings plenty of personality to the Beer Summit. His fantasy teams may need new players about as badly as he needs a hip replacement, but the man never runs out of confidence—or things to say.
      `
    }
  },


  tim: {
    name: "Tim Stough",
    team: "Waller in Misery",
    espnTeamId: 6,
    division: "BILLTROTS Division",
    photo: "images/IMG_6455.png",
    role: "Manager",
    number: "07",
    nickname: "The Guy Who Will Help Anyone",

    legacy: {
      playoffs: "League Veteran",
      championships: "0",
      reputation: "Trade Partner",
      message:
        "Need help with something? Tim is your guy. Need a running back? He might accidentally give you his best one."
    },

    traits: {
      strength: "Generosity",
      weakness: "Trade Offers",
      signature: "Helping Everyone",
      ability: "Always Has Your Back"
    },

    quote:
      "Need a player? I might have one I can give you.",

    story: {
      title: "The Guy Who Will Help Anyone",
      text: `
        Tim was the first replacement brought in after the legendary Kidwell Purge, but he had been around the Stillmeadow crew long before officially joining the league.
        <br><br>
        Tim is the kind of guy who will help with anything. Need a pop-up tent? You got it. Need somebody to lend a hand? He's probably already on his way. Need a running back for your fantasy team? Well... he might even give you his best one.
        <br><br>
        A die-hard Eagles fan, Tim brings loyalty, generosity, and questionable trade decisions to the Beer Summit. The Beer Boot remains the prize still missing from the collection.
      `
    }
  },


  ames: {
    name: "Mike Ames",
    team: "Won’t you be my Naber",
    espnTeamId: 7,
    division: "CHIEF Division",
    photo: "images/IMG_6427.jpeg",
    role: "Manager",
    number: "04",
    nickname: "The Quiet Assassin",

    legacy: {
      playoffs: "Winning Ways",
      championships: "1",
      reputation: "Quiet Assassin",
      message:
        "He doesn't need to talk much. His teams usually do the talking for him—and somehow the risky moves almost always seem to work."
    },

    traits: {
      strength: "Unconventional Strategy",
      weakness: "Quiet Confidence",
      signature: "Two Tight Ends",
      ability: "Makes Risky Moves Work"
    },

    quote:
      "It doesn't have to make sense if it works.",

    story: {
      title: "The Quiet Assassin",
      text: `
        Mike Ames doesn't need to talk a lot of trash. He prefers to quietly build a dangerous team and let the standings do the talking.
        <br><br>
        He's willing to take risks that most managers wouldn't consider, and somehow they often pay off. His championship season included starting two elite tight ends all season, with one sitting in the flex—a lineup strategy that didn't make sense until it absolutely did.
        <br><br>
        A fan of his Commanders players, Ames always seems to find room for a few of them in his lineup. It may not be conventional, but the Quiet Assassin has proven that conventional doesn't always win championships.
      `
    }
  },


  jon: {
    name: "Jon Rohrbaugh",
    team: "Blink Juan82",
    espnTeamId: 8,
    division: "BILLTROTS Division",
    photo: "images/IMG_6454.png",
    role: "Manager",
    number: "08",
    nickname: "The Lovable Loser",

    legacy: {
      playoffs: "Injury Survivor",
      championships: "0",
      reputation: "Lovable Loser",
      message:
        "The injury bug keeps biting, the Turd Awards keep coming, and Jon somehow always has another unbelievable story to tell."
    },

    traits: {
      strength: "Storytelling",
      weakness: "Injuries",
      signature: "Casino Stories",
      ability: "Survive Anything"
    },

    quote:
      "The injuries can't stop me. Neither can the Turd Awards.",

    story: {
      title: "The Lovable Loser",
      text: `
        Jon may not always be at the top of the standings, but he is almost always at the center of a good story. His teams seem to come down with a case of the injury bug every season.
        <br><br>
        While stacking up Turd Awards and questionable injury reports, Jon somehow manages to keep the league entertained. If his fantasy team is struggling, there's a decent chance he's got a casino jackpot story ready to distract everyone.
        <br><br>
        A Navy veteran and a man with stories that somehow get better with every telling, Jon remains one of the league's most lovable managers.
      `
    }
  },


  jeff: {
    name: "Jeff Fishel",
    team: "Just SKOL Baby!",
    espnTeamId: 12,
    division: "BILLTROTS Division",
    photo: "images/IMG_6456.jpeg",
    role: "Manager",
    number: "09",
    nickname: "The Neighbor Who Wouldn't Leave",

    legacy: {
      playoffs: "Up & Down",
      championships: "0",
      reputation: "SKOL Specialist",
      message:
        "The beer knowledge is elite. The Vikings loyalty is unquestioned. The championship consistency is still a work in progress."
    },

    traits: {
      strength: "Beer Knowledge",
      weakness: "Vikings",
      signature: "SKOL",
      ability: "Always Shows Up"
    },

    quote:
      "SKOL, beer, and fantasy football. What else do you need?",

    story: {
      title: "The Neighbor Who Wouldn't Leave",
      text: `
        Jeff is the Godfather's neighbor and somehow managed to weasel his way into both the group's hearts and the Stillmeadow Beer Summit simply by continuing to show up. Eventually, everyone gave up and gave him a team.
        <br><br>
        One of the members added during the great league expansion of 2023, Jeff has become a key part of the league through his knowledge of beer, his unwavering Vikings fandom, and his willingness to embrace the chaos.
        <br><br>
        His fantasy seasons have been up and down, but Season VII presents another opportunity for a bounce-back campaign.
      `
    }
  },


  tyler: {
    name: "Tyler Gilmore",
    team: "Mid Draft Drunken Dropout",
    espnTeamId: 13,
    division: "BEAR DOWN Division",
    photo: "images/IMG_6480.jpeg",
    role: "Manager",
    number: "10",
    nickname: "The Rookie Exterminator",

    legacy: {
      playoffs: "3rd Place Rookie",
      championships: "0",
      reputation: "Draft Day Survivor",
      message:
        "He got so drunk at his first draft that he had to leave and come back—and still finished third. The competition may have a problem."
    },

    traits: {
      strength: "Preparation",
      weakness: "Draft Day Drinking",
      signature: "Mid-Draft Disappearance",
      ability: "Exterminate the Competition"
    },

    quote:
      "I may leave the draft, but I'm not leaving the standings.",

    story: {
      title: "The Rookie Exterminator",
      text: `
        Tyler is the commissioner's oldest son and the newest Gilmore to enter the Stillmeadow Beer Summit. He replaced original member Heather Hallmando and wasted absolutely no time making his presence known.
        <br><br>
        Tyler studies players more like the Godfather than the commissioner, taking the preparation side of fantasy football seriously. That made his first-season performance even more impressive when he finished third place.
        <br><br>
        Of course, the season began with an unforgettable draft-day performance. Tyler got so drunk that he actually left partway through the draft and had to come back. Somehow, even a temporary drunken disappearance couldn't stop him from exterminating the competition.
      `
    }
  },


  dave: {
    name: "Dave Cox",
    team: "Whit’s Warriors",
    espnTeamId: 11,
    division: "BEAR DOWN Division",
    photo: "images/IMG_6430.jpeg",
    role: "Manager",
    number: "11",
    nickname: "The Original Draft Researcher",

    legacy: {
      playoffs: "Bounce Back Season",
      championships: "0",
      reputation: "Magazine Man",
      message:
        "The only man still bringing draft magazines into the modern era. ESPN rankings aren't trusted here—Dave builds his own board."
    },

    traits: {
      strength: "Research",
      weakness: "Old School",
      signature: "Draft Magazine",
      ability: "Makes His Own Rankings"
    },

    quote:
      "ESPN rankings? I brought my own magazine.",

    story: {
      title: "The Original Draft Researcher",
      text: `
        Dave may have officially joined during the great league expansion of 2023, but he had been hanging around the Stillmeadow drafts long before receiving his own team.
        <br><br>
        When that turn finally came, Dave brought his own approach. He's the only manager who still brings a draft magazine to the draft. ESPN rankings? Not trusted. Dave makes his own rankings and follows his own plan.
        <br><br>
        Last season was a down year, possibly because he was too busy hosting the draft to actually draft a good team. A stay-at-home dad, Michigan supporter, golf simulator enthusiast, and firm believer that IPAs are for bitches, Dave is due for a bounce-back campaign.
      `
    }
  },


  daryl: {
    name: "Daryl Creager",
    team: "The Godfather Part II",
    espnTeamId: 9,
    division: "CHIEF Division",
    photo: "images/IMG_6421.jpeg",
    role: "Manager",
    number: "03",
    nickname: "The Godfather",

    legacy: {
      playoffs: "2× Champion",
      championships: "2",
      reputation: "Mock Draft King",
      message:
        "Preparation, preparation, preparation. The Godfather studies the draft board like it holds the secrets of the universe—and two Beer Boots suggest it might."
    },

    traits: {
      strength: "Preparation",
      weakness: "Overthinking",
      signature: "Mock Drafts",
      ability: "Draft Day Strategy"
    },

    quote:
      "I've already run this draft fifty times in my head.",

    story: {
      title: "The Godfather",
      text: `
        Self-proclaimed Godfather of the Stillmeadow Beer Summit, Daryl has built a reputation as one of the league's most successful—and most prepared—managers. A two-time Beer Boot champion, he approaches fantasy football like a full-time job and mock drafts like a sacred ritual.
        <br><br>
        Nobody overprepares quite like Daryl. Rankings are studied, strategies are tested, and mock drafts are completed at a rate that would make most fantasy analysts uncomfortable.
        <br><br>
        Of course, the Godfather is also known for sending out trade offers that may be just slightly more beneficial to Daryl than the person receiving them. But when you have two championships, confidence comes with the territory.
      `
    }
  },


  andy: {
    name: "Andy Rohrbaugh",
    team: "Gone in 60 Saquons",
    espnTeamId: 10,
    division: "CHIEF Division",
    photo: "images/IMG_6423.jpeg",
    role: "Manager",
    number: "02",
    nickname: "The Championship-Chasing Ginger",

    legacy: {
      playoffs: "Never Missed",
      championships: "0",
      reputation: "Playoff Regular",
      message:
        "He has never missed the playoffs, but last year's fourth-place finish remains the high-water mark. The Beer Boot is still the ultimate prize."
    },

    traits: {
      strength: "Consistency",
      weakness: "Championships",
      signature: "Playoff Push",
      ability: "Always Finds a Way In"
    },

    quote:
      "Eventually a playoff appearance has to turn into a championship.",

    story: {
      title: "The Championship-Chasing Ginger",
      text: `
        Andy has been the commissioner's friend since third grade, which means the league has been putting up with his competitive nature for decades.
        <br><br>
        He's a ginger, but don't let that fool you. What he lacks in pigmentation, he also lacks in championships... although he makes up for it with intelligence and an enthusiastic "try anything once" spirit.
        <br><br>
        Andy has never missed the playoffs, yet somehow his best finish came last season with a fourth-place finish. Season VII might finally be his chance to prove that playoff appearances eventually mean something.
      `
    }
  }

};


/* =========================================================
   GET MANAGER FROM URL
========================================================= */

const params =
  new URLSearchParams(window.location.search);

const managerId =
  params.get("id") || "matt";

const manager =
  managers[managerId] || managers.matt;


/* =========================================================
   GLOBAL ESPN DATA
========================================================= */

let currentESPNData = null;


/* =========================================================
   HELPERS
========================================================= */

function safeNumber(value, fallback = 0) {

  const number = Number(value);

  return Number.isFinite(number)
    ? number
    : fallback;
}


function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function getRecord(teamData) {

  const record =
    teamData?.record?.overall || {};

  return {

    wins:
      safeNumber(record.wins),

    losses:
      safeNumber(record.losses),

    ties:
      safeNumber(record.ties),

    percentage:
      safeNumber(record.percentage),

    streakLength:
      safeNumber(record.streakLength),

    streakType:
      record.streakType || "",

    pointsFor:
      safeNumber(record.pointsFor),

    pointsAgainst:
      safeNumber(record.pointsAgainst)

  };

}


function formatRecord(record) {

  if (record.ties > 0) {
    return `${record.wins}-${record.losses}-${record.ties}`;
  }

  return `${record.wins}-${record.losses}`;

}


function formatStreak(record) {

  if (!record.streakLength) {
    return "—";
  }

  const type =
    String(record.streakType || "")
      .toUpperCase();

  if (type.includes("WIN")) {
    return `W${record.streakLength}`;
  }

  if (type.includes("LOSS")) {
    return `L${record.streakLength}`;
  }

  return `${record.streakLength}`;

}


/* =========================================================
   FIND TEAM BY ESPN TEAM ID
   THIS IS THE IMPORTANT FIX.
========================================================= */

function findTeamById(teams, teamId) {

  if (!Array.isArray(teams)) {
    return null;
  }

  return (
    teams.find(team =>
      Number(team?.id) === Number(teamId)
    ) || null
  );

}


/* =========================================================
   DIVISION / LEAGUE RANKINGS
========================================================= */

function getDivisionTeams(teams, divisionId) {

  if (!Array.isArray(teams)) {
    return [];
  }

  return teams

    .filter(team =>
      Number(team?.divisionId) ===
      Number(divisionId)
    )

    .sort((a, b) => {

      const aRecord =
        a?.record?.overall || {};

      const bRecord =
        b?.record?.overall || {};

      const aWins =
        safeNumber(aRecord.wins);

      const bWins =
        safeNumber(bRecord.wins);

      if (bWins !== aWins) {
        return bWins - aWins;
      }

      const aPF =
        safeNumber(aRecord.pointsFor);

      const bPF =
        safeNumber(bRecord.pointsFor);

      return bPF - aPF;

    });

}


function getLeagueRank(teams, targetTeam) {

  if (!Array.isArray(teams) || !targetTeam) {
    return null;
  }

  const sorted =
    [...teams].sort((a, b) => {

      const aRecord =
        a?.record?.overall || {};

      const bRecord =
        b?.record?.overall || {};

      const aWins =
        safeNumber(aRecord.wins);

      const bWins =
        safeNumber(bRecord.wins);

      if (bWins !== aWins) {
        return bWins - aWins;
      }

      const aPF =
        safeNumber(aRecord.pointsFor);

      const bPF =
        safeNumber(bRecord.pointsFor);

      return bPF - aPF;

    });

  const index =
    sorted.findIndex(team =>
      Number(team?.id) ===
      Number(targetTeam?.id)
    );

  return index >= 0
    ? index + 1
    : null;

}


function getDivisionRank(teams, targetTeam) {

  if (!targetTeam) {
    return null;
  }

  const divisionTeams =
    getDivisionTeams(
      teams,
      targetTeam.divisionId
    );

  const index =
    divisionTeams.findIndex(team =>
      Number(team?.id) ===
      Number(targetTeam?.id)
    );

  return index >= 0
    ? index + 1
    : null;

}


/* =========================================================
   PLAYER HELPERS
========================================================= */

function getPlayerName(entry) {

  const player =
    entry?.playerPoolEntry?.player ||
    entry?.playerPoolEntry ||
    entry?.player ||
    {};

  if (player.fullName) {
    return player.fullName;
  }

  if (
    player.firstName ||
    player.lastName
  ) {

    return [
      player.firstName,
      player.lastName
    ]
      .filter(Boolean)
      .join(" ");

  }

  return (
    entry?.playerName ||
    `Player #${entry?.playerId ?? "?"}`
  );

}


function getPlayerPosition(entry) {

  const player =
    entry?.playerPoolEntry?.player ||
    entry?.playerPoolEntry ||
    entry?.player ||
    {};

  return (
    player.defaultPosition ||
    player.position ||
    entry?.position ||
    "—"
  );

}


function getPlayerPoints(entry) {

  const pool =
    entry?.playerPoolEntry || {};

  return safeNumber(

    pool.appliedStatTotal ??
    pool.appliedStatTotalForScoringPeriod ??
    entry?.appliedStatTotal ??
    0

  );

}


function getLineupLabel(lineupSlotId) {

  const slots = {

    0: "QB",
    2: "RB",
    3: "RB",
    4: "WR",
    5: "WR",
    6: "TE",
    16: "D/ST",
    17: "K",
    20: "Bench",
    21: "IR",
    23: "FLEX",
    7: "FLEX"

  };

  return (
    slots[lineupSlotId] ||
    "Roster"
  );

}


function getRosterEntries(teamData) {

  return (
    teamData?.roster?.entries ||
    []
  );

}


function getActiveRoster(teamData) {

  return getRosterEntries(teamData)
    .filter(entry =>
      ![20, 21].includes(
        Number(entry?.lineupSlotId)
      )
    );

}


function getBenchRoster(teamData) {

  return getRosterEntries(teamData)
    .filter(entry =>
      [20, 21].includes(
        Number(entry?.lineupSlotId)
      )
    );

}


/* =========================================================
   BUILD ROSTER
========================================================= */

function buildRosterHTML(teamData) {

  const entries =
    getActiveRoster(teamData);

  const bench =
    getBenchRoster(teamData);

  if (!entries.length && !bench.length) {

    return `
      <div class="profile-empty-state">
        Roster data is not currently available from ESPN.
      </div>
    `;

  }

  const buildRow = entry => {

    const name =
      escapeHTML(
        getPlayerName(entry)
      );

    const position =
      escapeHTML(
        getPlayerPosition(entry)
      );

    const slot =
      escapeHTML(
        getLineupLabel(
          Number(entry?.lineupSlotId)
        )
      );

    const points =
      getPlayerPoints(entry)
        .toFixed(1);

    return `

      <div class="manager-roster-row">

        <div class="manager-roster-slot">
          ${slot}
        </div>

        <div class="manager-roster-player">
          <strong>${name}</strong>
          <span>${position}</span>
        </div>

        <div class="manager-roster-points">
          ${points}
        </div>

      </div>

    `;

  };

  return `

    <div class="manager-roster-columns">

      <div class="manager-roster-column">

        <div class="manager-roster-heading">
          STARTING LINEUP
        </div>

        ${
          entries.length
            ? entries.map(buildRow).join("")
            : `
              <div class="profile-empty-state">
                No starters available.
              </div>
            `
        }

      </div>


      <div class="manager-roster-column">

        <div class="manager-roster-heading">
          BENCH
        </div>

        ${
          bench.length
            ? bench.map(buildRow).join("")
            : `
              <div class="profile-empty-state">
                No bench players available.
              </div>
            `
        }

      </div>

    </div>

  `;

}


/* =========================================================
   BUILD WEEKLY SCHEDULE
========================================================= */

function buildScheduleHTML(
  schedule,
  targetTeamId
) {

  if (
    !Array.isArray(schedule) ||
    !targetTeamId
  ) {

    return `
      <div class="profile-empty-state">
        Weekly schedule data is not currently available.
      </div>
    `;

  }

  const games =
    schedule

      .filter(matchup => {

        const homeId =
          Number(matchup?.home?.teamId);

        const awayId =
          Number(matchup?.away?.teamId);

        return (
          homeId === Number(targetTeamId) ||
          awayId === Number(targetTeamId)
        );

      })

      .sort((a, b) =>
        safeNumber(a?.matchupPeriodId) -
        safeNumber(b?.matchupPeriodId)
      );

  if (!games.length) {

    return `
      <div class="profile-empty-state">
        No weekly matchup data is available yet.
      </div>
    `;

  }

  const allTeams =
    currentESPNData?.teams || [];

  return games

    .map(game => {

      const matchupPeriod =
        safeNumber(
          game?.matchupPeriodId
        );

      const homeId =
        Number(game?.home?.teamId);

      const awayId =
        Number(game?.away?.teamId);

      const isHome =
        homeId === Number(targetTeamId);

      const me =
        isHome
          ? game.home
          : game.away;

      const opponentId =
        isHome
          ? awayId
          : homeId;

      const opponent =
        allTeams.find(team =>
          Number(team?.id) ===
          opponentId
        );

      const myScore =
        safeNumber(
          me?.totalPoints
        );

      const opponentSide =
        isHome
          ? game.away
          : game.home;

      const opponentScore =
        safeNumber(
          opponentSide?.totalPoints
        );

      let result = "—";
      let resultClass = "";

      if (
        myScore > 0 ||
        opponentScore > 0
      ) {

        if (myScore > opponentScore) {

          result = "WIN";
          resultClass = "win";

        } else if (
          myScore < opponentScore
        ) {

          result = "LOSS";
          resultClass = "loss";

        } else {

          result = "TIE";
          resultClass = "tie";

        }

      }

      return `

        <div class="manager-week-row">

          <div class="manager-week-number">
            Wk ${matchupPeriod}
          </div>

          <div class="manager-week-opponent">

            <span>
              ${isHome ? "vs." : "at"}
            </span>

            <strong>
              ${
                escapeHTML(
                  opponent?.name ||
                  `Team #${opponentId}`
                )
              }
            </strong>

          </div>

          <div class="manager-week-score">

            ${myScore.toFixed(1)}

            <span>-</span>

            ${opponentScore.toFixed(1)}

          </div>

          <div class="manager-week-result ${resultClass}">
            ${result}
          </div>

        </div>

      `;

    })

    .join("");

}


/* =========================================================
   RENDER PROFILE
========================================================= */

function renderProfile(teamData = null) {

  const profile =
    document.getElementById(
      "manager-profile"
    );

  if (!profile) {

    console.error(
      "MANAGER ERROR: #manager-profile not found."
    );

    return;

  }

  const record =
    getRecord(teamData);

  const recordText =
    formatRecord(record);

  const nickname =
    manager.nickname ||
    "Stillmeadow Manager";

  const traits =
    manager.traits || {

      strength:
        "Competitive",

      weakness:
        "Still Chasing the Beer Boot",

      signature:
        "Draft Day Chaos",

      ability:
        "Never Counted Out"

    };

  const quote =
    manager.quote ||
    "Season VII is still being written.";

  const teams =
    currentESPNData?.teams || [];

  const leagueRank =
    getLeagueRank(
      teams,
      teamData
    );

  const divisionRank =
    getDivisionRank(
      teams,
      teamData
    );

  const divisionName =
    manager.division ||
    "Division";

  const streak =
    formatStreak(record);

  const rosterHTML =
    teamData

      ? buildRosterHTML(teamData)

      : `
        <div class="profile-empty-state">
          ESPN roster loading...
        </div>
      `;

  const scheduleHTML =
    teamData

      ? buildScheduleHTML(
          currentESPNData?.schedule,
          teamData.id
        )

      : `
        <div class="profile-empty-state">
          ESPN schedule loading...
        </div>
      `;

  document.title =
    `${manager.name} | Stillmeadow Beer Summit`;

  profile.innerHTML = `

    <!-- =============================================
         HERO
    ============================================== -->

    <section class="manager-profile-hero">

      <div class="profile-photo-wrap">

        <img
          src="${escapeHTML(manager.photo)}"
          alt="${escapeHTML(manager.name)}"
          class="profile-photo"
          onerror="this.style.display='none';"
        >

        <div class="profile-number">
          ${escapeHTML(manager.number)}
        </div>

      </div>


      <div class="profile-identity">

        <p class="eyebrow">
          ${escapeHTML(manager.role).toUpperCase()}
          • SEASON VII
        </p>

        <h1>
          ${escapeHTML(manager.team)}
        </h1>

        <h2>
          ${escapeHTML(manager.name)}
        </h2>

        <div class="manager-nickname">
          ${escapeHTML(nickname)}
        </div>

        <div class="profile-tags">

          <span>
            ${escapeHTML(divisionName)}
          </span>

          ${
            manager.role === "Commissioner"

              ? "<span>🍺 League Commissioner</span>"

              : "<span>🏈 Stillmeadow Beer Summit</span>"
          }

        </div>

      </div>

    </section>


    <!-- =============================================
         LIVE ESPN STATS
    ============================================== -->

    <section class="profile-stats-section">

      <div class="profile-section-heading">

        <div>

          <p class="eyebrow">
            LIVE FROM ESPN
          </p>

          <h2>
            2026 Season
          </h2>

        </div>

        <span class="profile-live">
          <i></i>
          LIVE
        </span>

      </div>


      <div class="profile-stat-grid">

        <div class="profile-stat">

          <strong>
            ${recordText}
          </strong>

          <span>
            Record
          </span>

        </div>


        <div class="profile-stat">

          <strong>
            ${
              leagueRank
                ? `#${leagueRank}`
                : "—"
            }
          </strong>

          <span>
            League Rank
          </span>

        </div>


        <div class="profile-stat">

          <strong>
            ${
              divisionRank
                ? `#${divisionRank}`
                : "—"
            }
          </strong>

          <span>
            Division Rank
          </span>

        </div>


        <div class="profile-stat">

          <strong>
            ${record.pointsFor.toFixed(1)}
          </strong>

          <span>
            Points For
          </span>

        </div>


        <div class="profile-stat">

          <strong>
            ${record.pointsAgainst.toFixed(1)}
          </strong>

          <span>
            Points Against
          </span>

        </div>


        <div class="profile-stat">

          <strong>
            ${streak}
          </strong>

          <span>
            Current Streak
          </span>

        </div>

      </div>

    </section>


    <!-- =============================================
         TEAM DOSSIER / CAREER
    ============================================== -->

    <section class="profile-details-grid">

      <article class="profile-panel">

        <p class="eyebrow">
          TEAM DOSSIER
        </p>

        <h2>
          The Manager
        </h2>

        <div class="profile-detail-row">

          <span>
            Manager
          </span>

          <strong>
            ${escapeHTML(manager.name)}
          </strong>

        </div>


        <div class="profile-detail-row">

          <span>
            Team
          </span>

          <strong>
            ${escapeHTML(manager.team)}
          </strong>

        </div>


        <div class="profile-detail-row">

          <span>
            Division
          </span>

          <strong>
            ${escapeHTML(manager.division)}
          </strong>

        </div>


        <div class="profile-detail-row">

          <span>
            League Role
          </span>

          <strong>
            ${escapeHTML(manager.role)}
          </strong>

        </div>


        <div class="profile-detail-row">

          <span>
            ESPN Team ID
          </span>

          <strong>
            ${
              teamData?.id ??
              manager.espnTeamId ??
              "Loading..."
            }
          </strong>

        </div>

      </article>


      <article class="profile-panel">

        <p class="eyebrow">
          LEAGUE LEGACY
        </p>

        <h2>
          Career Resume
        </h2>

        <div class="legacy-stats">

          <div class="legacy-stat">

            <strong>
              ${escapeHTML(manager.legacy.playoffs)}
            </strong>

            <span>
              Playoff Resume
            </span>

          </div>


          <div class="legacy-stat">

            <strong>
              ${escapeHTML(manager.legacy.championships)}
            </strong>

            <span>
              Beer Boots
            </span>

          </div>


          <div class="legacy-stat">

            <strong>
              ${escapeHTML(manager.legacy.reputation)}
            </strong>

            <span>
              League Reputation
            </span>

          </div>

        </div>

        <p class="legacy-message">
          ${escapeHTML(manager.legacy.message)}
        </p>

      </article>

    </section>


    <!-- =============================================
         SCOUTING REPORT
    ============================================== -->

    <section class="profile-scouting-report">

      <p class="eyebrow">
        SCOUTING REPORT
      </p>

      <h2>
        The ${escapeHTML(nickname)}
      </h2>

      <div class="scouting-grid">

        <div class="scouting-item">

          <span>
            💪 Strength
          </span>

          <strong>
            ${escapeHTML(traits.strength)}
          </strong>

        </div>


        <div class="scouting-item">

          <span>
            ⚠️ Weakness
          </span>

          <strong>
            ${escapeHTML(traits.weakness)}
          </strong>

        </div>


        <div class="scouting-item">

          <span>
            🎯 Signature Move
          </span>

          <strong>
            ${escapeHTML(traits.signature)}
          </strong>

        </div>


        <div class="scouting-item">

          <span>
            ⚡ Special Ability
          </span>

          <strong>
            ${escapeHTML(traits.ability)}
          </strong>

        </div>

      </div>


      <blockquote class="manager-quote">
        “${escapeHTML(quote)}”
      </blockquote>

    </section>


    <!-- =============================================
         CURRENT ROSTER
    ============================================== -->

    <section class="profile-roster-section">

      <div class="profile-section-heading">

        <div>

          <p class="eyebrow">
            ESPN ROSTER
          </p>

          <h2>
            2026 Squad
          </h2>

        </div>

        <span class="profile-live">
          <i></i>
          LIVE
        </span>

      </div>

      ${rosterHTML}

    </section>


    <!-- =============================================
         WEEKLY RESULTS
    ============================================== -->

    <section class="profile-schedule-section">

      <div class="profile-section-heading">

        <div>

          <p class="eyebrow">
            SEASON VII
          </p>

          <h2>
            Weekly Results
          </h2>

        </div>

      </div>


      <div class="manager-week-list">

        ${scheduleHTML}

      </div>

    </section>


    <!-- =============================================
         STORY
    ============================================== -->

    <section class="profile-story">

      <p class="eyebrow">
        THE STORY
      </p>

      <h2>
        ${escapeHTML(manager.story.title)}
      </h2>

      <div class="profile-story-text">
        ${manager.story.text}
      </div>

      <p class="profile-coming-soon">
        Season VII is still being written.
      </p>

    </section>


    <!-- =============================================
         BACK
    ============================================== -->

    <div class="profile-bottom-link">

      <a
        href="index.html#managers"
        class="button primary"
      >
        ← Back to All Managers
      </a>

    </div>

  `;

}


/* =========================================================
   INITIAL RENDER
========================================================= */

console.log(
  "STILLMEADOW MANAGER.JS LOADED"
);

console.log(
  "Manager:",
  manager.name
);

console.log(
  "Manager ESPN Team ID:",
  manager.espnTeamId
);

renderProfile();


/* =========================================================
   LOAD ESPN DATA
========================================================= */

async function loadManagerData() {

  try {

    console.log(
      "Attempting ESPN connection..."
    );

    /*
      Request the league data.

      IMPORTANT:
      We are NOT searching by team name.

      The manager's ESPN team ID is used below
      to identify the correct team.
    */

    const url =
      `${ESPN_BASE_URL}` +
      `?view=mTeam` +
      `&view=mRoster` +
      `&view=mSchedule` +
      `&view=mStandings` +
      `&view=mStatus`;

    console.log(
      "ESPN URL:",
      url
    );

    const response =
      await fetch(url);

    if (!response.ok) {

      throw new Error(
        `ESPN HTTP ${response.status}`
      );

    }

    const data =
      await response.json();

    console.log(
      "ESPN league data received:",
      data
    );

    currentESPNData =
      data;

    const teams =
      Array.isArray(data?.teams)
        ? data.teams
        : [];

    console.log(
      `ESPN teams found: ${teams.length}`
    );

    /*
      ============================================
      FIND TEAM USING ESPN TEAM ID
      ============================================
    */

    const teamData =
      findTeamById(
        teams,
        manager.espnTeamId
      );

    if (!teamData) {

      console.error(
        `ESPN team ID ${manager.espnTeamId} was not found.`
      );

      console.log(
        "Available ESPN teams:",
        teams.map(team => ({
          id: team?.id,
          name: team?.name
        }))
      );

      return;

    }


    console.log(
      "ESPN TEAM FOUND BY ID:",
      teamData
    );

    console.log(
      "ESPN team ID:",
      teamData.id
    );

    console.log(
      "ESPN team name:",
      teamData.name
    );

    console.log(
      "ESPN record:",
      teamData.record
    );

    console.log(
      "ESPN roster:",
      teamData.roster
    );

    console.log(
      "ESPN schedule:",
      data.schedule
    );


    /*
      ============================================
      RENDER WITH LIVE ESPN DATA
      ============================================
    */

    renderProfile(
      teamData
    );


  } catch (error) {

    console.error(
      "ESPN DATA LOAD ERROR:",
      error
    );

    console.warn(
      "Static manager profile remains active."
    );

  }

}


/* =========================================================
   START ESPN LOAD
========================================================= */

loadManagerData();
