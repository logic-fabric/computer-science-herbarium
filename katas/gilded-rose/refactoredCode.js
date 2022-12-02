class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateItem(item) {
    if (item.name === "Aged Brie") {
      item.sellIn--;
      item.quality += item.sellIn < 0 ? 2 : 1;

      return item;
    }

    if (item.name === "Sulfuras, Hand of Ragnaros") {
      return item;
    }

    if (
      item.name !== "Backstage passes to a TAFKAL80ETC concert" &&
      item.quality > 0
    ) {
      item.quality--;
    } else {
      if (item.quality < 50) {
        item.quality++;

        if (
          item.name === "Backstage passes to a TAFKAL80ETC concert" &&
          item.sellIn < 11 &&
          item.quality < 50
        ) {
          item.quality++;
        }
      }
    }

    item.sellIn--;

    if (item.sellIn < 0) {
      if (
        item.name !== "Backstage passes to a TAFKAL80ETC concert" &&
        item.quality > 0
      ) {
        item.quality--;
      } else {
        item.quality = 0;
      }

      return item;
    }
  }

  updateQuality() {
    for (let item of this.items) {
      item = this.updateItem(item);
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
