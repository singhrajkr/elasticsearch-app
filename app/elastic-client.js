const EnvVariable = require('./environment');
const { Client } = require('@elastic/elasticsearch');
let elasticHOST = EnvVariable.getElasticHost(process.argv[2])

console.log('elasticHOST', elasticHOST)


class ElasticClient {

    getClient() {
        return new Client({node: elasticHOST})
    }
}

module.exports = new ElasticClient();

