const connection = require('../mysqlConnection');

const router = (req, res) => {
  connection.query(
    'UPDATE items SET name=? WHERE id = ?',
    [req.body.itemName, req.params.id],
    (error, results) => {
      res.redirect('/index');
    }
  );
};

module.exports = router;