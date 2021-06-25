const connection = require('../mysqlConnection');

const router = (req, res) => {
  connection.query(
    'SELECT * FROM items WHERE itemId = ?',
    [req.params.itemId],
    (error, results) => {
      res.render('edit', {item: results[0]});
    }
  )
};

module.exports = router;