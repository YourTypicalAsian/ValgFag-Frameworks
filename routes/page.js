const fs = require('fs');
module.exports = function (app) {
  app.get('/', function (req, res, next) {
    const productList = fs.readFileSync('./data/kode-list.json');
    const data = {...JSON.parse(productList)}
      res.render('index', data)
    });
}