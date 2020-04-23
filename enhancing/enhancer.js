class Item {
   constructor(name, durability, enhancement) {
      this.name = name;
      this.durability = durability;
      this.enhancement = enhancement;
   }

   succeed() {
      if (this.enhancement < 20) this.enhancement += 1;
   }

   fail() {
      if (this.enhancement > 16) this.enhancement -= 1;
      else if (this.enhancement === 15) this.enhancement -= 10;
      else this.enhancement -= 5;
   }

   repair() {
      this.durability = 100;
   }

   get() {
      let formattedName = this.name;
      if (this.enhancement > 0) formattedName += ` [+${this.enhancement}]`;

      return {
         name: formattedName,
         durability: this.durability,
         enhancement: this.enhancement,
      };
   }
}

module.Item = Item;
