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
        belongings: ["small hat", "sunglasses"]
      }
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  };
  
  // Loop to log each item in Robin's inventory
  for (const item of adventurer.inventory) {
    console.log(item);
  }
  
  // Test the roll method
  adventurer.roll();
  adventurer.roll(5);

    //Part 2: Class 

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
        constructor(name, role) {
          super(name);
          this.role = role;
          this.inventory.push("bedroll", "50 gold coins");
        }
      
        scout() {
          console.log(`${this.name} is scouting ahead...`);
          super.roll();
        }
      }
      
      const robin = new Adventurer("Robin", "Warrior");
      robin.companion = new Adventurer("Leo", "Cat");
      robin.companion.companion = new Adventurer("Frank", "Flea");
      robin.companion.companion.inventory = ["small hat", "sunglasses"];
      
      // Testing the scout method
      robin.scout();
      robin.companion.scout();
      robin.companion.companion.scout();
    
       //Part 3: Class Features

 class Companion extends Character {
    constructor(name, type, belongings) {
      super(name);
      this.type = type;
      this.belongings = belongings || [];
    }
  }
  
  // // Update Adventurer class to use the Companion class
  class newAdventurer extends Character {
    constructor(name, role) {
      super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
      this.companion = new Companion("Leo", "Cat", [new Companion("Frank", "Flea", ["small hat", "sunglasses"])]);
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }
  
  
  // // Testing the scout method for companions
  robin.companion.scout();
  robin.companion.companion.scout();

  //Part 4: Class Uniforms

class NewCharacter {
    static MAX_HEALTH = 100;
  
    constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
    }
  
    static ROLES = ["Fighter", "Healer", "Wizard"];
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
  class LastAdventurer extends Character {
    constructor(name, role) {
      super(name);
      if (!Character.ROLES.includes(role)) {
        throw new Error("Invalid role");
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
      this.companion = new Companion("Leo", "Cat", [new Companion("Frank", "Flea", ["small hat", "sunglasses"])]);
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

 