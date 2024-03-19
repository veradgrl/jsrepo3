const tip1 = (fiyat) => {
  if (typeof fiyat === "number") {
    if (fiyat < 0) {
      throw new Error("fiyat sıfırdan küçük olamaz");
    } else {
      let kdvfark = fiyat * 0.1;
      let yenifiyat = fiyat + kdvfark;
      return yenifiyat;
    }
  } else {
    throw new Error("sayı girilmeli");
  }
};

const tip2 = (fiyat) => {
  if (typeof fiyat === "number") {
    if (fiyat < 0) {
      throw new Error("fiyat sıfırdan küçük olamaz");
    } else {
      let kdvfark = fiyat * 0.1;
      let yenifiyat = fiyat + kdvfark;
      return yenifiyat
    }
  } else {
    throw new Error("sayı girilmeli");
  }
};

const tip3 = (fiyat) => {
  if (typeof fiyat === "number") {
    if (fiyat < 0) {
      throw new Error("fiyat 0dan küçük olamaz");
    } else {
      let kdvfark = fiyat * 0.2;
      let yenifiyat = fiyat + kdvfark;
      return yenifiyat
    }
  } else {
    throw new Error("sayı girilmeli");
  }
};

module.exports = {
  tip1,
  tip2,
  tip3,
};
