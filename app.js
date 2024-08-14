const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};
adventurer.inventory.forEach((a) => console.log(a));
adventurer.roll();
adventurer.roll(2);
adventurer.roll(-1);
adventurer.roll(3);

// Part 2
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();
robin.companion.roll();
robin.companion.companion.roll();

class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
    this.level = 1; // I think they should have starting level of 1
    this.experience = 0; // Experience, or xp
  }
  // Method to gain xp, when xp hit threshold then level up
  gainXp(xp) {
    this.experience += xp;
    console.log(`${this.name} gained ${xp} XP.`);
    if (this.experience >= this.level * 100) {
      this.levelUp();
    }
  }
  // Method to level up
  levelUp() {
    this.level += 1;
    console.log(`${this.name} leveled up to level ${this.level}!`);
  }

  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  // Method to increase loyalty.
  increaseLoyalty(amount) {
    this.loyalty = Math.min(100, this.loyalty + amount);
    console.log(`${this.name}'s loyalty increased to ${this.loyalty}.`);
  }

  // Method to carry an item for the adventurer.
  carryItem(item) {
    this.inventory.push(item);
    console.log(`${this.name} is now carrying ${item}.`);
  }
}

// Part 4
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];
  constructor(name, role) {
    super(name);
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(`${role} is not a valid role.`);
    }
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
    this.level = 1; // I think they should have starting level of 1
    this.experience = 0; // Experience, or xp
  }
  // Method to gain xp, when xp hit threshold then level up
  gainXp(xp) {
    this.experience += xp;
    console.log(`${this.name} gained ${xp} XP.`);
    if (this.experience >= this.level * 100) {
      this.levelUp();
    }
  }
  // Method to level up
  levelUp() {
    this.level += 1;
    console.log(`${this.name} leveled up to level ${this.level}!`);
  }

  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}
