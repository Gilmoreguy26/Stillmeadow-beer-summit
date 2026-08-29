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
    nickname: "The Commissioner",
    legacy: {
      playoffs: "League Founder",
      championships: "0",
      reputation: "Still Chasing the Boot",
      bestFinish: "Championship Pending"
    },
    traits: {
      strength: "Creativity, competitiveness and keeping the league alive",
      weakness: "Turning a great season into a championship",
      signature: "Creating another league feature while his lineup is still questionable",
      ability: "Commissioner's Privilege"
    },
    quote:
      "I built the league, bought the trophy, and wrote the history… I just haven't figured out how to win the damn thing.",
    story: {
      title: "Still Chasing the Boot",
      text: `
        The man responsible for this entire mess. Matt started the Stillmeadow
        Beer Summit with one simple goal: get a group of friends together and
        beat the hell out of them in fantasy football.

        <br><br>

        Somewhere along the way, it became much bigger than that. Draft parties.
        The legendary Beer Boot trophy. Weekly breakdowns and predictions.
        Monday Night Lites. Studs, Duds & Oh Cruds. A league Facebook page built
        to keep the trash talk flowing. And now an entire website dedicated to
        the history and insanity of the league.

        <br><br>

        Competitive, creative, and apparently willing to do almost anything to
        make the league better—except build a championship-caliber team.
        Despite consistently being in the hunt, the Commissioner is still
        chasing his first Beer Boot.

        <br><br>

        A die-hard Steelers fan, proud owner of a brand-new Bronco that he swears
        was not purchased with league dues, and capable of drinking almost anyone
        under the table, Matt remains one championship away from completing his
        ultimate fantasy football resume.
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
    nickname: "The Ginger Grinder",
    legacy: {
      playoffs: "Never Missed",
      championships: "0",
      reputation: "Always in the Hunt",
      bestFinish: "4th Place"
    },
    traits: {
      strength: "Fiercely competitive and consistently in the hunt",
      weakness: "Finishing the job",
      signature: "Making the playoffs look easy",
      ability: "Ginger Persistence"
    },
    quote:
      "I'd sell my soul for a championship... but apparently I don't have one to trade.",
    story: {
      title: "The Hunt for the First Boot",
      text: `
        The Commissioner's friend since third grade and one of the fiercest
        competitors in the Stillmeadow Beer Summit. Andy doesn't know how to
        half-ass anything—whether it's fantasy football or tossing his balls into
        the air so grown men can hit them with sticks as a softball pitcher.

        <br><br>

        He's a ginger, but don't let that fool you. What he lacks in pigmentation,
        he also lacks in championships… although he makes up for it with
        intelligence, competitiveness, and a legendary "try anything once" spirit.
        Or twice. Maybe three times. Who's counting?

        <br><br>

        Despite never missing the playoffs, Andy is still waiting for his first
        trip to the top. His fourth-place finish remains the pinnacle of his
        Stillmeadow Beer Summit career. This year, he's coming for the Beer Boot.
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
    nickname: "The Godfather",
    legacy: {
      playoffs: "Championship Pedigree",
      championships: "2",
      reputation: "Mock Draft King",
      bestFinish: "🏆 League Champion"
    },
    traits: {
      strength: "Preparation and championship roster building",
      weakness: "Believing every trade offer is perfectly fair",
      signature: "The Trade You Can Refuse",
      ability: "Mock Draft Mastermind"
    },
    quote:
      "I've already done seventeen mock drafts. Your trade offer still sucks.",
    story: {
      title: "An Offer You Can Refuse",
      text: `
        The self-proclaimed Godfather of the Stillmeadow Beer Summit and the
        undisputed King of the Mock Draft. Daryl leaves nothing to chance,
        studying, drafting, and preparing for every possible scenario before
        the real draft even begins.

        <br><br>

        With two Beer Boots on his résumé, it's hard to argue with the results.
        Just be careful when a trade offer hits your inbox. The Godfather has a
        habit of making deals that seem to benefit one particular manager more
        than everyone else.

        <br><br>

        Overprepared? Absolutely. Overconfident? Occasionally. Successful?
        Two championships say yes.
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
    nickname: "The Quiet Assassin",
    legacy: {
      playoffs: "When He Makes It, He Wins",
      championships: "3",
      reputation: "Lets the Trophies Talk",
      bestFinish: "🏆 League Champion"
    },
    traits: {
      strength: "Calculated risks that somehow keep paying off",
      weakness: "Trusting Commanders players a little too much",
      signature: "Starting two tight ends because why not?",
      ability: "It Just Works"
    },
    quote: "He doesn't say much. He doesn't need to. Check the trophy case.",
    story: {
      title: "Let the Winning Do the Talking",
      text: `
        The Quiet Assassin doesn't need to tell you he's coming for the Beer
        Boot—he'll let the standings do the talking. Mike takes chances other
        managers wouldn't dare to make, and somehow they almost always pay off.

        <br><br>

        He trusts his instincts, trusts his guys, and has no problem slipping
        a few Commanders players into his lineup. He once built a championship
        season around two top tight ends, starting one in the flex. It wasn't
        conventional. It didn't matter.

        <br><br>

        While everyone else debates strategy and talks trash, Ames quietly
        keeps stacking wins.
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
    nickname: "The Smokin' Implant",
    legacy: {
      playoffs: "Building Momentum",
      championships: "0",
      reputation: "Losing Bracket Legend",
      bestFinish: "🥈 2nd Place"
    },
    traits: {
      strength: "Patience and low-and-slow execution",
      weakness: "Consistency and occasionally team loyalty",
      signature: "Switching allegiances when the other team gets good",
      ability: "Low & Slow"
    },
    quote: "Trust the process. Keep it low, keep it slow… and pass the sausage.",
    story: {
      title: "From the Losing Bracket to the Championship Hunt",
      text: `
        One of the Stillmeadow implants, Caufield was lucky enough to marry his
        way into this collection of misfits. His wife had known the crew for
        years, and somehow Michael was allowed through security.

        <br><br>

        When he's not managing a fantasy roster, he can usually be found smoking
        meats, perfecting his rub, and preparing enough food to feed the entire
        league. He's also a Bills fan… unless the Patriots are good. Then things
        can get a little complicated. Hence the legendary Billtriots Division.

        <br><br>

        A longtime losing-bracket legend, Caufield shocked everyone with a
        second-place finish last season. Is it the beginning of a new era or a
        temporary hot streak? The smoker—and the season—will eventually tell.
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
    nickname: "The Human Podcast",
    legacy: {
      playoffs: "Still Talking About It",
      championships: "0",
      reputation: "Hall of Fame Storyteller",
      bestFinish: "The Conversation Continues"
    },
    traits: {
      strength: "Loyalty, friendship and unlimited dialogue",
      weakness: "Replacing underperforming players",
      signature: "Talking about himself until someone needs a refill",
      ability: "Unlimited Dialogue"
    },
    quote: "But enough about me. What do you think about what I just said about me?",
    story: {
      title: "The Conversation Never Ends",
      text: `
        The Commissioner's best friend since their school days and proof that
        fantasy football success isn't required to have a Hall of Fame personality.

        <br><br>

        What Rob lacks in wins, he more than makes up for in words. The league
        once tried turning his conversations into a drinking game, but the game
        had to be retired for the safety of everyone involved.

        <br><br>

        A high school teacher, great dad, loyal friend, and genuinely good guy…
        just don't expect him to stop talking long enough to make a waiver-wire
        move. He needs to replace players on his roster about as badly as he
        needs a hip replacement.
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
    nickname: "The Helpful Heist",
    legacy: {
      playoffs: "Always Willing to Help",
      championships: "0",
      reputation: "The Guy You Can Count On",
      bestFinish: "Still Writing the Story"
    },
    traits: {
      strength: "Helping with absolutely anything",
      weakness: "Being a little too generous in trades",
      signature: "Sure, you can have my best running back",
      ability: "Anything You Need"
    },
    quote: "Sure, I can help with that. Wait… you want my best player too?",
    story: {
      title: "The Guy Who Will Help With Anything",
      text: `
        The first replacement brought in after the legendary Kidwell Purge, Tim
        wasn't exactly a stranger. He'd already spent years coaching the church
        softball team back when everyone still believed they were twenty years
        old and could actually ball.

        <br><br>

        Tim is the kind of guy who will help with absolutely anything. Need a
        pop-up tent? He's got you. Need help moving something? No problem. Need
        a running back? Apparently, you can have his best one too.

        <br><br>

        A die-hard Eagles fan, Tim remains one of the most dependable people in
        the league—unless you count protecting his fantasy roster, where his
        generosity can occasionally get the better of him.
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
    nickname: "The Lovable Loser",
    legacy: {
      playoffs: "Injuries Pending",
      championships: "0",
      reputation: "Turd Award Magnet",
      bestFinish: "The Stories Were Better"
    },
    traits: {
      strength: "Always entertaining",
      weakness: "Keeping his roster healthy",
      signature: "Blaming the injury bug",
      ability: "Jackpot Recovery"
    },
    quote: "My team would be undefeated if healthy… and if I stopped starting injured players.",
    story: {
      title: "The Injury Report Is His Arch Nemesis",
      text: `
        Every league needs a guy who can lose another matchup, collect another
        Turd Award, and still somehow be one of the most entertaining people at
        the draft. That's Jon.

        <br><br>

        A Navy veteran, casino jackpot survivor, and lifelong victim of the
        fantasy football injury bug, Jon's teams always seem to find a new and
        creative way to suffer. But he'll have a great story about it—and
        probably an even better story about what happened at the casino afterward.

        <br><br>

        His fantasy team may be dead, but the stories are always alive.
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
    nickname: "The Beer Professor",
    legacy: {
      playoffs: "Still Brewing",
      championships: "0",
      reputation: "Beer Summit Specialist",
      bestFinish: "Bounce Back Candidate"
    },
    traits: {
      strength: "Beer knowledge and persistence",
      weakness: "Consistency",
      signature: "Showing up until nobody remembers you weren't invited",
      ability: "Nordic Resilience"
    },
    quote: "I wasn't invited. I was just here long enough to become a member.",
    story: {
      title: "The Neighbor Who Wouldn't Leave",
      text: `
        Jeff didn't grow up in Stillmeadow. He simply lived next to the Godfather,
        started showing up, and eventually weaseled his way into both the group
        and the league.

        <br><br>

        As one of the members of the Great League Expansion of 2023, Jeff quickly
        established himself as an essential part of the Beer Summit thanks to an
        impressive knowledge of beer and an unwavering devotion to the Minnesota
        Vikings.

        <br><br>

        His fantasy seasons have been a little like the Vikings themselves—full
        of hope, unexpected turns, highs, lows, and the occasional question of
        what the hell just happened. But he always comes back ready for another
        round.
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
    nickname: "The Rookie Exterminator",
    legacy: {
      playoffs: "Rookie Year Statement",
      championships: "0",
      reputation: "Immediate Threat",
      bestFinish: "🥉 3rd Place Rookie Season"
    },
    traits: {
      strength: "Studies the players and prepares for the draft",
      weakness: "Possibly too much draft-day beer",
      signature: "Leaving his own draft and still finishing third",
      ability: "Pest Control"
    },
    quote: "Blackout drafting is apparently a viable strategy.",
    story: {
      title: "The Rookie Who Made a Statement",
      text: `
        The Commissioner's oldest son and the newest member of the Stillmeadow
        Beer Summit. Tyler took over for original league member Heather Hallmando
        and immediately made his presence felt with an impressive third-place
        finish in his rookie campaign.

        <br><br>

        By trade, he's an exterminator—but apparently his biggest pests are
        veteran fantasy managers. Unlike the Commissioner, Tyler actually studies
        the players and prepares for the draft, taking a page out of the
        Godfather's over-prepared playbook.

        <br><br>

        His first season nearly ended before it started when he got so drunk at
        the draft that he left partway through and had to come back to finish.
        Somehow, it worked out.
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
    nickname: "The Draft Room Traditionalist",
    legacy: {
      playoffs: "Bounce Back Loading",
      championships: "0",
      reputation: "Trusts His Own Rankings",
      bestFinish: "Still Building"
    },
    traits: {
      strength: "Preparation and independent thinking",
      weakness: "Hosting the draft while trying to draft",
      signature: "Ignoring ESPN because his magazine knows better",
      ability: "Old-School Research"
    },
    quote: "I don't care what ESPN says. My magazine has him ranked higher.",
    story: {
      title: "The Last Man With a Draft Magazine",
      text: `
        Dave waited patiently for his opportunity to join the Stillmeadow Beer
        Summit, spending years hanging around draft day and helping Andy and Jon
        prepare their teams before finally getting his own shot.

        <br><br>

        While everyone else trusts ESPN rankings, Dave comes prepared with
        something the rest of the league apparently considers ancient technology:
        a draft magazine. He doesn't trust the experts, doesn't trust the rankings,
        and would rather make his own damn list.

        <br><br>

        Last season was rough, but Dave had a legitimate excuse—he was busy hosting
        the draft and apparently forgot he was supposed to build a good fantasy
        team too. When he's not managing his roster, he can usually be found in
        his garage firing up the golf simulator. GO BLUE.
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
    nickname: "The Winging-It Professor",
    legacy: {
      playoffs: "Competitive Without a Plan",
      championships: "1",
      reputation: "No Preparation Required",
      bestFinish: "🏆 League Champion"
    },
    traits: {
      strength: "Showing up unprepared and still building a competitive team",
      weakness: "Planning ahead",
      signature: "Walking into the draft with absolutely no mock drafts",
      ability: "Russian Dan"
    },
    quote: "Mock drafts are for people who need a plan.",
    story: {
      title: "Making Winging It an Art Form",
      text: `
        The Commissioner's big brother, longtime childhood bully, and childhood
        best friend of the Godfather. Dan has somehow turned winging it into an art
        form.

        <br><br>

        While everyone else is studying rankings and completing mock draft number
        seventeen, Dan simply shows up, drafts a competitive team, and acts like
        this was the plan all along.

        <br><br>

        He's a Doctor—but not the kind you want examining your injury. This Doctor
        specializes in higher learning. After a few too many drinks, however, the
        league gets introduced to his alter ego: Russian Dan. At that point, the
        accent comes out and everyone in his phone contacts should probably prepare
        for a call.
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

  const legacyContent = `
    <div class="legacy-stats">
      <div class="legacy-stat">
        <strong>${manager.legacy.playoffs}</strong>
        <span>Career / Playoff Story</span>
      </div>

      <div class="legacy-stat">
        <strong>${manager.legacy.championships}</strong>
        <span>Beer Boots</span>
      </div>

      <div class="legacy-stat">
        <strong>${manager.legacy.bestFinish}</strong>
        <span>Career Highlight</span>
      </div>

      <div class="legacy-stat">
        <strong>${manager.legacy.reputation}</strong>
        <span>League Reputation</span>
      </div>
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
