'use strict';

var cors = require('cors');
var multer = require('multer');
var upload = multer({ dest: '/tmp' });

module.exports = function (app, db) {

  app.route('/')
    .get(function (req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
    })

  app.route('/api/fileanalyse')
    .post(cors(), upload.single('attachment'), function(req, res) {
      console.log(typeof req.file)
      res.json(req.file);
    })


};
