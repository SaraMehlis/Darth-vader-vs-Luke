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