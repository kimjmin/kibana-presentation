export default function (server) {

  server.route({
    path: '/api/kibana_presentation/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

};
