/* =========================================================
   STILLMEADOW BEER SUMMIT LEAGUE
   HISTORICAL DATABASE — 2020 THROUGH 2025
   Seasons I–VI

   2026 is intentionally NOT included here.
   2026 remains the live/current season handled by manager.js.
========================================================= */

const LEAGUE_HISTORY = {
  2020: {
    year: 2020,
    season: "Season I",
    teams: 10,
    champion: "Mike Ames",
    runnerUp: "Heather Hallman",
    championshipScore: "159.14–140.28",

    championship: {
      round: "Championship",
      week: 17,
      winner: "Mike Ames",
      winnerTeam: "My Ball Zach Ertz",
      winnerScore: 159.14,
      loser: "Heather Hallman",
      loserTeam: "Hall Mando",
      loserScore: 140.28
    },

    standings: [
      {
        rank: 1,
        manager: "Mike Ames",
        team: "My Ball Zach Ertz",
        record: "10-3-0",
        wins: 10,
        losses: 3,
        ties: 0,
        pf: 1748.52,
        pa: 1549.06,
        pfPerGame: 134.5,
        paPerGame: 119.2,
        diff: 15.3,
        division: "6-2-0",
        home: "5-2-0",
        away: "5-1-0",
        streak: "W1",
        moves: 11
      },
      {
        rank: 2,
        manager: "Heather Hallman",
        team: "Hall Mando",
        record: "8-5-0",
        wins: 8,
        losses: 5,
        ties: 0,
        pf: 1799.94,
        pa: 1627.84,
        pfPerGame: 138.5,
        paPerGame: 125.2,
        diff: 13.2,
        division: "5-3-0",
        home: "4-2-0",
        away: "4-3-0",
        streak: "W1",
        moves: 15
      },
      {
        rank: 3,
        manager: "Matt Gilmore",
        team: "In it for the T-shirt",
        record: "10-3-0",
        wins: 10,
        losses: 3,
        ties: 0,
        pf: 1729.42,
        pa: 1566.4,
        pfPerGame: 133.0,
        paPerGame: 120.5,
        diff: 12.5,
        division: "5-3-0",
        home: "5-2-0",
        away: "5-1-0",
        streak: "W3",
        moves: 38
      },
      {
        rank: 4,
        manager: "Daryl Creager",
        team: "Primetime Choke Artists",
        record: "8-5-0",
        wins: 8,
        losses: 5,
        ties: 0,
        pf: 1718.3,
        pa: 1665.62,
        pfPerGame: 132.2,
        paPerGame: 128.1,
        diff: 4.1,
        division: "5-3-0",
        home: "3-4-0",
        away: "5-1-0",
        streak: "W3",
        moves: 38
      },
      {
        rank: 5,
        manager: "Heather Kidwell",
        team: "WDW Zip TD Doo Dah",
        record: "7-6-0",
        wins: 7,
        losses: 6,
        ties: 0,
        pf: 1582.32,
        pa: 1541.4,
        pfPerGame: 121.7,
        paPerGame: 118.6,
        diff: 3.1,
        division: "4-4-0",
        home: "3-3-0",
        away: "4-3-0",
        streak: "L1",
        moves: 13
      },
      {
        rank: 6,
        manager: "Andrew Rohrbaugh",
        team: "Fake Commish",
        record: "6-7-0",
        wins: 6,
        losses: 7,
        ties: 0,
        pf: 1479.3,
        pa: 1588.94,
        pfPerGame: 113.8,
        paPerGame: 122.2,
        diff: -8.4,
        division: "5-3-0",
        home: "5-1-0",
        away: "1-6-0",
        streak: "L2",
        moves: 27
      },
      {
        rank: 7,
        manager: "Joseph Kidwell",
        team: "Monken’s Maniacs",
        record: "4-9-0",
        wins: 4,
        losses: 9,
        ties: 0,
        pf: 1567.84,
        pa: 1592.0,
        pfPerGame: 120.6,
        paPerGame: 122.5,
        diff: -1.9,
        division: "2-6-0",
        home: "1-6-0",
        away: "3-3-0",
        streak: "L3",
        moves: 20
      },
      {
        rank: 8,
        manager: "Dan Gilmore",
        team: "Team Out of Towner",
        record: "5-8-0",
        wins: 5,
        losses: 8,
        ties: 0,
        pf: 1628.48,
        pa: 1717.18,
        pfPerGame: 125.3,
        paPerGame: 132.1,
        diff: -6.8,
        division: "2-6-0",
        home: "4-3-0",
        away: "1-5-0",
        streak: "L1",
        moves: 13
      },
      {
        rank: 9,
        manager: "Jon Rohrbaugh",
        team: "Raw Baughs",
        record: "4-9-0",
        wins: 4,
        losses: 9,
        ties: 0,
        pf: 1443.58,
        pa: 1655.78,
        pfPerGame: 111.0,
        paPerGame: 127.4,
        diff: -16.3,
        division: "4-4-0",
        home: "1-5-0",
        away: "3-4-0",
        streak: "L1",
        moves: 8
      },
      {
        rank: 10,
        manager: "Michael Caufield",
        team: "Tampa Bay Flying Elvis'",
        record: "3-10-0",
        wins: 3,
        losses: 10,
        ties: 0,
        pf: 1491.92,
        pa: 1685.4,
        pfPerGame: 114.8,
        paPerGame: 129.6,
        diff: -14.9,
        division: "2-6-0",
        home: "3-3-0",
        away: "0-7-0",
        streak: "W1",
        moves: 40
      }
    ],

    playoffs: {
      rounds: [
        {
          name: "Quarterfinals",
          week: 15,
          games: [
            {
              seedA: 5,
              managerA: "Heather Kidwell",
              teamA: "WDW Zip TD Doo Dah",
              scoreA: 110.46,
              seedB: 4,
              managerB: "Daryl Creager",
              teamB: "Primetime Choke Artists",
              scoreB: 161.34,
              winner: "Daryl Creager"
            },
            {
              seedA: 6,
              managerA: "Andrew Rohrbaugh",
              teamA: "Fake Commish",
              scoreA: 149.36,
              seedB: 3,
              managerB: "Matt Gilmore",
              teamB: "In it for the T-shirt",
              scoreB: 171.62,
              winner: "Matt Gilmore"
            }
          ],
          byes: [
            {
              seed: 1,
              manager: "Mike Ames",
              team: "My Ball Zach Ertz"
            },
            {
              seed: 2,
              manager: "Heather Hallman",
              team: "Hall Mando"
            }
          ]
        },

        {
          name: "Semifinals",
          week: 16,
          games: [
            {
              seedA: 4,
              managerA: "Daryl Creager",
              teamA: "Primetime Choke Artists",
              scoreA: 92.24,
              seedB: 1,
              managerB: "Mike Ames",
              teamB: "My Ball Zach Ertz",
              scoreB: 96.5,
              winner: "Mike Ames"
            },
            {
              seedA: 3,
              managerA: "Matt Gilmore",
              teamA: "In it for the T-shirt",
              scoreA: 137.26,
              seedB: 2,
              managerB: "Heather Hallman",
              teamB: "Hall Mando",
              scoreB: 175.44,
              winner: "Heather Hallman"
            }
          ]
        },

        {
          name: "Championship",
          week: 17,
          games: [
            {
              seedA: 1,
              managerA: "Mike Ames",
              teamA: "My Ball Zach Ertz",
              scoreA: 159.14,
              seedB: 2,
              managerB: "Heather Hallman",
              teamB: "Hall Mando",
              scoreB: 140.28,
              winner: "Mike Ames"
            }
          ]
        }
      ]
    }
  },


  /* =======================================================
     2021 — SEASON II
  ======================================================= */

  2021: {
    year: 2021,
    season: "Season II",
    teams: 10,
    champion: "Mike Ames",
    runnerUp: "Matt Gilmore",
    championshipScore: "128.32–118.26",

    championship: {
      round: "Championship",
      week: 17,
      winner: "Mike Ames",
      winnerTeam: "Bishop Sycamore",
      winnerScore: 128.32,
      loser: "Matt Gilmore",
      loserTeam: "Off In Church",
      loserScore: 118.26
    },

    standings: [
      {
        rank: 1,
        manager: "Mike Ames",
        team: "Bishop Sycamore",
        record: "9-5-0",
        wins: 9,
        losses: 5,
        ties: 0,
        pf: 1696.06,
        pa: 1667.36,
        pfPerGame: 121.1,
        paPerGame: 119.1,
        diff: 2.0,
        division: "4-4-0",
        home: "4-3-0",
        away: "5-2-0",
        streak: "W5",
        moves: 8
      },
      {
        rank: 2,
        manager: "Matt Gilmore",
        team: "Off In Church",
        record: "8-6-0",
        wins: 8,
        losses: 6,
        ties: 0,
        pf: 1878.94,
        pa: 1714.56,
        pfPerGame: 134.2,
        paPerGame: 122.5,
        diff: 11.7,
        division: "4-4-0",
        home: "3-4-0",
        away: "5-2-0",
        streak: "L2",
        moves: 27
      },
      {
        rank: 3,
        manager: "Dan Gilmore",
        team: "Team PS EW Alum",
        record: "8-6-0",
        wins: 8,
        losses: 6,
        ties: 0,
        pf: 1802.98,
        pa: 1693.48,
        pfPerGame: 128.8,
        paPerGame: 121.0,
        diff: 7.8,
        division: "4-4-0",
        home: "3-4-0",
        away: "5-2-0",
        streak: "W2",
        moves: 13
      },
      {
        rank: 4,
        manager: "Jon Rohrbaugh",
        team: "Raw Baughs",
        record: "8-6-0",
        wins: 8,
        losses: 6,
        ties: 0,
        pf: 1669.1,
        pa: 1728.06,
        pfPerGame: 119.2,
        paPerGame: 123.4,
        diff: -4.2,
        division: "6-2-0",
        home: "4-3-0",
        away: "4-3-0",
        streak: "L1",
        moves: 14
      },
      {
        rank: 5,
        manager: "Tim Stough",
        team: "Craphead McGee",
        record: "8-6-0",
        wins: 8,
        losses: 6,
        ties: 0,
        pf: 1604.6,
        pa: 1648.44,
        pfPerGame: 114.6,
        paPerGame: 117.7,
        diff: -3.1,
        division: "5-3-0",
        home: "4-3-0",
        away: "4-3-0",
        streak: "L1",
        moves: 53
      },
      {
        rank: 6,
        manager: "Andrew Rohrbaugh",
        team: "Draft Dodgers",
        record: "8-6-0",
        wins: 8,
        losses: 6,
        ties: 0,
        pf: 1758.44,
        pa: 1643.64,
        pfPerGame: 125.6,
        paPerGame: 117.4,
        diff: 8.2,
        division: "5-3-0",
        home: "4-3-0",
        away: "4-3-0",
        streak: "W1",
        moves: 25
      },
      {
        rank: 7,
        manager: "Daryl Creager",
        team: "The Godfather",
        record: "7-7-0",
        wins: 7,
        losses: 7,
        ties: 0,
        pf: 1962.0,
        pa: 1865.34,
        pfPerGame: 140.1,
        paPerGame: 133.2,
        diff: 6.9,
        division: "5-3-0",
        home: "3-4-0",
        away: "4-3-0",
        streak: "W1",
        moves: 31
      },
      {
        rank: 8,
        manager: "Michael Caufield",
        team: "Toilet Turd Burglers",
        record: "6-8-0",
        wins: 6,
        losses: 8,
        ties: 0,
        pf: 1665.1,
        pa: 1690.22,
        pfPerGame: 118.9,
        paPerGame: 120.7,
        diff: -1.8,
        division: "3-5-0",
        home: "3-4-0",
        away: "3-4-0",
        streak: "W1",
        moves: 37
      },
      {
        rank: 9,
        manager: "Joseph Kidwell",
        team: "Monken’s Maniacs",
        record: "4-10-0",
        wins: 4,
        losses: 10,
        ties: 0,
        pf: 1671.16,
        pa: 1908.02,
        pfPerGame: 119.4,
        paPerGame: 136.3,
        diff: -16.9,
        division: "3-5-0",
        home: "2-5-0",
        away: "2-5-0",
        streak: "L1",
        moves: 36
      },
      {
        rank: 10,
        manager: "Heather Hallman",
        team: "Hall Mando",
        record: "4-10-0",
        wins: 4,
        losses: 10,
        ties: 0,
        pf: 1661.16,
        pa: 1810.42,
        pfPerGame: 118.7,
        paPerGame: 129.3,
        diff: -10.7,
        division: "1-7-0",
        home: "2-5-0",
        away: "2-5-0",
        streak: "L4",
        moves: 16
      }
    ],

    playoffs: {
      rounds: [
        {
          name: "Quarterfinals",
          week: 15,
          games: [
            {
              seedA: 5,
              managerA: "Andrew Rohrbaugh",
              teamA: "Draft Dodgers",
              scoreA: 96.48,
              seedB: 4,
              managerB: "Dan Gilmore",
              teamB: "Team PS EW Alum",
              scoreB: 155.84,
              winner: "Dan Gilmore"
            },
            {
              seedA: 6,
              managerA: "Tim Stough",
              teamA: "Craphead McGee",
              scoreA: 112.78,
              seedB: 3,
              managerB: "Matt Gilmore",
              teamB: "Off In Church",
              scoreB: 159.66,
              winner: "Matt Gilmore"
            }
          ],
          byes: [
            {
              seed: 1,
              manager: "Mike Ames",
              team: "Bishop Sycamore"
            },
            {
              seed: 2,
              manager: "Jon Rohrbaugh",
              team: "Raw Baughs"
            }
          ]
        },

        {
          name: "Semifinals",
          week: 16,
          games: [
            {
              seedA: 4,
              managerA: "Dan Gilmore",
              teamA: "Team PS EW Alum",
              scoreA: 96.14,
              seedB: 1,
              managerB: "Mike Ames",
              teamB: "Bishop Sycamore",
              scoreB: 114.28,
              winner: "Mike Ames"
            },
            {
              seedA: 3,
              managerA: "Matt Gilmore",
              teamA: "Off In Church",
              scoreA: 107.18,
              seedB: 2,
              managerB: "Jon Rohrbaugh",
              teamB: "Raw Baughs",
              scoreB: 102.42,
              winner: "Matt Gilmore"
            }
          ]
        },

        {
          name: "Championship",
          week: 17,
          games: [
            {
              seedA: 1,
              managerA: "Mike Ames",
              teamA: "Bishop Sycamore",
              scoreA: 128.32,
              seedB: 3,
              managerB: "Matt Gilmore",
              teamB: "Off In Church",
              scoreB: 118.26,
              winner: "Mike Ames"
            }
          ]
        }
      ]
    }
  },


  /* =======================================================
     2022 — SEASON III
  ======================================================= */

  2022: {
    year: 2022,
    season: "Season III",
    teams: 10,
    champion: "Daryl Creager",
    runnerUp: "Dan Gilmore",
    championshipScore: "159.28–83.60",

    championship: {
      round: "Championship",
      week: 17,
      winner: "Daryl Creager",
      winnerTeam: "The Godfather",
      winnerScore: 159.28,
      loser: "Dan Gilmore",
      loserTeam: "Bench Warmers",
      loserScore: 83.6
    },

    standings: [
      {
        rank: 1,
        manager: "Daryl Creager",
        team: "The Godfather",
        record: "10-4-0",
        wins: 10,
        losses: 4,
        ties: 0,
        pf: 2078.86,
        pa: 1735.76,
        pfPerGame: 148.5,
        paPerGame: 124.0,
        diff: 24.5,
        division: "5-3-0",
        home: "5-2-0",
        away: "5-2-0",
        streak: "W7",
        moves: 37
      },
      {
        rank: 2,
        manager: "Dan Gilmore",
        team: "Bench Warmers",
        record: "9-5-0",
        wins: 9,
        losses: 5,
        ties: 0,
        pf: 1688.44,
        pa: 1656.08,
        pfPerGame: 120.6,
        paPerGame: 118.3,
        diff: 2.3,
        division: "5-3-0",
        home: "5-2-0",
        away: "4-3-0",
        streak: "L2",
        moves: 27
      },
      {
        rank: 3,
        manager: "Matt Gilmore",
        team: "Pickettsburgh Feelers",
        record: "9-5-0",
        wins: 9,
        losses: 5,
        ties: 0,
        pf: 1633.82,
        pa: 1556.26,
        pfPerGame: 116.7,
        paPerGame: 111.2,
        diff: 5.5,
        division: "5-3-0",
        home: "5-2-0",
        away: "4-3-0",
        streak: "W2",
        moves: 38
      },
      {
        rank: 4,
        manager: "Rob Robertson",
        team: "1-Tooth Willies Hillbillies",
        record: "7-7-0",
        wins: 7,
        losses: 7,
        ties: 0,
        pf: 1659.54,
        pa: 1626.06,
        pfPerGame: 118.5,
        paPerGame: 116.1,
        diff: 2.4,
        division: "4-4-0",
        home: "2-5-0",
        away: "5-2-0",
        streak: "W2",
        moves: 30
      },
      {
        rank: 5,
        manager: "Andrew Rohrbaugh",
        team: "Jingle All the Way",
        record: "8-6-0",
        wins: 8,
        losses: 6,
        ties: 0,
        pf: 1789.56,
        pa: 1712.82,
        pfPerGame: 127.8,
        paPerGame: 122.3,
        diff: 5.5,
        division: "6-2-0",
        home: "3-4-0",
        away: "5-2-0",
        streak: "L2",
        moves: 16
      },
      {
        rank: 6,
        manager: "Heather Hallman",
        team: "Hall Mando",
        record: "6-8-0",
        wins: 6,
        losses: 8,
        ties: 0,
        pf: 1628.28,
        pa: 1768.08,
        pfPerGame: 116.3,
        paPerGame: 126.3,
        diff: -10.0,
        division: "4-4-0",
        home: "4-3-0",
        away: "2-5-0",
        streak: "L2",
        moves: 12
      },
      {
        rank: 7,
        manager: "Tim Stough",
        team: "Craphead McGee",
        record: "5-9-0",
        wins: 5,
        losses: 9,
        ties: 0,
        pf: 1603.78,
        pa: 1646.7,
        pfPerGame: 114.6,
        paPerGame: 117.6,
        diff: -3.1,
        division: "3-5-0",
        home: "1-6-0",
        away: "4-3-0",
        streak: "L1",
        moves: 42
      },
      {
        rank: 8,
        manager: "Jon Rohrbaugh",
        team: "Raw Baughs",
        record: "6-8-0",
        wins: 6,
        losses: 8,
        ties: 0,
        pf: 1638.88,
        pa: 1723.7,
        pfPerGame: 117.1,
        paPerGame: 123.1,
        diff: -6.1,
        division: "5-3-0",
        home: "4-3-0",
        away: "2-5-0",
        streak: "L2",
        moves: 2
      },
      {
        rank: 9,
        manager: "Michael Caufield",
        team: "Toilet Turd Burglers",
        record: "5-9-0",
        wins: 5,
        losses: 9,
        ties: 0,
        pf: 1511.6,
        pa: 1708.34,
        pfPerGame: 108.0,
        paPerGame: 122.0,
        diff: -14.1,
        division: "1-7-0",
        home: "1-6-0",
        away: "4-3-0",
        streak: "W1",
        moves: 22
      },
      {
        rank: 10,
        manager: "Mike Ames",
        team: "Drink Heinicke",
        record: "5-9-0",
        wins: 5,
        losses: 9,
        ties: 0,
        pf: 1594.62,
        pa: 1693.58,
        pfPerGame: 113.9,
        paPerGame: 121.0,
        diff: -7.1,
        division: "2-6-0",
        home: "1-6-0",
        away: "4-3-0",
        streak: "W2",
        moves: 9
      }
    ],

    playoffs: {
      rounds: [
        {
          name: "Quarterfinals",
          week: 15,
          games: [
            {
              seedA: 5,
              managerA: "Rob Robertson",
              teamA: "1-Tooth Willies Hillbillies",
              scoreA: 149.2,
              seedB: 4,
              managerB: "Andrew Rohrbaugh",
              teamB: "Jingle All the Way",
              scoreB: 107.24,
              winner: "Rob Robertson"
            },
            {
              seedA: 6,
              managerA: "Heather Hallman",
              teamA: "Hall Mando",
              scoreA: 124.4,
              seedB: 3,
              managerB: "Matt Gilmore",
              teamB: "Pickettsburgh Feelers",
              scoreB: 159.28,
              winner: "Matt Gilmore"
            }
          ],
          byes: [
            {
              seed: 1,
              manager: "Daryl Creager",
              team: "The Godfather"
            },
            {
              seed: 2,
              manager: "Dan Gilmore",
              team: "Bench Warmers"
            }
          ]
        },

        {
          name: "Semifinals",
          week: 16,
          games: [
            {
              seedA: 5,
              managerA: "Rob Robertson",
              teamA: "1-Tooth Willies Hillbillies",
              scoreA: 121.56,
              seedB: 1,
              managerB: "Daryl Creager",
              teamB: "The Godfather",
              scoreB: 132.44,
              winner: "Daryl Creager"
            },
            {
              seedA: 3,
              managerA: "Matt Gilmore",
              teamA: "Pickettsburgh Feelers",
              scoreA: 151.36,
              seedB: 2,
              managerB: "Dan Gilmore",
              teamB: "Bench Warmers",
              scoreB: 156.9,
              winner: "Dan Gilmore"
            }
          ]
        },

        {
          name: "Championship",
          week: 17,
          games: [
            {
              seedA: 2,
              managerA: "Dan Gilmore",
              teamA: "Bench Warmers",
              scoreA: 83.6,
              seedB: 1,
              managerB: "Daryl Creager",
              teamB: "The Godfather",
              scoreB: 159.28,
              winner: "Daryl Creager"
            }
          ]
        }
      ]
    }
  },


  /* =======================================================
     2023 — SEASON IV
  ======================================================= */

  2023: {
    year: 2023,
    season: "Season IV",
    teams: 12,
    champion: "Dan Gilmore",
    runnerUp: "Heather Hallman",
    championshipScore: "144.70–101.84",

    championship: {
      round: "Championship",
      week: 17,
      winner: "Dan Gilmore",
      winnerTeam: "Outoftowner",
      winnerScore: 144.7,
      loser: "Heather Hallman",
      loserTeam: "Hall Mando",
      loserScore: 101.84
    },

    standings: [
      {
        rank: 1,
        manager: "Dan Gilmore",
        team: "Outoftowner",
        record: "8-6-0",
        wins: 8,
        losses: 6,
        ties: 0,
        pf: 1858.3,
        pa: 1755.4,
        pfPerGame: 132.7,
        paPerGame: 125.4,
        diff: 7.3,
        division: "3-3-0",
        home: "3-2-0",
        away: "5-4-0",
        streak: "W1",
        moves: 24
      },
      {
        rank: 2,
        manager: "Heather Hallman",
        team: "Hall Mando",
        record: "8-6-0",
        wins: 8,
        losses: 6,
        ties: 0,
        pf: 1658.96,
        pa: 1490.02,
        pfPerGame: 118.5,
        paPerGame: 106.4,
        diff: 12.1,
        division: "5-1-0",
        home: "3-4-0",
        away: "5-2-0",
        streak: "W7",
        moves: 13
      },
      {
        rank: 3,
        manager: "Dave Cox",
        team: "Day's Daddy",
        record: "12-2-0",
        wins: 12,
        losses: 2,
        ties: 0,
        pf: 1829.34,
        pa: 1532.26,
        pfPerGame: 130.7,
        paPerGame: 109.4,
        diff: 21.2,
        division: "6-0-0",
        home: "5-2-0",
        away: "7-0-0",
        streak: "W6",
        moves: 20
      },
      {
        rank: 4,
        manager: "Andrew Rohrbaugh",
        team: "Off the Schnide",
        record: "9-5-0",
        wins: 9,
        losses: 5,
        ties: 0,
        pf: 1846.82,
        pa: 1645.82,
        pfPerGame: 131.9,
        paPerGame: 117.6,
        diff: 14.4,
        division: "5-1-0",
        home: "4-2-0",
        away: "5-3-0",
        streak: "W3",
        moves: 21
      },
      {
        rank: 5,
        manager: "Daryl Creager",
        team: "Misfit Toyz",
        record: "7-7-0",
        wins: 7,
        losses: 7,
        ties: 0,
        pf: 1770.2,
        pa: 1672.5,
        pfPerGame: 126.4,
        paPerGame: 119.5,
        diff: 7.0,
        division: "4-2-0",
        home: "2-4-0",
        away: "5-3-0",
        streak: "L2",
        moves: 32
      },
      {
        rank: 6,
        manager: "Michael Caufield",
        team: "CauFIELD of Dreams",
        record: "8-6-0",
        wins: 8,
        losses: 6,
        ties: 0,
        pf: 1652.7,
        pa: 1666.98,
        pfPerGame: 118.0,
        paPerGame: 119.1,
        diff: -1.0,
        division: "2-4-0",
        home: "4-4-0",
        away: "4-2-0",
        streak: "L1",
        moves: 26
      },
      {
        rank: 7,
        manager: "Matt Gilmore",
        team: "The Chosen One",
        record: "4-10-0",
        wins: 4,
        losses: 10,
        ties: 0,
        pf: 1541.16,
        pa: 1703.16,
        pfPerGame: 110.1,
        paPerGame: 121.7,
        diff: -11.6,
        division: "1-5-0",
        home: "2-6-0",
        away: "2-4-0",
        streak: "L1",
        moves: 39
      },
      {
        rank: 8,
        manager: "Rob Robertson",
        team: "1-Tooth Willies Hillbillies",
        record: "5-9-0",
        wins: 5,
        losses: 9,
        ties: 0,
        pf: 1565.76,
        pa: 1755.86,
        pfPerGame: 111.8,
        paPerGame: 125.4,
        diff: -13.6,
        division: "0-6-0",
        home: "2-4-0",
        away: "3-5-0",
        streak: "L4",
        moves: 18
      },
      {
        rank: 9,
        manager: "Mike Ames",
        team: "Howell at the Moon",
        record: "6-8-0",
        wins: 6,
        losses: 8,
        ties: 0,
        pf: 1668.12,
        pa: 1668.92,
        pfPerGame: 119.2,
        paPerGame: 119.2,
        diff: -0.1,
        division: "1-5-0",
        home: "3-6-0",
        away: "3-2-0",
        streak: "L3",
        moves: 6
      },
      {
        rank: 10,
        manager: "Jeff Fishel",
        team: "Nimble Giants",
        record: "7-7-0",
        wins: 7,
        losses: 7,
        ties: 0,
        pf: 1622.04,
        pa: 1728.3,
        pfPerGame: 115.9,
        paPerGame: 123.4,
        diff: -7.6,
        division: "3-3-0",
        home: "3-3-0",
        away: "4-4-0",
        streak: "L2",
        moves: 23
      },
      {
        rank: 11,
        manager: "Tim Stough",
        team: "Hold My Azz!",
        record: "7-7-0",
        wins: 7,
        losses: 7,
        ties: 0,
        pf: 1612.72,
        pa: 1758.28,
        pfPerGame: 115.2,
        paPerGame: 125.6,
        diff: -10.4,
        division: "4-2-0",
        home: "4-4-0",
        away: "3-3-0",
        streak: "W2",
        moves: 35
      },
      {
        rank: 12,
        manager: "Jon Rohrbaugh",
        team: "Raw Baughs",
        record: "3-11-0",
        wins: 3,
        losses: 11,
        ties: 0,
        pf: 1420.14,
        pa: 1668.76,
        pfPerGame: 101.4,
        paPerGame: 119.2,
        diff: -17.8,
        division: "2-4-0",
        home: "1-7-0",
        away: "2-4-0",
        streak: "W1",
        moves: 8
      }
    ],

    playoffs: {
      rounds: [
        {
          name: "Quarterfinals",
          week: 15,
          games: [
            {
              seedA: 5,
              managerA: "Michael Caufield",
              teamA: "CauFIELD of Dreams",
              scoreA: 92.76,
              seedB: 4,
              managerB: "Dan Gilmore",
              teamB: "Outoftowner",
              scoreB: 146.98,
              winner: "Dan Gilmore"
            },
            {
              seedA: 6,
              managerA: "Daryl Creager",
              teamA: "Misfit Toyz",
              scoreA: 107.64,
              seedB: 3,
              managerB: "Heather Hallman",
              teamB: "Hall Mando",
              scoreB: 143.82,
              winner: "Heather Hallman"
            }
          ],
          byes: [
            {
              seed: 1,
              manager: "Dave Cox",
              team: "Day's Daddy"
            },
            {
              seed: 2,
              manager: "Andrew Rohrbaugh",
              team: "Off the Schnide"
            }
          ]
        },

        {
          name: "Semifinals",
          week: 16,
          games: [
            {
              seedA: 4,
              managerA: "Dan Gilmore",
              teamA: "Outoftowner",
              scoreA: 111.5,
              seedB: 1,
              managerB: "Dave Cox",
              teamB: "Day's Daddy",
              scoreB: 110.84,
              winner: "Dan Gilmore"
            },
            {
              seedA: 3,
              managerA: "Heather Hallman",
              teamA: "Hall Mando",
              scoreA: 183.82,
              seedB: 2,
              managerB: "Andrew Rohrbaugh",
              teamB: "Off the Schnide",
              scoreB: 95.38,
              winner: "Heather Hallman"
            }
          ]
        },

        {
          name: "Championship",
          week: 17,
          games: [
            {
              seedA: 4,
              managerA: "Dan Gilmore",
              teamA: "Outoftowner",
              scoreA: 144.7,
              seedB: 3,
              managerB: "Heather Hallman",
              teamB: "Hall Mando",
              scoreB: 101.84,
              winner: "Dan Gilmore"
            }
          ]
        }
      ]
    }
  },


  /* =======================================================
     2024 — SEASON V
  ======================================================= */

  2024: {
    year: 2024,
    season: "Season V",
    teams: 12,
    champion: "Mike Ames",
    runnerUp: "Jeff Fishel",
    championshipScore: "185.58–131.98",

    championship: {
      round: "Championship",
      week: 17,
      winner: "Mike Ames",
      winnerTeam: "Won't you be my Naber",
      winnerScore: 185.58,
      loser: "Jeff Fishel",
      loserTeam: "Just SKOL Baby!",
      loserScore: 131.98
    },

    standings: [
      {
        rank: 1,
        manager: "Mike Ames",
        team: "Won't you be my Naber",
        record: "8-6-0",
        wins: 8,
        losses: 6,
        ties: 0,
        pf: 1820.48,
        pa: 1756.38,
        pfPerGame: 130.0,
        paPerGame: 125.5,
        diff: 4.6,
        division: "5-1-0",
        home: "5-4-0",
        away: "3-2-0",
        streak: "W4",
        moves: 13
      },
      {
        rank: 2,
        manager: "Jeff Fishel",
        team: "Just SKOL Baby!",
        record: "11-3-0",
        wins: 11,
        losses: 3,
        ties: 0,
        pf: 1920.46,
        pa: 1589.9,
        pfPerGame: 137.2,
        paPerGame: 113.6,
        diff: 23.6,
        division: "5-1-0",
        home: "4-1-0",
        away: "7-2-0",
        streak: "W3",
        moves: 22
      },
      {
        rank: 3,
        manager: "Heather Hallman",
        team: "Hall Mando",
        record: "9-5-0",
        wins: 9,
        losses: 5,
        ties: 0,
        pf: 1734.96,
        pa: 1639.6,
        pfPerGame: 123.9,
        paPerGame: 117.1,
        diff: 6.8,
        division: "4-2-0",
        home: "4-4-0",
        away: "5-1-0",
        streak: "L2",
        moves: 13
      },
      {
        rank: 4,
        manager: "Matt Gilmore",
        team: "Commish the dish",
        record: "8-6-0",
        wins: 8,
        losses: 6,
        ties: 0,
        pf: 1842.74,
        pa: 1682.52,
        pfPerGame: 131.6,
        paPerGame: 120.2,
        diff: 11.4,
        division: "4-2-0",
        home: "6-3-0",
        away: "2-3-0",
        streak: "W2",
        moves: 39
      },
      {
        rank: 5,
        manager: "Andrew Rohrbaugh",
        team: "You Cant Unsuck",
        record: "8-6-0",
        wins: 8,
        losses: 6,
        ties: 0,
        pf: 1673.52,
        pa: 1714.44,
        pfPerGame: 119.5,
        paPerGame: 122.5,
        diff: -2.9,
        division: "3-3-0",
        home: "2-0-0",
        away: "6-6-0",
        streak: "W3",
        moves: 21
      },
      {
        rank: 6,
        manager: "Dan Gilmore",
        team: "Burrowed 6ftUnder",
        record: "9-5-0",
        wins: 9,
        losses: 5,
        ties: 0,
        pf: 1889.7,
        pa: 1686.42,
        pfPerGame: 135.0,
        paPerGame: 120.5,
        diff: 14.5,
        division: "4-2-0",
        home: "3-2-0",
        away: "6-3-0",
        streak: "W1",
        moves: 21
      },
      {
        rank: 7,
        manager: "Michael Caufield",
        team: "CauFIELD of Dreams",
        record: "3-11-0",
        wins: 3,
        losses: 11,
        ties: 0,
        pf: 1661.52,
        pa: 1903.1,
        pfPerGame: 118.7,
        paPerGame: 135.9,
        diff: -17.3,
        division: "1-5-0",
        home: "1-6-0",
        away: "2-5-0",
        streak: "L4",
        moves: 25
      },
      {
        rank: 8,
        manager: "Tim Stough",
        team: "Saquon Deez Nuts",
        record: "5-9-0",
        wins: 5,
        losses: 9,
        ties: 0,
        pf: 1716.16,
        pa: 1759.78,
        pfPerGame: 122.6,
        paPerGame: 125.7,
        diff: -3.1,
        division: "3-3-0",
        home: "3-6-0",
        away: "2-3-0",
        streak: "W1",
        moves: 38
      },
      {
        rank: 9,
        manager: "Jon Rohrbaugh",
        team: "Girth wind and fire",
        record: "5-9-0",
        wins: 5,
        losses: 9,
        ties: 0,
        pf: 1556.98,
        pa: 1838.04,
        pfPerGame: 111.2,
        paPerGame: 131.3,
        diff: -20.1,
        division: "2-4-0",
        home: "3-6-0",
        away: "2-3-0",
        streak: "L1",
        moves: 7
      },
      {
        rank: 10,
        manager: "Daryl Creager",
        team: "Hurts to Pee",
        record: "7-7-0",
        wins: 7,
        losses: 7,
        ties: 0,
        pf: 1753.58,
        pa: 1700.34,
        pfPerGame: 125.3,
        paPerGame: 121.5,
        diff: 3.8,
        division: "3-3-0",
        home: "3-2-0",
        away: "4-5-0",
        streak: "L2",
        moves: 40
      },
      {
        rank: 11,
        manager: "Dave Cox",
        team: "🤣",
        record: "5-9-0",
        wins: 5,
        losses: 9,
        ties: 0,
        pf: 1477.28,
        pa: 1693.3,
        pfPerGame: 105.5,
        paPerGame: 121.0,
        diff: -15.4,
        division: "1-5-0",
        home: "3-4-0",
        away: "2-5-0",
        streak: "L1",
        moves: 32
      },
      {
        rank: 12,
        manager: "Rob Robertson",
        team: "1-Tooth Willies Hillbillies",
        record: "6-8-0",
        wins: 6,
        losses: 8,
        ties: 0,
        pf: 1657.6,
        pa: 1741.16,
        pfPerGame: 118.4,
        paPerGame: 124.4,
        diff: -6.0,
        division: "1-5-0",
        home: "5-4-0",
        away: "1-4-0",
        streak: "L3",
        moves: 21
      }
    ],

    playoffs: {
      rounds: [
        {
          name: "Quarterfinals",
          week: 15,
          games: [
            {
              seedA: 5,
              managerA: "Matt Gilmore",
              teamA: "Commish the dish",
              scoreA: 156.0,
              seedB: 4,
              managerB: "Dan Gilmore",
              teamB: "Burrowed 6ftUnder",
              scoreB: 138.64,
              winner: "Matt Gilmore"
            },
            {
              seedA: 6,
              managerA: "Andrew Rohrbaugh",
              teamA: "You Cant Unsuck",
              scoreA: 143.58,
              seedB: 3,
              managerB: "Mike Ames",
              teamB: "Won't you be my Naber",
              scoreB: 148.94,
              winner: "Mike Ames"
            }
          ],
          byes: [
            {
              seed: 1,
              manager: "Jeff Fishel",
              team: "Just SKOL Baby!"
            },
            {
              seed: 2,
              manager: "Heather Hallman",
              team: "Hall Mando"
            }
          ]
        },

        {
          name: "Semifinals",
          week: 16,
          games: [
            {
              seedA: 5,
              managerA: "Matt Gilmore",
              teamA: "Commish the dish",
              scoreA: 116.8,
              seedB: 1,
              managerB: "Jeff Fishel",
              teamB: "Just SKOL Baby!",
              scoreB: 151.44,
              winner: "Jeff Fishel"
            },
            {
              seedA: 3,
              managerA: "Mike Ames",
              teamA: "Won't you be my Naber",
              scoreA: 153.32,
              seedB: 2,
              managerB: "Heather Hallman",
              teamB: "Hall Mando",
              scoreB: 121.94,
              winner: "Mike Ames"
            }
          ]
        },

        {
          name: "Championship",
          week: 17,
          games: [
            {
              seedA: 3,
              managerA: "Mike Ames",
              teamA: "Won't you be my Naber",
              scoreA: 185.58,
              seedB: 1,
              managerB: "Jeff Fishel",
              teamB: "Just SKOL Baby!",
              scoreB: 131.98,
              winner: "Mike Ames"
            }
          ]
        }
      ]
    }
  },


  /* =======================================================
     2025 — SEASON VI
  ======================================================= */

  2025: {
    year: 2025,
    season: "Season VI",
    teams: 12,
    champion: "Daryl Creager",
    runnerUp: "Michael Caufield",
    championshipScore: "119.90–99.30",

    championship: {
      round: "Championship",
      week: 17,
      winner: "Daryl Creager",
      winnerTeam: "The Godfather Part ll",
      winnerScore: 119.9,
      loser: "Michael Caufield",
      loserTeam: "CauFIELD of Dreams",
      loserScore: 99.3
    },

    standings: [
      {
        rank: 1,
        manager: "Daryl Creager",
        team: "The Godfather Part ll",
        record: "9-5-0",
        wins: 9,
        losses: 5,
        ties: 0,
        pf: 1913.2,
        pa: 1698.8,
        pfPerGame: 136.7,
        paPerGame: 121.3,
        diff: 15.3,
        division: "3-3-0",
        home: "4-2-0",
        away: "5-3-0",
        streak: "W3",
        moves: 19
      },
      {
        rank: 2,
        manager: "Michael Caufield",
        team: "CauFIELD of Dreams",
        record: "10-4-0",
        wins: 10,
        losses: 4,
        ties: 0,
        pf: 1863.5,
        pa: 1703.9,
        pfPerGame: 133.1,
        paPerGame: 121.7,
        diff: 11.4,
        division: "5-1-0",
        home: "5-0-0",
        away: "5-4-0",
        streak: "L1",
        moves: 36
      },
      {
        rank: 3,
        manager: "Tyler Gilmore",
        team: "Mid Draft Drunken Dropout",
        record: "10-4-0",
        wins: 10,
        losses: 4,
        ties: 0,
        pf: 1731.45,
        pa: 1698.55,
        pfPerGame: 123.7,
        paPerGame: 121.3,
        diff: 2.3,
        division: "5-1-0",
        home: "8-2-0",
        away: "2-2-0",
        streak: "W1",
        moves: 23
      },
      {
        rank: 4,
        manager: "Andrew Rohrbaugh",
        team: "JV Practice Squad",
        record: "12-2-0",
        wins: 12,
        losses: 2,
        ties: 0,
        pf: 2022.4,
        pa: 1666.2,
        pfPerGame: 144.5,
        paPerGame: 119.0,
        diff: 25.4,
        division: "5-1-0",
        home: "8-1-0",
        away: "4-1-0",
        streak: "W5",
        moves: 28
      },
      {
        rank: 5,
        manager: "Matt Gilmore",
        team: "Fifth of Bourbon",
        record: "7-7-0",
        wins: 7,
        losses: 7,
        ties: 0,
        pf: 1680.2,
        pa: 1719.8,
        pfPerGame: 120.0,
        paPerGame: 122.8,
        diff: -2.8,
        division: "3-3-0",
        home: "4-2-0",
        away: "3-5-0",
        streak: "W1",
        moves: 51
      },
      {
        rank: 6,
        manager: "Jeff Fishel",
        team: "Just SKOL Baby!",
        record: "7-7-0",
        wins: 7,
        losses: 7,
        ties: 0,
        pf: 1748.2,
        pa: 1848.0,
        pfPerGame: 124.9,
        paPerGame: 132.0,
        diff: -7.1,
        division: "2-4-0",
        home: "3-2-0",
        away: "4-5-0",
        streak: "L4",
        moves: 23
      },
      {
        rank: 7,
        manager: "Mike Ames",
        team: "Won't you be my Naber",
        record: "5-9-0",
        wins: 5,
        losses: 9,
        ties: 0,
        pf: 1718.65,
        pa: 1878.85,
        pfPerGame: 122.8,
        paPerGame: 134.2,
        diff: -11.4,
        division: "2-4-0",
        home: "3-4-0",
        away: "2-5-0",
        streak: "L1",
        moves: 9
      },
      {
        rank: 8,
        manager: "Dave Cox",
        team: "3rd Stringers",
        record: "6-8-0",
        wins: 6,
        losses: 8,
        ties: 0,
        pf: 1731.4,
        pa: 1718.05,
        pfPerGame: 123.7,
        paPerGame: 122.7,
        diff: 1.0,
        division: "2-4-0",
        home: "3-4-0",
        away: "3-4-0",
        streak: "W1",
        moves: 24
      },
      {
        rank: 9,
        manager: "Tim Stough",
        team: "Waller in Misery",
        record: "3-11-0",
        wins: 3,
        losses: 11,
        ties: 0,
        pf: 1576.85,
        pa: 1710.75,
        pfPerGame: 112.6,
        paPerGame: 122.2,
        diff: -9.6,
        division: "2-4-0",
        home: "2-7-0",
        away: "1-4-0",
        streak: "L1",
        moves: 36
      },
      {
        rank: 10,
        manager: "Rob Robertson",
        team: "1-Tooth Willies Hillbillies",
        record: "7-7-0",
        wins: 7,
        losses: 7,
        ties: 0,
        pf: 1577.95,
        pa: 1683.45,
        pfPerGame: 112.7,
        paPerGame: 120.2,
        diff: -7.5,
        division: "2-4-0",
        home: "5-3-0",
        away: "2-4-0",
        streak: "L1",
        moves: 20
      },
      {
        rank: 11,
        manager: "Dan Gilmore",
        team: "Mind Ur O's n Q's",
        record: "4-10-0",
        wins: 4,
        losses: 10,
        ties: 0,
        pf: 1641.85,
        pa: 1759.35,
        pfPerGame: 117.3,
        paPerGame: 125.7,
        diff: -8.4,
        division: "2-4-0",
        home: "1-6-0",
        away: "3-4-0",
        streak: "L2",
        moves: 17
      },
      {
        rank: 12,
        manager: "Jon Rohrbaugh",
        team: "Girth wind and fire",
        record: "4-10-0",
        wins: 4,
        losses: 10,
        ties: 0,
        pf: 1688.85,
        pa: 1808.8,
        pfPerGame: 120.6,
        paPerGame: 129.2,
        diff: -8.6,
        division: "3-3-0",
        home: "3-2-0",
        away: "1-8-0",
        streak: "W1",
        moves: 6
      }
    ],

    playoffs: {
      rounds: [
        {
          name: "Quarterfinals",
          week: 15,
          games: [
            {
              seedA: 5,
              managerA: "Jeff Fishel",
              teamA: "Just SKOL Baby!",
              scoreA: 109.6,
              seedB: 4,
              managerB: "Daryl Creager",
              teamB: "The Godfather Part ll",
              scoreB: 138.85,
              winner: "Daryl Creager"
            },
            {
              seedA: 6,
              managerA: "Matt Gilmore",
              teamA: "Fifth of Bourbon",
              scoreA: 135.5,
              seedB: 3,
              managerB: "Tyler Gilmore",
              teamB: "Mid Draft Drunken Dropout",
              scoreB: 150.8,
              winner: "Tyler Gilmore"
            }
          ],
          byes: [
            {
              seed: 1,
              manager: "Andrew Rohrbaugh",
              team: "JV Practice Squad"
            },
            {
              seed: 2,
              manager: "Michael Caufield",
              team: "CauFIELD of Dreams"
            }
          ]
        },

        {
          name: "Semifinals",
          week: 16,
          games: [
            {
              seedA: 4,
              managerA: "Daryl Creager",
              teamA: "The Godfather Part ll",
              scoreA: 128.05,
              seedB: 1,
              managerB: "Andrew Rohrbaugh",
              teamB: "JV Practice Squad",
              scoreB: 127.1,
              winner: "Daryl Creager"
            },
            {
              seedA: 3,
              managerA: "Tyler Gilmore",
              teamA: "Mid Draft Drunken Dropout",
              scoreA: 120.65,
              seedB: 2,
              managerB: "Michael Caufield",
              teamB: "CauFIELD of Dreams",
              scoreB: 139.25,
              winner: "Michael Caufield"
            }
          ]
        },

        {
          name: "Championship",
          week: 17,
          games: [
            {
              seedA: 4,
              managerA: "Daryl Creager",
              teamA: "The Godfather Part ll",
              scoreA: 119.9,
              seedB: 2,
              managerB: "Michael Caufield",
              teamB: "CauFIELD of Dreams",
              scoreB: 99.3,
              winner: "Daryl Creager"
            }
          ]
        }
      ]
    }
  }
};


/* =========================================================
   MANAGER / CAREER HELPERS
========================================================= */

const HISTORY_MANAGERS = [
  "Matt Gilmore",
  "Dan Gilmore",
  "Michael Caufield",
  "Rob Robertson",
  "Tim Stough",
  "Mike Ames",
  "Jon Rohrbaugh",
  "Daryl Creager",
  "Andrew Rohrbaugh",
  "Dave Cox",
  "Jeff Fishel",
  "Tyler Gilmore",
  "Heather Hallman",
  "Heather Kidwell",
  "Joseph Kidwell"
];


/* Get one manager's season data. */
function getManagerSeason(year, managerName) {
  const season = LEAGUE_HISTORY[year];

  if (!season) {
    return null;
  }

  return (
    season.standings.find(
      (team) => team.manager === managerName
    ) || null
  );
}


/* Get every season in which a manager participated. */
function getManagerHistory(managerName) {
  return Object.values(LEAGUE_HISTORY)
    .map((season) => {
      const standing = season.standings.find(
        (team) => team.manager === managerName
      );

      if (!standing) {
        return null;
      }

      let playoffFinish = "Did not make playoffs";

      if (season.champion === managerName) {
        playoffFinish = "Champion";
      } else if (season.runnerUp === managerName) {
        playoffFinish = "Runner-up";
      } else {
        const rounds = season.playoffs?.rounds || [];

        for (const round of rounds) {
          const game = round.games?.find(
            (game) =>
              game.managerA === managerName ||
              game.managerB === managerName
          );

          if (game) {
            if (round.name === "Semifinals") {
              playoffFinish = "Semifinalist";
            }

            if (round.name === "Quarterfinals") {
              playoffFinish = "Quarterfinalist";
            }
          }
        }
      }

      return {
        year: season.year,
        season: season.season,
        team: standing.team,
        rank: standing.rank,
        record: standing.record,
        wins: standing.wins,
        losses: standing.losses,
        ties: standing.ties,
        pf: standing.pf,
        pa: standing.pa,
        diff: standing.diff,
        playoffFinish,
        champion: season.champion === managerName,
        runnerUp: season.runnerUp === managerName
      };
    })
    .filter(Boolean);
}


/* Calculate all-time career totals. */
function getManagerCareer(managerName) {
  const seasons = getManagerHistory(managerName);

  const wins = seasons.reduce(
    (sum, season) => sum + season.wins,
    0
  );

  const losses = seasons.reduce(
    (sum, season) => sum + season.losses,
    0
  );

  const ties = seasons.reduce(
    (sum, season) => sum + season.ties,
    0
  );

  const pf = seasons.reduce(
    (sum, season) => sum + season.pf,
    0
  );

  const pa = seasons.reduce(
    (sum, season) => sum + season.pa,
    0
  );

  const championships = seasons.filter(
    (season) => season.champion
  ).length;

  const runnerUps = seasons.filter(
    (season) => season.runnerUp
  ).length;

  const playoffAppearances = seasons.filter(
    (season) =>
      season.playoffFinish === "Champion" ||
      season.playoffFinish === "Runner-up" ||
      season.playoffFinish === "Semifinalist" ||
      season.playoffFinish === "Quarterfinalist"
  ).length;

  const averageFinish = seasons.length
    ? seasons.reduce(
        (sum, season) => sum + season.rank,
        0
      ) / seasons.length
    : 0;

  return {
    manager: managerName,
    seasons: seasons.length,
    wins,
    losses,
    ties,
    record: `${wins}-${losses}-${ties}`,
    pf,
    pa,
    pointDiff: pf - pa,
    championships,
    runnerUps,
    championshipAppearances:
      championships + runnerUps,
    playoffAppearances,
    averageFinish
  };
}


/* Get every unique manager in the archive. */
function getAllHistoryManagers() {
  const managers = new Set();

  Object.values(LEAGUE_HISTORY).forEach(
    (season) => {
      season.standings.forEach(
        (team) => {
          managers.add(team.manager);
        }
      );
    }
  );

  return [...managers];
}


/* =========================================================
   LEAGUE-WIDE RECORDS
========================================================= */

function getLeagueRecords() {
  const seasons = Object.values(LEAGUE_HISTORY);

  let bestRegularSeason = null;
  let mostPoints = null;
  let biggestChampionshipMargin = null;
  let highestChampionshipScore = null;

  seasons.forEach((season) => {

    season.standings.forEach((team) => {

      if (
        !bestRegularSeason ||
        team.wins > bestRegularSeason.wins ||
        (
          team.wins === bestRegularSeason.wins &&
          team.losses < bestRegularSeason.losses
        )
      ) {
        bestRegularSeason = {
          year: season.year,
          season: season.season,
          manager: team.manager,
          team: team.team,
          record: team.record,
          wins: team.wins,
          losses: team.losses,
          pf: team.pf
        };
      }

      if (
        !mostPoints ||
        team.pf > mostPoints.pf
      ) {
        mostPoints = {
          year: season.year,
          season: season.season,
          manager: team.manager,
          team: team.team,
          pf: team.pf,
          record: team.record
        };
      }

    });


    const championship = season.championship;

    if (championship) {

      const margin =
        championship.winnerScore -
        championship.loserScore;

      if (
        !biggestChampionshipMargin ||
        margin >
          biggestChampionshipMargin.margin
      ) {
        biggestChampionshipMargin = {
          year: season.year,
          season: season.season,
          winner: championship.winner,
          winnerTeam: championship.winnerTeam,
          loser: championship.loser,
          loserTeam: championship.loserTeam,
          winnerScore: championship.winnerScore,
          loserScore: championship.loserScore,
          margin
        };
      }


      if (
        !highestChampionshipScore ||
        championship.winnerScore >
          highestChampionshipScore.score
      ) {
        highestChampionshipScore = {
          year: season.year,
          season: season.season,
          manager: championship.winner,
          team: championship.winnerTeam,
          score: championship.winnerScore
        };
      }

    }

  });

  return {
    bestRegularSeason,
    mostPoints,
    biggestChampionshipMargin,
    highestChampionshipScore
  };
}


/* =========================================================
   CHAMPIONSHIP HISTORY
========================================================= */

function getChampionshipHistory() {
  return Object.values(LEAGUE_HISTORY).map(
    (season) => ({
      year: season.year,
      season: season.season,
      champion: season.champion,
      runnerUp: season.runnerUp,
      score: season.championshipScore,
      championTeam:
        season.championship?.winnerTeam || "",
      runnerUpTeam:
        season.championship?.loserTeam || "",
      championScore:
        season.championship?.winnerScore || 0,
      runnerUpScore:
        season.championship?.loserScore || 0
    })
  );
}


/* =========================================================
   ALL-TIME MANAGER LEADERBOARD
========================================================= */

function getAllTimeManagerLeaderboard() {

  return getAllHistoryManagers()
    .map(
      (manager) =>
        getManagerCareer(manager)
    )
    .sort((a, b) => {

      if (
        b.championships !==
        a.championships
      ) {
        return (
          b.championships -
          a.championships
        );
      }

      if (
        b.playoffAppearances !==
        a.playoffAppearances
      ) {
        return (
          b.playoffAppearances -
          a.playoffAppearances
        );
      }

      if (b.wins !== a.wins) {
        return b.wins - a.wins;
      }

      return (
        a.averageFinish -
        b.averageFinish
      );
    });
}


/* =========================================================
   MAKE DATABASE AVAILABLE TO OTHER JS FILES
========================================================= */

window.LEAGUE_HISTORY =
  LEAGUE_HISTORY;

window.HISTORY_MANAGERS =
  HISTORY_MANAGERS;

window.getManagerSeason =
  getManagerSeason;

window.getManagerHistory =
  getManagerHistory;

window.getManagerCareer =
  getManagerCareer;

window.getAllHistoryManagers =
  getAllHistoryManagers;

window.getLeagueRecords =
  getLeagueRecords;

window.getChampionshipHistory =
  getChampionshipHistory;

window.getAllTimeManagerLeaderboard =
  getAllTimeManagerLeaderboard;
