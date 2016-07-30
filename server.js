'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: '64.137.223.64',
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {

        return reply('hello world');
    }
});

server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: function(request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
