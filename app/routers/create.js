const connection = require('../mysqlConnection');

const router = (req, res) => {
  const userId = req.session.userId;
  console.log("userId: ", userId);
  console.log("itemName: ", req.body.itemName);
  connection.query(
    'INSERT INTO items (userId, name, done) VALUES (?, ?, ?)',
    [userId, req.body.itemName, false],
    (error, results) => {
      res.redirect( '/index/'+userId );
    }
  );
};

module.exports = router;