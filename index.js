import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      app: {
        title: 'Kibana Presentation',
        description: 'Kibana presentation plugin using reveal.js',
        main: 'plugins/kibana_presentation/app'
      },
      hacks: [
        'plugins/kibana_presentation/hack'
      ]
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) {
      // Add server routes and initalize the plugin here
      exampleRoute(server);
    }

  });
};
