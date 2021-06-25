const connection = require('../mysqlConnection');

const router = (req, res) => {
  connection.query(
    'SELECT * FROM items WHERE userId = ?',
    [req.params.userId],
    (error, results) => {
      res.render('index', {items: results});
    }
  );
};

module.exports = router;