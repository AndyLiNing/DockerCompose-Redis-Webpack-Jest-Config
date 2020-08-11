const util = require('util');
const redis = require('redis');

const client = redis.createClient({
      host: 'redis-server', 
      port: 6379
});

client.get = util.promisify(client.get);

module.exports = client;