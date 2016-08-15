const axios = require("axios");
const replay = require("replay");
const Hapi = require("hapi");

const server = new Hapi.Server();
server.connection({port:3000});

server.start(function () {
    console.log('hapi server started @ ', server.info.uri);
});

server.ext('onRequest', function(request, reply){
    axios.get('http://www.walmart.com')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    return reply.continue;
});


