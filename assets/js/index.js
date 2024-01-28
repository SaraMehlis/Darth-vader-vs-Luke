let heroAttacks = [
    ["Lightsaber strike", 20],
    ["force push", 10],
    ["kick", 5],
]

let hero = {
    name: "Luke Skywalker",
  health: 100,
  attacks: heroAttacks,
  isAlive: true,
  attack() {
    let rand = Math.floor(Math.random() * this.attacks.length);
    let attack = this.attacks[rand];
    console.log(
      `${this.name} used his ${attack[0]} attack and dealt ${attack[1]} damage!`,
    );
    return attack[1];
  },
  die() {
    this.isAlive = false;
    console.log(`${this.name} has been killed!`);
  },
};

let villainAttacks = [
    ["lightsaber slash", 20],
    ["force choke", 10],
    ["double handed strike", 5],
  ];
  
  let villain = {
    name: "Darth Vader",
    health: 100,
    attacks: villainAttacks,
    isAlive: true,
    attack() {
      let rand = Math.floor(Math.random() * this.attacks.length);
      let attack = this.attacks[rand];
      console.log(
        `${this.name} used his ${attack[0]} attack and dealt ${attack[1]} damage!`,
      );
      return attack[1];
    },
    die() {
      this.isAlive = false;
      console.log(`${this.name} has been killed!`);
    },
  };
  
  function fight(hero, villain) {
    //loop
    while (hero.isAlive && villain.isAlive) {
      let damageToVillain = hero.attack();
      villain.health -= damageToVillain;
  
      let damageToHero = villain.attack();
      hero.health -= damageToHero;
  
      if (hero.health <= 0) {
        hero.die();
      }
      if (villain.health <= 0) {
        villain.die();
      }
    }
  }
  fight(hero, villain);
  // with class 
  //class Character {
  constructor(name, attacks, finisher, quotes) {
    this.health = 40;
    this.isAlive = true;
    this.name = name;
    this.attacks = attacks;
    this.finisher = finisher;
    this.quotes = quotes;
  }
  attack() {
    let rand = Math.floor(Math.random() * this.attacks.length);
    let attack = this.attacks[rand];

    let quote;
    if (this.health >= 20) {
      let quoteRand = Math.floor(Math.random() * this.quotes.high.length);
      quote = this.quotes.high[quoteRand];
    } else {
      let quoteRand = Math.floor(Math.random() * this.quotes.low.length);
      quote = this.quotes.low[quoteRand];
    }

    console.log(
      `"${quote}," shouted ${this.name}, as he used his ${attack[0]} attack.`,
    );
    return attack[1];
  }
  die() {
    this.isAlive = false;
    console.log(this.finisher);
  }
}

let heroQuotes = {
  high: [
    "I've fought womp rats that were tougher than you",
    "You won't defeat me, Darth",
    "You'll pay for killing my father",
  ],
  low: [
    "The force will protect me",
    "I'm not done yet",
    "I won't give up that easily",
  ],
};
let villainQuotes = {
  high: [
    "The dark side will triumph",
    "I find your lack of faith disturbing",
    "You can not hope to win",
  ],
  low: ["Join me, Luke", "I am your father", "I can offer you unlimited power"],
};

let heroAttacks = [
  ["lightsaber strike", 30],
  ["force push", 15],
  ["kick", 7],
];
let villainAttacks = [
  ["lightsaber slash", 30],
  ["force choke", 15],
  ["double handed strike", 7],
];

let heroDeath =
  "Vader slashed his lightsaber and before Luke could react, his hand was lying useless on the ground. He felt the life seeping out of him through the open wound, and fainted, slipping over the balcony of Cloud City and falling to his death.";
let villainDeath =
  '"Look over there," Luke shouted, pointing behind Vader. Darth turned around, not realising he had fallen for the oldest trick in the book, and Luke planted his lightsaber in his back.';

let hero = new Character("Luke Skywalker", heroAttacks, heroDeath, heroQuotes);
let villain = new Character(
  "Darth Vader",
  villainAttacks,
  villainDeath,
  villainQuotes,
);

function fight(hero, villain) {
  while (hero.isAlive && villain.isAlive) {
    let damageToVillain = hero.attack();
    villain.health -= damageToVillain;

    let damageToHero = villain.attack();
    hero.health -= damageToHero;

    if (hero.health <= 0) {
      hero.die();
    }
    if (villain.health <= 0) {
      villain.die();
    }
  }
}

fight(hero, villain);