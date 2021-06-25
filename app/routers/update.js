const connection = require('../mysqlConnection');

const router = (req, res) => {
  const userId = req.session.userId;
  connection.query(
    'UPDATE items SET name=? WHERE itemId = ?',
    [req.body.itemName, req.params.itemId],
    (error, results) => {
      res.redirect( '/index/'+userId );
    }
  );
};

module.exports = router;