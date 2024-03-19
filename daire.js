const PI = 3.14;

const cevre = (r) => {
  if (typeof r === "number") {
    if (r < 0) {
      throw new Error("Yarıçap 0'dan küçük olamaz");
    } else {
      return 2 * PI * r;
    }
  } else {
    throw new Error("Yarıçap sayı olmalı");
  }
};

const alan = (r) => {
  if (typeof r === "number") {
    if (r < 0) {
      throw new Error("Yarıçap 0'dan küçük olamaz");
    } else {
      return 2 * r * r;
    }
  } else {
    throw new Error("Yarıçap sayı olmalı");
  }
};

module.exports = {
  cevre,
  alan,
};
