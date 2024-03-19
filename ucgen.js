const alan = (t, h) => {
  if (typeof t === "number" && typeof h === "number") {
    if (t < 0 || h < 0) {
      throw new Error("Sayıları sıfırdan küçük girmeyiniz");
    } else {
      return (t * h) / 2;
    }
  } else {
    throw new Error("Girilen değerler sayı olmalı");
  }
};

const dikUcgenCevre = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    if (a < 0 || b < 0) {
      throw new Error("Sayılar 0dan küçük olamaz");
    } else {
      let c = (a * a + b * b) ** (1 / 2);
      return a + b + c;
    }
  } else {
    throw new Error("Sayı girilmeli");
  }
};

module.exports = {
  alan,
  dikUcgenCevre,
};
