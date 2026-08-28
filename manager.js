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

      playoffs: "4 of 5",

      championships: "0",

      reputation: "Always in the Hunt"

    },

    story: {

      title: "Still Chasing the Boot",

      text: `

        Since the beginning of the Stillmeadow Beer Summit, Watt She Said

        has been a fixture in the hunt. As commissioner and one of the league's

        most consistent competitors, Matt has built a reputation for finding a

        way into the conversation when the playoffs roll around.

        <br><br>

        Four semifinal appearances in the previous five seasons prove that

        this team is never far from the Beer Boot. But consistency alone

        doesn't get your name engraved in league history.

        <br><br>

        The mission remains the same: survive the season, win when it matters,

        and finally bring the Beer Boot home. Until then, the chase continues.

      `

    }

  },

  andy: {

    name: "Andy Rohrbaugh",

    team: "Bed Bath and Bijan",

    division: "CHIEF Division",

    photo: "images/IMG_6423.jpeg",

    role: "Manager",

    number: "02"

  },

  daryl: {

    name: "Daryl Creager",

    team: "Ames is Ahole!",

    division: "CHIEF Division",

    photo: "images/IMG_6421.jpeg",

    role: "Manager",

    number: "03"

  },

  ames: {

    name: "Mike Ames",

    team: "The Price is Right",

    division: "CHIEF Division",

    photo: "images/IMG_6427.jpeg",

    role: "Manager",

    number: "04"

  },

  caufield: {

    name: "Mike Caufield",

    team: "CauFIELD of Dreams",

    division: "BILLTROTS Division",

    photo: "images/IMG_6429.jpeg",

    role: "Manager",

    number: "05"

  },

  rob: {

    name: "Rob Robertson",

    team: "1-Tooth Willies Hillbillies",

    division: "BEAR DOWN Division",

    photo: "images/IMG_6422.jpeg",

    role: "Manager",

    number: "06"

  },

  tim: {

    name: "Tim Stough",

    team: "Waller in Misery",

    division: "BILLTROTS Division",

    photo: "images/IMG_6455.png",

    role: "Manager",

    number: "07"

  },

  jon: {

    name: "Jon Rohrbaugh",

    team: "Blink Juan82",

    division: "BILLTROTS Division",

    photo: "images/IMG_6454.png",

    role: "Manager",

    number: "08"

  },

  jeff: {

    name: "Jeff Fishel",

    team: "Just SKOL Baby!",

    division: "BILLTROTS Division",

    photo: "images/IMG_6456.jpeg",

    role: "Manager",

    number: "09"

  },

  tyler: {

    name: "Tyler Gilmore",

    team: "Mid Draft Drunken Dropout",

    division: "BEAR DOWN Division",

    photo: "images/IMG_6480.jpeg",

    role: "Manager",

    number: "10"

  },

  dave: {

    name: "Dave Cox",

    team: "Whit’s Warriors",

    division: "BEAR DOWN Division",

    photo: "images/IMG_6430.jpeg",

    role: "Manager",

    number: "11"

  },

  dan: {

    name: "Dan Gilmore",

    team: "Chase-n da Boot",

    division: "BEAR DOWN Division",

    photo: "images/IMG_6420.jpeg",

    role: "Manager",

    number: "12"

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

    ties > 0

      ? `${wins}-${losses}-${ties}`

      : `${wins}-${losses}`;

  const legacyContent = manager.legacy

    ? `

      <div class="legacy-stats">

        <div class="legacy-stat">

          <strong>${manager.legacy.playoffs}</strong>

          <span>Semifinal Appearances</span>

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

        Consistency has never been the problem. The only thing missing

        from the resume is the Beer Boot.

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

  const storyTitle = manager.story

    ? manager.story.title

    : "Every Manager Has a Story";

  const storyText = manager.story

    ? manager.story.text

    : `

      This is where the legends of the Stillmeadow Beer Summit live.

      Rivalries, questionable trades, championship runs, draft-day

      disasters and the moments that make this league more than

      just fantasy football.

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

        <div class="profile-tags">

          <span>${manager.division}</span>

          ${manager.role === "Commissioner"

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

    <!-- THE STORY -->

    <section class="profile-story">

      <p class="eyebrow">THE STORY</p>

      <h2>${storyTitle}</h2>

      <p>${storyText}</p>

      ${manager.story

        ? `<p class="profile-coming-soon">

             Season VII is still being written.

           </p>`

        : `<p class="profile-coming-soon">

             More manager history coming soon.

           </p>`

      }

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
