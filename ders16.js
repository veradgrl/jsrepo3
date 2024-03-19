const axios = require("axios");
let randomSayi = 0;
let sayilar = [];



console.log(sayilar);



axios.get("https://dummyjson.com/users").then((res) => {
  console.log(res.data.users);
});
