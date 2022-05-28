const elasticClient = require('../elastic-client')
const client = elasticClient.getClient();
module.exports = {
    isIndexExists: checkIndices,
    getIndicesInfo: getIndicesInfo,
    isDocExists: isDocExists,
    refreshIndex: refreshIndex,
    searchFromIndexBySingleField: searchFromIndexBySingleField,
    getFromIndex: getFromIndex,
    searchFromIndexBySingleFieldPost: searchFromIndexBySingleFieldPost
};


async function getIndicesInfo(req, res) {
    const indices = await client.cat.indices();
    res.send(indices);
}

async function refreshIndex(req, res) {
    const indices = await client.cat.indices();
    res.send(indices);
}

async function isDocExists(req, res) {
    const indices = await client.cat.indices();
    res.send(indices);
}

async function searchFromIndexBySingleFieldPost(req, res) {
    try {
        console.log("Request Body", req.body)
        let { indexName, field, fieldVal, size, sort, version } = req.body;
        const { body } = await client.search({
            index: indexName,
            body: {
                query: {
                    match: {
                        [field]: fieldVal
                    }
                }
            },
            size: size,
            sort: sort,
            version: version
        })
        console.log('Document: ', body.hits.hits)
        res.send(body.hits.hits);
    } catch (error) {
        console.log('Error while Querying: ', error)
        res.send(error)
    }
}

async function searchFromIndexBySingleField(req, res) {
    try {
        let indexName = "processing_result_log"
        let field = "bookingNumber"
        let fieldVal = "BKO16536522195341"
        const { body } = await client.search({
            index: indexName,
            body: {
                query: {
                    match: {
                        [field]: fieldVal
                    }
                }
            }
        })
        console.log('Document: ', body.hits.hits)
        res.send(body.hits.hits);
    } catch (error) {
        console.log('Error while Querying: ', error)
        res.send(error)
    }
}


async function getFromIndex(req, res) {
    try {
        const doc = await client.get({
            index: 'processing_result_log',
            id: 'ca62388cdcf711ec98f50a580af402c2'
        })
        res.send(doc)
    } catch (error) {
        console.log('Error while Querying: ', error)
        res.status(error.meta.statusCode).send(error)
    }
}

async function checkIndices() {
    try {
        const foundIndex = client.indices.exists({ index: 'processing_result_log' })
        if (foundIndex) {
            return { indexStatus: 'Index already exists' };
        }
    } catch (error) {
        return { indexStatus: "Index doesn't exists" };
    }
}