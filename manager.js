const LEAGUE_ID = "4174174";
const SEASON = "2026";

const ESPN_BASE_URL =
  `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${SEASON}/segments/0/leagues/${LEAGUE_ID}`;

/* =========================
   MANAGER DATABASE
========================= */

const managers = {

  matt: {

    name: "Matt Gilmore",

    team: "Watt She Said",

    division: "CHIEF Division",

    photo: "images/IMG_6482.jpeg",

    role: "Commissioner",

    number: "01",

    legacy: {

      playoffs: "4 of 6",

      championships: "0",

      reputation: "Always in the Hunt",

      message: "Four semifinal appearances. One giant question remains: when does the commissioner finally get his Beer Boot?"

    },

    story: {

      title: "Still Chasing the Boot",

      text: `

        Matt started the Stillmeadow Beer Summit with one simple goal: beat up on his friends in fantasy football and have a damn good time doing it. Somewhere along the way, that turned into draft parties, the legendary Beer Boot trophy, weekly breakdowns and predictions, Monday Night Lites, Studs, Duds and Oh Cruds, a league Facebook page, and now an entire website dedicated to this beautiful mess.

        <br><br>

        All that creativity and competitiveness has produced plenty of memorable moments—and absolutely zero championships. Four semifinal appearances in six seasons prove he's always around when things get serious, but the Beer Boot has somehow remained just out of reach.

        <br><br>

        A district manager by trade, Matt is used to keeping a group of people organized, informed, and occasionally reined in—which makes him perfectly qualified to run this collection of degenerates. A die-hard Steelers fan, proud owner of a brand-new Bronco that he promises wasn't purchased with league dues, and known to drink almost anyone under the table, the commissioner remains committed to one thing above all else: eventually winning the damn trophy he created.

      `

    }

  },

  andy: {

    name: "Andy Rohrbaugh",

    team: "Bed Bath and Bijan",

    division: "CHIEF Division",

    photo: "images/IMG_6423.jpeg",

    role: "Manager",

    number: "02",

    legacy: {

      playoffs: "Never Missed",

      championships: "0",

      reputation: "Playoff Regular",

      message: "He has never missed the playoffs, but last year's fourth-place finish remains the high-water mark. The Beer Boot is still the ultimate prize."

    },

    story: {

      title: "The Championship-Chasing Ginger",

      text: `

        Andy has been the commissioner's friend since third grade, which means the league has been putting up with his competitive nature for decades. He loves to compete, whether it's fantasy football or tossing his balls into the air so grown men can hit them with sticks as a softball pitcher.

        <br><br>

        He's a ginger, but don't let that fool you. What he lacks in pigmentation, he also lacks in championships... although he makes up for it with intelligence and an enthusiastic "try anything once" spirit. Or twice. Maybe three times. Who's counting?

        <br><br>

        Andy has never missed the playoffs, yet somehow his best finish came last season with a fourth-place finish. He would trade his soul for a championship—if gingers had souls, of course. Season VII might finally be his chance to prove that playoff appearances eventually mean something.

      `

    }

  },

  daryl: {

    name: "Daryl Creager",

    team: "Ames is Ahole!",

    division: "CHIEF Division",

    photo: "images/IMG_6421.jpeg",

    role: "Manager",

    number: "03",

    legacy: {

      playoffs: "2× Champion",

      championships: "2",

      reputation: "Mock Draft King",

      message: "Preparation, preparation, preparation. The Godfather studies the draft board like it holds the secrets of the universe—and two Beer Boots suggest it might."

    },

    story: {

      title: "The Godfather",

      text: `

        Self-proclaimed Godfather of the Stillmeadow Beer Summit, Daryl has built a reputation as one of the league's most successful—and most prepared—managers. A two-time Beer Boot champion, he approaches fantasy football like a full-time job and mock drafts like a sacred ritual.

        <br><br>

        Nobody overprepares quite like Daryl. Rankings are studied, strategies are tested, and mock drafts are completed at a rate that would make most fantasy analysts uncomfortable. Then draft day arrives and everyone finds out whether all that preparation was worth it.

        <br><br>

        Of course, the Godfather is also known for sending out trade offers that may be just slightly more beneficial to Daryl than the person receiving them. But when you have two championships, confidence comes with the territory.

      `

    }

  },

  ames: {

    name: "Mike Ames",

    team: "The Price is Right",

    division: "CHIEF Division",

    photo: "images/IMG_6427.jpeg",

    role: "Manager",

    number: "04",

    legacy: {

      playoffs: "Winning Ways",

      championships: "1",

      reputation: "Quiet Assassin",

      message: "He doesn't need to talk much. His teams usually do the talking for him—and somehow the risky moves almost always seem to work."

    },

    story: {

      title: "The Quiet Assassin",

      text: `

        Mike Ames doesn't need to talk a lot of trash. He prefers to quietly build a dangerous team and let the standings do the talking. While everyone else is busy making excuses, Ames is usually finding another way to make an unconventional strategy work.

        <br><br>

        He's willing to take risks that most managers wouldn't consider, and somehow they often pay off. His championship season included starting two elite tight ends all season, with one sitting in the flex—a lineup strategy that didn't make sense until it absolutely did.

        <br><br>

        A fan of his Commanders players, Ames always seems to find room for a few of them in his lineup. It may not be the conventional way to build a roster, but the Quiet Assassin has proven that conventional doesn't always win championships.

      `

    }

  },

  caufield: {

    name: "Mike Caufield",

    team: "CauFIELD of Dreams",

    division: "BILLTROTS Division",

    photo: "images/IMG_6429.jpeg",

    role: "Manager",

    number: "05",

    legacy: {

      playoffs: "2nd Place Finish",

      championships: "0",

      reputation: "Smoked Meat Specialist",

      message: "A runner-up finish last season shocked the losing-bracket legend. Was it the beginning of a dynasty—or just a perfectly smoked one-season run?"

    },

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

    division: "BEAR DOWN Division",

    photo: "images/IMG_6422.jpeg",

    role: "Manager",

    number: "06",

    legacy: {

      playoffs: "Still Fighting",

      championships: "0",

      reputation: "Talks a Big Game",

      message: "What Rob lacks in wins, he more than makes up for in conversation. Just don't start a drinking game based on how often he talks about himself."

    },

    story: {

      title: "The Legend Who Never Stops Talking",

      text: `

        Rob has been the commissioner's best friend since their school years, and their friendship has survived decades of fantasy football, questionable decisions, and conversations that usually revolve back around Rob.

        <br><br>

        At one point, the group attempted a drinking game where everyone took a drink whenever Rob talked about himself. They had to stop because somebody was eventually going to get alcohol poisoning. That may be the greatest testament to his ability to keep a conversation going.

        <br><br>

        A high school teacher, good dad, and friend to just about anyone, Rob brings plenty of personality to the Beer Summit. His fantasy teams may need new players about as badly as he needs a hip replacement, but the man never runs out of confidence—or things to say.

      `

    }

  },

  tim: {

    name: "Tim Stough",

    team: "Waller in Misery",

    division: "BILLTROTS Division",

    photo: "images/IMG_6455.png",

    role: "Manager",

    number: "07",

    legacy: {

      playoffs: "League Veteran",

      championships: "0",

      reputation: "Trade Partner",

      message: "Need help with something? Tim is your guy. Need a running back? He might accidentally give you his best one."

    },

    story: {

      title: "The Guy Who Will Help Anyone",

      text: `

        Tim was the first replacement brought in after the legendary Kidwell Purge, but he had been around the Stillmeadow crew long before officially joining the league. As a coach on the church softball team back when everyone still thought they were 20 and capable of balling, he was already part of the chaos.

        <br><br>

        Tim is the kind of guy who will help with anything. Need a pop-up tent? You got it. Need somebody to lend a hand? He's probably already on his way. Need a running back for your fantasy team? Well... he might even give you his best one.

        <br><br>

        A die-hard Eagles fan, Tim brings loyalty, generosity, and questionable trade decisions to the Beer Summit. His prize possessions include his sports car and his guns, but the Beer Boot remains the prize still missing from the collection.

      `

    }

  },

  jon: {

    name: "Jon Rohrbaugh",

    team: "Blink Juan82",

    division: "BILLTROTS Division",

    photo: "images/IMG_6454.png",

    role: "Manager",

    number: "08",

    legacy: {

      playoffs: "Injury Survivor",

      championships: "0",

      reputation: "Lovable Loser",

      message: "The injury bug keeps biting, the Turd Awards keep coming, and Jon somehow always has another unbelievable story to tell."

    },

    story: {

      title: "The Lovable Loser",

      text: `

        Jon may not always be at the top of the standings, but he is almost always at the center of a good story. His teams seem to come down with a case of the injury bug every season, and recovering from it has proven to be almost as difficult as turning down another trip to the casino.

        <br><br>

        While stacking up Turd Awards and questionable injury reports, Jon somehow manages to keep the league entertained. If his fantasy team is struggling, there's a decent chance he's got a casino jackpot story ready to distract everyone.

        <br><br>

        A Navy veteran and a man with stories that somehow get better with every telling, Jon remains one of the league's most lovable managers. The championship drought may continue, but at least the stories are always championship caliber.

      `

    }

  },

  jeff: {

    name: "Jeff Fishel",

    team: "Just SKOL Baby!",

    division: "BILLTROTS Division",

    photo: "images/IMG_6456.jpeg",

    role: "Manager",

    number: "09",

    legacy: {

      playoffs: "Up & Down",

      championships: "0",

      reputation: "SKOL Specialist",

      message: "The beer knowledge is elite. The Vikings loyalty is unquestioned. The championship consistency is still a work in progress."

    },

    story: {

      title: "The Neighbor Who Wouldn't Leave",

      text: `

        Jeff is the Godfather's neighbor and somehow managed to weasel his way into both the group's hearts and the Stillmeadow Beer Summit simply by continuing to show up. Eventually, everyone gave up and gave him a team.

        <br><br>

        One of the members added during the great league expansion of 2023, Jeff has become a key part of the league through his knowledge of beer, his unwavering Vikings fandom, and his willingness to embrace the chaos.

        <br><br>

        His fantasy seasons have been up and down, but Season VII presents another opportunity for a bounce-back campaign. If knowledge of beer and Vikings trivia counted toward the standings, he'd already have the Beer Boot.

      `

    }

  },

  tyler: {

    name: "Tyler Gilmore",

    team: "Mid Draft Drunken Dropout",

    division: "BEAR DOWN Division",

    photo: "images/IMG_6480.jpeg",

    role: "Manager",

    number: "10",

    legacy: {

      playoffs: "3rd Place Rookie",

      championships: "0",

      reputation: "Draft Day Survivor",

      message: "He got so drunk at his first draft that he had to leave and come back—and still finished third. The competition may have a problem."

    },

    story: {

      title: "The Rookie Exterminator",

      text: `

        Tyler is the commissioner's oldest son and the newest Gilmore to enter the Stillmeadow Beer Summit. He replaced original member Heather Hallmando and wasted absolutely no time making his presence known.

        <br><br>

        Tyler studies players more like the Godfather than the commissioner, taking the preparation side of fantasy football seriously. That made his first-season performance even more impressive when he finished third place.

        <br><br>

        Of course, the season began with an unforgettable draft-day performance. Tyler got so drunk that he actually left partway through the draft and had to come back. Somehow, even a temporary drunken disappearance couldn't stop him from exterminating the competition. Apparently, exterminators are good at getting rid of pests—and bad fantasy teams.

      `

    }

  },

  dave: {

    name: "Dave Cox",

    team: "Whit’s Warriors",

    division: "BEAR DOWN Division",

    photo: "images/IMG_6430.jpeg",

    role: "Manager",

    number: "11",

    legacy: {

      playoffs: "Bounce Back Season",

      championships: "0",

      reputation: "Magazine Man",

      message: "The only man still bringing draft magazines into the modern era. ESPN rankings aren't trusted here—Dave builds his own board."

    },

    story: {

      title: "The Original Draft Researcher",

      text: `

        Dave may have officially joined during the great league expansion of 2023, but he had been hanging around the Stillmeadow drafts long before receiving his own team. He spent plenty of time helping Andy and Jon draft while patiently waiting for his turn.

        <br><br>

        When that turn finally came, Dave brought his own approach. He's the only manager who still brings a draft magazine to the draft. ESPN rankings? Not trusted. Dave makes his own rankings and follows his own plan.

        <br><br>

        Last season was a down year, possibly because he was too busy hosting the draft to actually draft a good team. A stay-at-home dad, Michigan supporter, golf simulator enthusiast, and firm believer that IPAs are for bitches, Dave is due for a bounce-back campaign.

      `

    }

  },

  dan: {

    name: "Dan Gilmore",

    team: "Chase-n da Boot",

    division: "BEAR DOWN Division",

    photo: "images/IMG_6420.jpeg",

    role: "Manager",

    number: "12",

    legacy: {

      playoffs: "Competitive",

      championships: "0",

      reputation: "Wings It",

      message: "No mock drafts. No elaborate preparation. Somehow he just shows up, drafts a competitive team, and makes everyone wonder why they worked so hard."

    },

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

  }

};
/* =========================
   GET MANAGER FROM URL
========================= */

const params = new URLSearchParams(window.location.search);
const managerId = params.get("id") || "matt";
const manager = managers[managerId] || managers.matt;

/* =========================
   BUILD PROFILE
========================= */

function renderProfile(teamData = null) {
  const profile = document.getElementById("manager-profile");

  const record = teamData?.record?.overall || {};
  const wins = record.wins ?? 0;
  const losses = record.losses ?? 0;
  const ties = record.ties ?? 0;
  const pointsFor = record.pointsFor ?? 0;
  const pointsAgainst = record.pointsAgainst ?? 0;

  const recordText =
    ties > 0 ? `${wins}-${losses}-${ties}` : `${wins}-${losses}`;

const legacyContent = manager.legacy

  ? `

    <div class="legacy-stats">

      <div class="legacy-stat">

        <strong>${manager.legacy.playoffs}</strong>

        <span>Playoff Resume</span>

      </div>

      <div class="legacy-stat">

        <strong>${manager.legacy.championships}</strong>

        <span>Beer Boots</span>

      </div>

      <div class="legacy-stat">

        <strong>${manager.legacy.reputation}</strong>

        <span>League Reputation</span>

      </div>

    </div>

    <p class="legacy-message">

      ${manager.legacy.message || "The resume is still being written."}

    </p>

  `

  : `

    <div class="legacy-placeholder">

      <div class="legacy-icon">🍺</div>

      <strong>League history is coming.</strong>

      <p>

        Championships, playoff appearances, career records

        and Beer Summit legends will be added as we build

        the complete league history.

      </p>

    </div>

  `;
  document.title = `${manager.name} | Stillmeadow Beer Summit`;

  profile.innerHTML = `

    <!-- PROFILE HERO -->
    <section class="manager-profile-hero">
      <div class="profile-photo-wrap">
        <img
          src="${manager.photo}"
          alt="${manager.name}"
          class="profile-photo"
        >

        <div class="profile-number">
          ${manager.number}
        </div>
      </div>

      <div class="profile-identity">
        <p class="eyebrow">
          ${manager.role.toUpperCase()} • SEASON VII
        </p>

        <h1>${manager.team}</h1>
        <h2>${manager.name}</h2>

        <div class="manager-nickname">
          ${manager.nickname}
        </div>

        <div class="profile-tags">
          <span>${manager.division}</span>

          ${
            manager.role === "Commissioner"
              ? "<span>🍺 League Commissioner</span>"
              : "<span>🏈 Stillmeadow Beer Summit</span>"
          }
        </div>
      </div>
    </section>

    <!-- 2026 STATS -->
    <section class="profile-stats-section">
      <div class="profile-section-heading">
        <div>
          <p class="eyebrow">LIVE FROM ESPN</p>
          <h2>2026 Season</h2>
        </div>

        <span class="profile-live">
          <i></i>
          LIVE
        </span>
      </div>

      <div class="profile-stat-grid">
        <div class="profile-stat">
          <strong>${recordText}</strong>
          <span>Record</span>
        </div>

        <div class="profile-stat">
          <strong>${Number(pointsFor).toFixed(1)}</strong>
          <span>Points For</span>
        </div>

        <div class="profile-stat">
          <strong>${Number(pointsAgainst).toFixed(1)}</strong>
          <span>Points Against</span>
        </div>
      </div>
    </section>

    <!-- MANAGER DETAILS -->
    <section class="profile-details-grid">
      <article class="profile-panel">
        <p class="eyebrow">TEAM DOSSIER</p>
        <h2>The Manager</h2>

        <div class="profile-detail-row">
          <span>Manager</span>
          <strong>${manager.name}</strong>
        </div>

        <div class="profile-detail-row">
          <span>Team</span>
          <strong>${manager.team}</strong>
        </div>

        <div class="profile-detail-row">
          <span>Division</span>
          <strong>${manager.division}</strong>
        </div>

        <div class="profile-detail-row">
          <span>League Role</span>
          <strong>${manager.role}</strong>
        </div>
      </article>

      <article class="profile-panel">
        <p class="eyebrow">LEAGUE LEGACY</p>
        <h2>Career Resume</h2>
        ${legacyContent}
      </article>
    </section>

    <!-- SCOUTING REPORT -->
    <section class="profile-scouting-report">
      <p class="eyebrow">SCOUTING REPORT</p>
      <h2>The ${manager.nickname}</h2>

      <div class="scouting-grid">
        <div class="scouting-item">
          <span>💪 Strength</span>
          <strong>${manager.traits.strength}</strong>
        </div>

        <div class="scouting-item">
          <span>⚠️ Weakness</span>
          <strong>${manager.traits.weakness}</strong>
        </div>

        <div class="scouting-item">
          <span>🎯 Signature Move</span>
          <strong>${manager.traits.signature}</strong>
        </div>

        <div class="scouting-item">
          <span>⚡ Special Ability</span>
          <strong>${manager.traits.ability}</strong>
        </div>
      </div>

      <blockquote class="manager-quote">
        “${manager.quote}”
      </blockquote>
    </section>

  <!-- THE STORY -->

<section class="profile-story">

  <p class="eyebrow">THE STORY</p>

  <h2>${manager.story.title}</h2>

  <div class="profile-story-text">

    ${manager.story.text}

  </div>

  <p class="profile-coming-soon">

    Season VII is still being written.

  </p>

</section>

    <!-- BACK TO MANAGERS -->
    <div class="profile-bottom-link">
      <a href="index.html#managers" class="button primary">
        ← Back to All Managers
      </a>
    </div>
  `;
}

/* =========================
   LOAD LIVE ESPN TEAM DATA
========================= */

async function loadManagerData() {
  try {
    const response = await fetch(
      `${ESPN_BASE_URL}?view=mTeam`
    );

    if (!response.ok) {
      throw new Error("Could not connect to ESPN");
    }

    const data = await response.json();
    const teams = data.teams || [];

    const teamData = teams.find(
      (team) => team.name === manager.team
    );

    renderProfile(teamData);
  } catch (error) {
    console.error("Manager profile ESPN error:", error);
    renderProfile();
  }
}

loadManagerData();
