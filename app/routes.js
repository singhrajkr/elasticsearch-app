var express                     = require('express'),
    router                      = express.Router(),
    AppController              = require('./controllers/App.controller'),
    elasticController           = require('./controllers/Elastic.controller');



//Export the Router
module.exports = router;

////////////////Site Routes Goes Here   ========================================================
router.get('/',             AppController.TestAppServer);

//////////// Dashboard Routes Goes Here =========================================================
router.get('/getIndicesInfo', elasticController.getIndicesInfo);
router.post('/isDocExists', elasticController.isDocExists);
router.get('/refreshIndex', elasticController.refreshIndex);
router.get('/searchFromIndex',elasticController.searchFromIndexBySingleField);
router.get('/getFromIndex',elasticController.getFromIndex);
router.post('/searchFromIndexUsingPOST',elasticController.searchFromIndexBySingleFieldPost);

///////////404- Catch All =======================================================================
//   Return 404 Page when user hits non-existance route like Middleware

router.use(AppController.resourceNotFound);