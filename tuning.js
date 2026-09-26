// =============================================================
//  DUCK DIVE — TUNING
//  Change a number, save, refresh the game. That's it.
//  Keep the commas at the ends of lines. Times are in seconds.
// =============================================================
window.TUNE = {

  // ---- Duck ------------------------------------------------
  startHearts: 3,          // hearts at the start of a run
  maxHearts: 6,            // most hearts you can buy up to
  diveKick: 420,           // how hard each tap pushes the duck down
  floatUp: 1100,           // how strongly water pushes the duck back up
  hurtInvincible: 1.5,     // blink time after a hit (no damage during it)

  maxDepth: 380,           // deepest the duck dives / things spawn, below the surface
                           // (scales with screen size; stops tall phones getting a huge empty ocean)

  // ---- Speed -----------------------------------------------
  startSpeed: 180,         // scroll speed at the start
  speedUpPerSecond: 4,     // how much faster it gets every second
  topSpeed: 420,           // it never gets faster than this

  // ---- What floats by ---------------------------------------
  spawnGap: 1.0,           // bigger = things spawn less often
  // relative odds (they don't need to add up to anything)
  spawnOdds: {
    fish: 36,
    eel: 5,
    trash: 12,
    seaweed: 11,
    stick: 13,
    rock: 13,
    puffer: 5,
    heart: 5,              // only appears when you're hurt
  },

  // ---- Scoring ---------------------------------------------
  fishPoints: 10,          // times your multiplier
  eelPoints: 30,           // times your multiplier
  trashPoints: 5,          // times your (new) multiplier
  hitResetsMultiplier: true,

  // ---- Merchant duck & shop -------------------------------
  merchantEvery: 60,       // seconds between merchant visits
  heartCost: 8,            // first extra heart
  heartCostStep: 4,        // each extra heart after costs this much more
  helmetCost: 15,
  reachCost: 8,
  reachCostStep: 4,
  reachLevels: 3,          // how many times Long Reach can be bought
  reachPerLevel: 0.45,     // +45% grab distance per level
  cosmeticCost: 6,         // every hat and outfit
  helmetSlowTime: 1.4,     // how long a rock bonk slows you down
  helmetSlowAmount: 0.45,  // speed while slowed (0.45 = 45% speed)
};
