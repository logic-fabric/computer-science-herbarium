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
    if (item.name === "Sulfuras, Hand of Ragnaros") {
      return item;
    }

    item.sellIn--;

    if (item.name === "Aged Brie") {
      if (item.sellIn < 0) {
        item.quality += 2;
      } else {
        item.quality += 1;
      }

      item.quality = Math.min(50, item.quality);

      return item;
    }

    if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      if (item.sellIn < 0) {
        item.quality = 0;
      } else if (item.sellIn < 5) {
        item.quality += 3;
      } else if (item.sellIn < 10) {
        item.quality += 2;
      } else {
        item.quality += 1;
      }

      item.quality = Math.min(50, item.quality);

      return item;
    }

    item.quality--;

    if (item.sellIn < 0) {
      item.quality--;
    }

    item.quality = Math.max(0, item.quality);

    return item;
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
