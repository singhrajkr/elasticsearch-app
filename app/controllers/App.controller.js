
module.exports = {
    TestAppServer: TestAppServer,
    resourceNotFound: resourceNotFound
};



function TestAppServer(req, res) {
    res.send({ AppStatus: 'QA ElasticClient App is Up and Running !!!'});
};

function resourceNotFound(req, res) {
    res.sendStatus(404);
    // res.status(404);
    res.send({response: 'Resource Not Found !'})
};
