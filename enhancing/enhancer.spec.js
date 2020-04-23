import Item from "./enhancer";
// test away!
test(".succeed()", () => {
   const sword = new Item("Sword", 100, 10);
   sword.succeed();
   expect(sword.enhancement).toEqual(11);

   const bow = new Item("Bow", 100, 20);
   bow.succeed();
   expect(bow.enhancement).toEqual(20);
});

test(".fail()", () => {
   const sword = new Item("Sword", 100, 17);
   sword.fail();
   sword.fail();
   expect(sword.enhancement).toEqual(6);

   const bow = new Item("Bow", 100, 14);
   bow.fail();
   expect(bow.enhancement).toEqual(9);
});

test(".repair()", () => {
   const sword = new Item("Sword", 90, 10);
   sword.repair();
   expect(sword.durability).toEqual(100);
});

test(".get()", () => {
   const sword = new Item("Sword", 90, 20);
   expect(sword.get()).toEqual({
      name: "Sword [+20]",
      durability: 90,
      enhancement: 20,
   });

   sword.repair();
   expect(sword.get()).toEqual({
      name: "Sword [+20]",
      durability: 100,
      enhancement: 20,
   });

   sword.fail();
   expect(sword.get()).toEqual({
      name: "Sword [+19]",
      durability: 100,
      enhancement: 19,
   });

   sword.succeed();
   expect(sword.get()).toEqual({
      name: "Sword [+20]",
      durability: 100,
      enhancement: 20,
   });
});
