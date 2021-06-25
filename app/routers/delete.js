const connection = require('../mysqlConnection');

const router = (req, res) => {
  const userId = req.session.userId;
  connection.query(
    'DELETE FROM items WHERE itemId = ?',
    [req.params.itemId],
    (error, results) => {
      res.redirect( '/index/'+userId );
    }
  );
};

module.exports = router;