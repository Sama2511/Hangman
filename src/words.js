// src/words.js

const words = [
  "apple", "angle", "brave", "chess", "clock", "dance", "dream", "drive",
  "eagle", "earth", "event", "fight", "flame", "fruit", "ghost", "globe",
  "grape", "group", "guide", "habit", "heart", "horse", "house", "image",
  "input", "jelly", "jewel", "judge", "knife", "laser", "laugh", "learn",
  "level", "light", "limit", "liver", "logic", "lunar", "magic", "metal",
  "model", "money", "month", "motor", "mouse", "music", "noble", "noise",
  "ocean", "offer", "orbit", "organ", "paint", "party", "peace", "pearl",
  "phase", "phone", "plant", "point", "power", "press", "print", "prize",
  "quiet", "radio", "rider", "river", "robot", "ruler", "scale", "score",
  "shape", "shock", "signal", "skill", "smile", "snake", "solar", "sound",
  "space", "spice", "spoon", "sport", "stack", "storm", "style", "sugar",
  "sword", "table", "talent", "taste", "teach", "thief", "thing", "throw",
  "tiger", "timer", "topic", "torch", "touch", "train", "trend", "truck",
  "trust", "uncle", "union", "unity", "value", "video", "virus", "voice",
  "watch", "water", "wheel", "windy", "wings", "woman", "world", "wrist",
  "zebra", "actor", "arrow", "beach", "brain", "bread", "brick", "broom",
  "cabin", "cable", "camel", "carve", "chalk", "charm", "cheap", "cloud",
  "comet", "couch", "cover", "craft", "crane", "cream", "crush", "cycle",
  "debug", "delta", "depth", "demon", "digit", "donor", "draft", "drama",
  "dress", "drink", "drone", "eager", "elbow", "elite", "error", "ethic",
  "faith", "fence", "fetch", "field", "flock", "focus", "force", "frame",
  "fresh", "frost", "giant", "glide", "grain", "greed", "grind", "habit",
  "hazel", "hinge", "honor", "hotel", "hover", "humor", "hurry", "index",
  "inbox", "inbox", "input", "issue", "jeans", "joint", "jolly", "karma",
  "kayak", "label", "latch", "layer", "lemon", "level", "lobby", "logic",
  "lucky", "lunch", "magic", "mango", "march", "match", "medal", "metal",
  "miner", "minor", "model", "monks", "moral", "movie", "music", "myths",
  "naval", "nerve", "noble", "noise", "noted", "novel", "nurse", "nylon",
  "oasis", "ocean", "offer", "optic", "orbit", "order", "organ", "ounce",
  "panda", "panel", "paper", "patch", "pause", "peace", "pearl", "petal",
  "phase", "phone", "photo", "piano", "pilot", "plant", "plate", "plaza",
  "point", "polar", "polka", "pouch", "pound", "power", "press", "print",
  "prize", "punch", "queen", "quest", "quiet", "radio", "ranch", "reach",
  "react", "rebel", "relax", "relay", "relic", "reply", "resin", "rider",
  "ridge", "rifle", "river", "robot", "roomy", "ruler", "saber", "scale",
  "scene", "scoop", "scope", "score", "scout", "scrap", "screw", "seize",
  "sense", "serve", "shady", "shaft", "shake", "shark", "sharp", "sheet",
  "shell", "shift", "shine", "shock", "shoot", "short", "shout", "shrub",
  "sight", "silly", "siren", "skill", "skate", "skull", "slate", "slice",
  "slide", "slope", "smart", "smile", "smoke", "snake", "snail", "solar",
  "solid", "solve", "sound", "space", "spade", "spark", "speak", "spice",
  "spill", "spine", "spoon", "sport", "spray", "spree", "stack", "stage",
  "stamp", "stand", "stare", "start", "steam", "steel", "steep", "steer",
  "stick", "still", "sting", "stock", "stone", "store", "storm", "story"
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toUpperCase();
}
