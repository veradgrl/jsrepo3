const axios = require("axios");

axios.get("https://dummyjson.com/users").then((res) => {
    console.log(res.data.users);
})

