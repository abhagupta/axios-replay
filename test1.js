const axios = require("axios");
const replay = require("replay");


    axios.get('https://weather-pwa.herokuapp.com/')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });




