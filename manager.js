const LEAGUE_ID = "4174174";
const SEASON = "2026";

const ESPN_BASE_URL =
  `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${SEASON}/segments/0/leagues/${LEAGUE_ID}`;


/* =========================================================
   MANAGER DATABASE
   ESPN TEAM IDs ARE THE PERMANENT IDENTIFIERS.
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

    championships: 0,

    history: [
      { season: 2020, wins: 10, losses: 3, finish: 3 },
      { season: 2021, wins: 8, losses: 6, finish: 2 },
      { season: 2022, wins: 9, losses: 5, finish: 3 },
      { season: 2023, wins: 4, losses: 10, finish: 7 },
      { season: 2024, wins: 8, losses: 6, finish: 4 },
      { season: 2025, wins: 7, losses: 7, finish: 5 }
    ],

    traits: {
      strength: "Always in the Hunt",
      weakness: "Can't Finish the Job",
      signature: "Commissioner Chaos",
      ability: "Never Gives Up"
    },

    quote:
      "Could'a, would'a, should'a.",

    story: {
      title: "Still Chasing the Boot",
      text: `
        Matt started the Stillmeadow Beer Summit with one simple goal: beat up on his friends in fantasy football and have a damn good time doing it.
        <br><br>
        Somewhere along the way, that turned into draft parties, the legendary Beer Boot trophy, weekly breakdowns and predictions, Monday Night Lites, Studs, Duds and Oh Cruds, a league Facebook page, and now an entire website dedicated to this beautiful mess.
        <br><br>
        All that creativity and competitiveness has produced plenty of memorable moments—and absolutely zero championships. Four semifinal appearances in six seasons prove he's always around when things get serious, but the Beer Boot has somehow remained just out of reach.
        <br><br>
        A district manager by trade, Matt is used to keeping a group of people organized, informed, and occasionally reined in—which makes him perfectly qualified to run this collection of degenerates. A die-hard Steelers fan, proud owner of a brand-new Bronco that he swears he didn't use league dues to purchase, and known to drink almost anyone under the table, the commissioner remains committed to one thing above all else: eventually winning the damn trophy he created.
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

    championships: 1,

    history: [
      { season: 2020, wins: 5, losses: 8, finish: 8 },
      { season: 2021, wins: 8, losses: 6, finish: 3 },
      { season: 2022, wins: 9, losses: 5, finish: 2 },
      { season: 2023, wins: 8, losses: 6, finish: 1 },
      { season: 2024, wins: 9, losses: 5, finish: 6 },
      { season: 2025, wins: 4, losses: 10, finish: 11 }
    ],

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

    championships: 0,

    history: [
      { season: 2020, wins: 3, losses: 10, finish: 10, turd: true },
      { season: 2021, wins: 6, losses: 8, finish: 8 },
      { season: 2022, wins: 5, losses: 9, finish: 9 },
      { season: 2023, wins: 8, losses: 6, finish: 6 },
      { season: 2024, wins: 3, losses: 11, finish: 7 },
      { season: 2025, wins: 10, losses: 4, finish: 2 }
    ],

    traits: {
      strength: "Smoked Meat",
      weakness: "Losing Bracket History",
      signature: "The Perfect Rub",
      ability: "Playoff Surprise"
    },

    quote:
      "The smoker is hot. I'll smoke you and your meat.",

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

    championships: 0,

    history: [
      { season: 2022, wins: 7, losses: 7, finish: 4 },
      { season: 2023, wins: 5, losses: 9, finish: 8 },
      { season: 2024, wins: 6, losses: 8, finish: 12, turd: true },
      { season: 2025, wins: 7, losses: 7, finish: 10 }
    ],

    traits: {
      strength: "Confidence",
      weakness: "Knows Everything",
      signature: "Chair Breaker",
      ability: "Never Runs Out of Words"
    },

    quote:
      "Enough about me, what do you think about what I said about me?",

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

    championships: 0,

    history: [
      { season: 2021, wins: 8, losses: 6, finish: 5 },
      { season: 2022, wins: 5, losses: 9, finish: 7 },
      { season: 2023, wins: 7, losses: 7, finish: 11 },
      { season: 2024, wins: 5, losses: 9, finish: 8 },
      { season: 2025, wins: 3, losses: 11, finish: 9 }
    ],

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
    team: "The Price is Right",
    espnTeamId: 7,
    division: "CHIEF Division",
    photo: "images/IMG_6427.jpeg",
    role: "Manager",
    number: "04",
    nickname: "The Quiet Assassin",

    championships: 3,

    history: [
      { season: 2020, wins: 10, losses: 3, finish: 1 },
      { season: 2021, wins: 9, losses: 5, finish: 1 },
      { season: 2022, wins: 5, losses: 9, finish: 10, turd: true },
      { season: 2023, wins: 6, losses: 8, finish: 9 },
      { season: 2024, wins: 8, losses: 6, finish: 1 },
      { season: 2025, wins: 5, losses: 9, finish: 7 }
    ],

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
        He's willing to take risks that most managers wouldn't consider, and somehow they often pay off. His championship seasons included unconventional lineup strategies that didn't make sense until they absolutely did.
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

    championships: 0,

    history: [
      { season: 2020, wins: 4, losses: 9, finish: 9 },
      { season: 2021, wins: 8, losses: 6, finish: 4 },
      { season: 2022, wins: 6, losses: 8, finish: 8 },
      { season: 2023, wins: 3, losses: 11, finish: 12, turd: true },
      { season: 2024, wins: 5, losses: 9, finish: 9 },
      { season: 2025, wins: 4, losses: 10, finish: 12, turd: true }
    ],

    traits: {
      strength: "Storytelling",
      weakness: "Injuries",
      signature: "Committed Stories",
      ability: "Survive Anything"
    },

    quote:
      "I was committed, to the turd award.",

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


  daryl: {
    name: "Daryl Creager",
    team: "The Godfather II",
    espnTeamId: 9,
    division: "CHIEF Division",
    photo: "images/IMG_6421.jpeg",
    role: "Manager",
    number: "03",
    nickname: "The Godfather",

    championships: 2,

    history: [
      { season: 2020, wins: 8, losses: 5, finish: 4 },
      { season: 2021, wins: 7, losses: 7, finish: 7 },
      { season: 2022, wins: 10, losses: 4, finish: 1 },
      { season: 2023, wins: 7, losses: 7, finish: 5 },
      { season: 2024, wins: 7, losses: 7, finish: 10 },
      { season: 2025, wins: 9, losses: 5, finish: 1 }
    ],

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
    team: "Bed Bath and Bijan",
    espnTeamId: 10,
    division: "CHIEF Division",
    photo: "images/IMG_6423.jpeg",
    role: "Manager",
    number: "02",
    nickname: "The Championship-Chasing Ginger",

    championships: 0,

    history: [
      { season: 2020, wins: 6, losses: 7, finish: 6 },
      { season: 2021, wins: 8, losses: 6, finish: 6 },
      { season: 2022, wins: 8, losses: 6, finish: 5 },
      { season: 2023, wins: 9, losses: 5, finish: 4 },
      { season: 2024, wins: 8, losses: 6, finish: 5 },
      { season: 2025, wins: 12, losses: 2, finish: 4 }
    ],

    traits: {
      strength: "Consistency",
      weakness: "Pigmentation",
      signature: "Playoff Push",
      ability: "Always Finds a Way In"
    },

    quote:
      "I'd give my soul for a championship, if I had one.",

    story: {
      title: "The Championship-Chasing Ginger",
      text: `
        Andy has been the commissioner's friend since third grade, which means the league has been putting up with his competitive nature for decades.
        <br><br>
        He's a ginger, but don't let that fool you. What he lacks in pigmentation, he also lacks in championships... although he makes up for it with intelligence and an enthusiastic "try anything once" spirit. Or twice, or three times, who's counting?
        <br><br>
        Andy has never missed the playoffs, yet somehow his best finish came with a fourth-place finish. His incredible 12-2 regular season in 2025 showed just how dangerous he can be. Season VII might finally be his chance to prove that playoff appearances eventually mean something.
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
    nickname: "The Original Draft Crasher",

    championships: 0,

    history: [
      { season: 2023, wins: 12, losses: 2, finish: 3 },
      { season: 2024, wins: 5, losses: 9, finish: 11 },
      { season: 2025, wins: 6, losses: 8, finish: 8 }
    ],

    traits: {
      strength: "Research",
      weakness: "Old School",
      signature: "Draft Magazine",
      ability: "Makes His Own Rankings"
    },

    quote:
      "ESPN rankings are for libtards. I brought my own magazine.",

    story: {
      title: "The Original Draft Researcher",
      text: `
        Dave may have officially joined during the great league expansion of 2023, but he had been hanging around the Stillmeadow drafts long before receiving his own team.
        <br><br>
        When that turn finally came, Dave brought his own approach. He's the only manager who still brings a draft magazine to the draft. ESPN rankings? Not trusted. Dave makes his own rankings and follows his own plan.
        <br><br>
        Last season was a down year, possibly because he was too busy hosting the draft to actually draft a good team. You can find Dave in his garage smacking his balls while wearing his old wrestling singlet. A stay-at-home dad, Michigan supporter, and firm believer that IPAs are for bitches, Dave is due for a bounce-back campaign.
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

    championships: 0,

    history: [
      { season: 2023, wins: 7, losses: 7, finish: 10 },
      { season: 2024, wins: 11, losses: 3, finish: 2 },
      { season: 2025, wins: 7, losses: 7, finish: 6 }
    ],

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
        His fantasy seasons have been up and down, but a second-place finish in 2024 proved that Jeff can make a serious run when everything comes together.
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

    championships: 0,

    history: [
      { season: 2025, wins: 10, losses: 4, finish: 4 }
    ],

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
        Tyler studies players more like the Godfather than the commissioner, taking the preparation side of fantasy football seriously. That made his first-season performance even more impressive when he finished fourth place.
        <br><br>
        Of course, the season began with an unforgettable draft-day performance. Tyler got so drunk that he actually left partway through the draft and had to come back. Somehow, even a temporary drunken disappearance couldn't stop him from exterminating the competition.
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
   CAREER RESUME CALCULATIONS
========================================================= */

function getCareerStats(history) {

  if (!Array.isArray(history) || !history.length) {

    return {
      seasons: 0,
      wins: 0,
      losses: 0,
      ties: 0,
      games: 0,
      winPct: 0,
      championships: 0,
      bestFinish: null,
      worstFinish: null,
      averageFinish: 0,
      turds: 0,
      firstPlace: 0,
      topThree: 0,
      topSix: 0,
      bestRecord: null,
      mostWins: 0
    };

  }

  const wins =
    history.reduce(
      (sum, season) =>
        sum + safeNumber(season.wins),
      0
    );

  const losses =
    history.reduce(
      (sum, season) =>
        sum + safeNumber(season.losses),
      0
    );

  const ties =
    history.reduce(
      (sum, season) =>
        sum + safeNumber(season.ties),
      0
    );

  const games =
    wins + losses + ties;

  const finishes =
    history
      .map(season =>
        safeNumber(season.finish)
      )
      .filter(finish => finish > 0);

  const bestFinish =
    finishes.length
      ? Math.min(...finishes)
      : null;

  const worstFinish =
    finishes.length
      ? Math.max(...finishes)
      : null;

  const averageFinish =
    finishes.length
      ? finishes.reduce(
          (sum, finish) =>
            sum + finish,
          0
        ) / finishes.length
      : 0;

  const turds =
    history.filter(
      season => season.turd === true
    ).length;

  const firstPlace =
    history.filter(
      season => season.finish === 1
    ).length;

  const topThree =
    history.filter(
      season => season.finish <= 3
    ).length;

  const topSix =
    history.filter(
      season => season.finish <= 6
    ).length;

  const bestRecord =
    [...history].sort((a, b) => {

      const aWins =
        safeNumber(a.wins);

      const bWins =
        safeNumber(b.wins);

      if (bWins !== aWins) {
        return bWins - aWins;
      }

      const aLosses =
        safeNumber(a.losses);

      const bLosses =
        safeNumber(b.losses);

      return aLosses - bLosses;

    })[0] || null;

  const mostWins =
    Math.max(
      ...history.map(
        season =>
          safeNumber(season.wins)
      )
    );

  return {

    seasons:
      history.length,

    wins,

    losses,

    ties,

    games,

    winPct:
      games
        ? (wins / games) * 100
        : 0,

    championships:
      safeNumber(manager.championships),

    bestFinish,

    worstFinish,

    averageFinish,

    turds,

    firstPlace,

    topThree,

    topSix,

    bestRecord,

    mostWins

  };

}


function getFinishLabel(finish) {

  if (!finish) {
    return "—";
  }

  if (finish === 1) {
    return "1st";
  }

  if (finish === 2) {
    return "2nd";
  }

  if (finish === 3) {
    return "3rd";
  }

  return `${finish}th`;

}


function getCareerResumeHTML() {

  const history =
    manager.history || [];

  const stats =
    getCareerStats(history);

  if (!history.length) {

    return `
      <div class="profile-empty-state">
        No historical career data available.
      </div>
    `;

  }

  const championshipText =
    stats.championships === 1
      ? "1 Beer Boot"
      : `${stats.championships} Beer Boots`;

  const bestRecordText =
    stats.bestRecord
      ? `${stats.bestRecord.wins}-${stats.bestRecord.losses}`
      : "—";

  const seasonRows =
    [...history]
      .sort((a, b) =>
        a.season - b.season
      )
      .map(season => {

        const record =
          season.ties
            ? `${season.wins}-${season.losses}-${season.ties}`
            : `${season.wins}-${season.losses}`;

        const finish =
          getFinishLabel(
            season.finish
          );

        const finishClass =
          season.finish === 1
            ? "champion"
            : season.turd
              ? "turd"
              : season.finish <= 3
                ? "podium"
                : season.finish <= 6
                  ? "top-six"
                  : "";

        return `

          <div class="career-season-row">

            <div class="career-season-year">
              ${season.season}
            </div>

            <div class="career-season-record">
              ${record}
            </div>

            <div class="career-season-finish ${finishClass}">
              ${finish}
              ${
                season.finish === 1
                  ? " 🏆"
                  : ""
              }
              ${
                season.turd
                  ? " 💩"
                  : ""
              }
            </div>

          </div>

        `;

      })
      .join("");

  return `

    <div class="career-resume">

      <div class="career-summary-grid">

        <div class="career-stat-card">

          <strong>
            ${stats.seasons}
          </strong>

          <span>
            Seasons
          </span>

        </div>


        <div class="career-stat-card">

          <strong>
            ${stats.wins}-${stats.losses}
          </strong>

          <span>
            Career Record
          </span>

        </div>


        <div class="career-stat-card">

          <strong>
            ${stats.winPct.toFixed(1)}%
          </strong>

          <span>
            Career Win %
          </span>

        </div>


        <div class="career-stat-card">

          <strong>
            ${championshipText}
          </strong>

          <span>
            Championships
          </span>

        </div>


        <div class="career-stat-card">

          <strong>
            ${getFinishLabel(stats.bestFinish)}
          </strong>

          <span>
            Best Finish
          </span>

        </div>


        <div class="career-stat-card">

          <strong>
            ${stats.averageFinish.toFixed(1)}
          </strong>

          <span>
            Average Finish
          </span>

        </div>


        <div class="career-stat-card">

          <strong>
            ${stats.topThree}
          </strong>

          <span>
            Top 3 Finishes
          </span>

        </div>


        <div class="career-stat-card">

          <strong>
            ${stats.turds}
          </strong>

          <span>
            Turd Awards
          </span>

        </div>

      </div>


      <div class="career-record-highlights">

        <div class="career-highlight">

          <span>
            Best Regular Season
          </span>

          <strong>
            ${bestRecordText}
          </strong>

        </div>


        <div class="career-highlight">

          <span>
            Most Wins
          </span>

          <strong>
            ${stats.mostWins}
          </strong>

        </div>


        <div class="career-highlight">

          <span>
            1st Place Finishes
          </span>

          <strong>
            ${stats.firstPlace}
          </strong>

        </div>


        <div class="career-highlight">

          <span>
            Top-6 Finishes
          </span>

          <strong>
            ${stats.topSix}
          </strong>

        </div>

      </div>


      <div class="career-history">

        <div class="career-history-heading">

          <span>
            SEASON
          </span>

          <span>
            RECORD
          </span>

          <span>
            FINISH
          </span>

        </div>

        ${seasonRows}

      </div>

    </div>

  `;

}


/* =========================================================
   FIND TEAM BY ESPN TEAM ID
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

  const careerHTML =
    getCareerResumeHTML();

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
         TEAM DOSSIER
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


      <!-- ===========================================
           LEGACY
      ============================================ -->

      <article class="profile-panel">

        <p class="eyebrow">
          LEAGUE LEGACY
        </p>

        <h2>
          Career Resume
        </h2>

        ${careerHTML}

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
