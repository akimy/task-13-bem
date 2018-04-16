var express = require('express');
var router = express.Router();
const data = require('../db/data');
const useragent = require('express-useragent');
const path = require('path');

// /* GET home page. */
router.get('/', function(req, res) {
    var source = req.headers['user-agent'],
    ua = useragent.parse(source);
    const buildDir = path.join(__dirname, '../client/build');

    if (ua.isMobile) {
      res.sendFile(path.resolve(buildDir, 'mobile.html'));
    } else if (ua.isTablet) {
      res.sendFile(path.resolve(buildDir, 'tablet.html'));
    } else {
      res.sendFile(path.resolve(buildDir, 'desktop.html'));
    }
});

router.get('/data', function(req, res, next) {
  res.send(data);
});


module.exports = router;
