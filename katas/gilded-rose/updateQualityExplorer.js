const { Shop, Item } = require("./refactoredCode.js");

const GILDED_ROSE_ITEMS = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

  // This Conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(GILDED_ROSE_ITEMS);

for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log(
    `${"name".padEnd(42, " ")} | ${"sellIn".padEnd(
      8,
      " "
    )} | ${"quality".padEnd(8, " ")}`
  );

  GILDED_ROSE_ITEMS.forEach((item) =>
    console.log(
      `${item.name.padEnd(42, " ")} | ${item.sellIn
        .toString()
        .padStart(8, " ")} | ${item.quality.toString().padStart(8, " ")}`
    )
  );

  gildedRose.updateQuality();
}
