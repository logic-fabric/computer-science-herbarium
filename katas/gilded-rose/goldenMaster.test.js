const { Shop, Item } = require("./refactoredCode.js");

const DEXTERITY_VEST = new Item("+5 Dexterity Vest", 10, 20);
const AGED_BRIE = new Item("Aged Brie", 2, 0);
const ELIXIR_OF_THE_MONGOOSE = new Item("Elixir of the Mongoose", 5, 7);
const SULFURAS_1 = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
const SULFURAS_2 = new Item("Sulfuras, Hand of Ragnaros", -1, 80);
const BACKSTAGE_PASS_1 = new Item(
  "Backstage passes to a TAFKAL80ETC concert",
  15,
  20
);
const BACKSTAGE_PASS_2 = new Item(
  "Backstage passes to a TAFKAL80ETC concert",
  10,
  49
);
const BACKSTAGE_PASS_3 = new Item(
  "Backstage passes to a TAFKAL80ETC concert",
  5,
  49
);

function getItemStateAtSpecificDay(item, day) {
  const gildedRose = new Shop([new Item(item.name, item.sellIn, item.quality)]);
  let updateNumber = 0;

  while (updateNumber < day) {
    gildedRose.updateQuality();
    updateNumber++;
  }

  return gildedRose.items[0];
}

describe("Gilded Rose golden master", function () {
  it("+5 Dexterity Vest updating", function () {
    const itemAtDay1 = getItemStateAtSpecificDay(DEXTERITY_VEST, 1);

    expect(itemAtDay1.name).toBe(DEXTERITY_VEST.name);
    expect(itemAtDay1.sellIn).toBe(9);
    expect(itemAtDay1.quality).toBe(19);

    const itemAtDay10 = getItemStateAtSpecificDay(DEXTERITY_VEST, 10);

    expect(itemAtDay10.sellIn).toBe(0);
    expect(itemAtDay10.quality).toBe(10);

    const itemAtDay20 = getItemStateAtSpecificDay(DEXTERITY_VEST, 20);

    expect(itemAtDay20.sellIn).toBe(-10);
    expect(itemAtDay20.quality).toBe(0);
  });

  it("Aged Brie updating", function () {
    const itemAtDay1 = getItemStateAtSpecificDay(AGED_BRIE, 1);

    expect(itemAtDay1.name).toBe(AGED_BRIE.name);
    expect(itemAtDay1.sellIn).toBe(1);
    expect(itemAtDay1.quality).toBe(1);

    const itemAtDay10 = getItemStateAtSpecificDay(AGED_BRIE, 10);

    expect(itemAtDay10.sellIn).toBe(-8);
    expect(itemAtDay10.quality).toBe(18);

    const itemAtDay20 = getItemStateAtSpecificDay(AGED_BRIE, 20);

    expect(itemAtDay20.sellIn).toBe(-18);
    expect(itemAtDay20.quality).toBe(38);
  });

  it("Elixir of the Mongoose updating", function () {
    const itemAtDay1 = getItemStateAtSpecificDay(ELIXIR_OF_THE_MONGOOSE, 1);

    expect(itemAtDay1.name).toBe(ELIXIR_OF_THE_MONGOOSE.name);
    expect(itemAtDay1.sellIn).toBe(4);
    expect(itemAtDay1.quality).toBe(6);

    const itemAtDay10 = getItemStateAtSpecificDay(ELIXIR_OF_THE_MONGOOSE, 10);

    expect(itemAtDay10.sellIn).toBe(-5);
    expect(itemAtDay10.quality).toBe(0);

    const itemAtDay20 = getItemStateAtSpecificDay(ELIXIR_OF_THE_MONGOOSE, 20);

    expect(itemAtDay20.sellIn).toBe(-15);
    expect(itemAtDay20.quality).toBe(0);
  });

  it("Sulfuras V1, Hand of Ragnaros, updating", function () {
    const itemAtDay1 = getItemStateAtSpecificDay(SULFURAS_1, 1);

    expect(itemAtDay1.name).toBe(SULFURAS_1.name);
    expect(itemAtDay1.sellIn).toBe(0);
    expect(itemAtDay1.quality).toBe(80);

    const itemAtDay10 = getItemStateAtSpecificDay(SULFURAS_1, 10);

    expect(itemAtDay10.sellIn).toBe(0);
    expect(itemAtDay10.quality).toBe(80);

    const itemAtDay20 = getItemStateAtSpecificDay(SULFURAS_1, 20);

    expect(itemAtDay20.sellIn).toBe(0);
    expect(itemAtDay20.quality).toBe(80);
  });

  it("Sulfuras V2, Hand of Ragnaros, updating", function () {
    const itemAtDay1 = getItemStateAtSpecificDay(SULFURAS_2, 1);

    expect(itemAtDay1.name).toBe(SULFURAS_2.name);
    expect(itemAtDay1.sellIn).toBe(-1);
    expect(itemAtDay1.quality).toBe(80);

    const itemAtDay10 = getItemStateAtSpecificDay(SULFURAS_2, 10);

    expect(itemAtDay10.sellIn).toBe(-1);
    expect(itemAtDay10.quality).toBe(80);

    const itemAtDay20 = getItemStateAtSpecificDay(SULFURAS_2, 20);

    expect(itemAtDay20.sellIn).toBe(-1);
    expect(itemAtDay20.quality).toBe(80);
  });

  it("Backstage pass No. 1 updating", function () {
    const itemAtDay1 = getItemStateAtSpecificDay(BACKSTAGE_PASS_1, 1);

    expect(itemAtDay1.name).toBe(BACKSTAGE_PASS_1.name);
    expect(itemAtDay1.sellIn).toBe(14);
    expect(itemAtDay1.quality).toBe(21);

    const itemAtDay10 = getItemStateAtSpecificDay(BACKSTAGE_PASS_1, 10);

    expect(itemAtDay10.sellIn).toBe(5);
    expect(itemAtDay10.quality).toBe(35);

    const itemAtDay20 = getItemStateAtSpecificDay(BACKSTAGE_PASS_1, 20);

    expect(itemAtDay20.sellIn).toBe(-5);
    expect(itemAtDay20.quality).toBe(0);
  });

  it("Backstage pass No. 2 updating", function () {
    const itemAtDay1 = getItemStateAtSpecificDay(BACKSTAGE_PASS_2, 1);

    expect(itemAtDay1.name).toBe(BACKSTAGE_PASS_2.name);
    expect(itemAtDay1.sellIn).toBe(9);
    expect(itemAtDay1.quality).toBe(50);

    const itemAtDay10 = getItemStateAtSpecificDay(BACKSTAGE_PASS_2, 10);

    expect(itemAtDay10.sellIn).toBe(0);
    expect(itemAtDay10.quality).toBe(50);

    const itemAtDay20 = getItemStateAtSpecificDay(BACKSTAGE_PASS_2, 20);

    expect(itemAtDay20.sellIn).toBe(-10);
    expect(itemAtDay20.quality).toBe(0);
  });

  it("Backstage pass No. 3 updating", function () {
    const itemAtDay1 = getItemStateAtSpecificDay(BACKSTAGE_PASS_3, 1);

    expect(itemAtDay1.name).toBe(BACKSTAGE_PASS_3.name);
    expect(itemAtDay1.sellIn).toBe(4);
    expect(itemAtDay1.quality).toBe(50);

    const itemAtDay10 = getItemStateAtSpecificDay(BACKSTAGE_PASS_3, 10);

    expect(itemAtDay10.sellIn).toBe(-5);
    expect(itemAtDay10.quality).toBe(0);

    const itemAtDay20 = getItemStateAtSpecificDay(BACKSTAGE_PASS_3, 20);

    expect(itemAtDay20.sellIn).toBe(-15);
    expect(itemAtDay20.quality).toBe(0);
  });
});
