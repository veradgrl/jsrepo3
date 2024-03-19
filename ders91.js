const islemlerModule = require('./islemler')

let islemTuru = "faktoriyel";

try {
  if (islemTuru === "toplama") {
    console.log(islemlerModule.toplama(1, 2));
  } else if (islemTuru === "cikarma") {
    console.log(islemlerModule.cikarma(1, 2));
  } else if (islemTuru === "carpma") {
    console.log(islemlerModule.carpma(1, 2));
  } else if (islemTuru === "bolme") {
    console.log(islemlerModule.bolme("1", 2));
  } else if (islemTuru === "faktoriyel") {
    console.log(islemlerModule.faktoriyel("4"));
  }
} catch (error) {
  console.log(error.message);
}
