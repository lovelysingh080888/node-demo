
var express = require('express'); 
var RequestController = require('../controllers/RequestController');
var router = express.Router();

router.post('/api/send-request', RequestController.sendRequest);
router.get("/api/view-requests", RequestController.viewRequests);
router.put("/api/authenticate-request", RequestController.authRequest);

module.exports = router;


