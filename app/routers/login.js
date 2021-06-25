const connection = require('../mysqlConnection');
const bcrypt = require('bcrypt');


const router = (req, res) => {
    const email = req.body.email;
    connection.query(
        'SELECT * FROM users WHERE email = ?',
        [email],
        (error, results) => {
            if (results.length > 0) {
                const plain = req.body.password;
                
                // 定数hashを定義
                const hash = results[0].password;
                
                // パスワードを比較する
                bcrypt.compare(plain, hash, (error, isEqual) => {
                    if (isEqual) {
                        const userId = results[0].userId;
                        req.session.userId = userId;
                        req.session.username = results[0].username;
                        res.redirect( '/index/'+userId );
                    } else {
                        res.redirect("/login")
                    }
                })
            } else {
                res.redirect('/login');
            }
        }
    );
}

module.exports = router;