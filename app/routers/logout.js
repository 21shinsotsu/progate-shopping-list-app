const connection = require('../mysqlConnection');

const router = (req, res) => {
    req.session.destroy(error => {
        res.redirect('/');
    });
};

module.exports = router;