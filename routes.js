const routes = require('express').Router();
const client = require('./helpers/redis-client');

let numVisits = 1;
routes.get('/', async (req, res, next) => {
      const number = await client.get('numVisits');
      res.send(`Hi there, you have visited ${number} time(s). Hi there`);
      client.set('numVisits', numVisits++)
});

module.exports = { routes };