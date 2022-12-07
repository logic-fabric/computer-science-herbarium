const { Item } = require("./refactoredCode.js");
const { getItemStateAtSpecificDay } = require("./goldenMaster.test");

const CONJURED_MANA_CAKE = new Item("Conjured Mana Cake", 3, 6);
const EXPENSIVE_CONJURED_MANA_CAKE = new Item(
  "Expensive Conjured Mana Cake",
  3,
  80
);

describe("Gilded Rose golden master", () => {
  test("Conjured Mana Cake updating", () => {
    const itemAtDay1 = getItemStateAtSpecificDay(CONJURED_MANA_CAKE, 1);

    expect(itemAtDay1.name).toBe(CONJURED_MANA_CAKE.name);
    expect(itemAtDay1.sellIn).toBe(2);
    expect(itemAtDay1.quality).toBe(4);

    const itemAtDay10 = getItemStateAtSpecificDay(CONJURED_MANA_CAKE, 10);

    expect(itemAtDay10.sellIn).toBe(-7);
    expect(itemAtDay10.quality).toBe(0);

    const itemAtDay20 = getItemStateAtSpecificDay(CONJURED_MANA_CAKE, 20);

    expect(itemAtDay20.sellIn).toBe(-17);
    expect(itemAtDay20.quality).toBe(0);
  });

  test("Expensive Conjured Mana Cake updating", () => {
    const itemAtDay1 = getItemStateAtSpecificDay(
      EXPENSIVE_CONJURED_MANA_CAKE,
      1
    );

    expect(itemAtDay1.name).toBe(EXPENSIVE_CONJURED_MANA_CAKE.name);
    expect(itemAtDay1.sellIn).toBe(2);
    expect(itemAtDay1.quality).toBe(78);

    const itemAtDay10 = getItemStateAtSpecificDay(
      EXPENSIVE_CONJURED_MANA_CAKE,
      10
    );

    expect(itemAtDay10.sellIn).toBe(-7);
    expect(itemAtDay10.quality).toBe(46);

    const itemAtDay20 = getItemStateAtSpecificDay(
      EXPENSIVE_CONJURED_MANA_CAKE,
      20
    );

    expect(itemAtDay20.sellIn).toBe(-17);
    expect(itemAtDay20.quality).toBe(6);
  });
});
