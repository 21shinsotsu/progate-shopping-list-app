const connection = require('../mysqlConnection');
const bcrypt = require('bcrypt');

module.exports = {
    getRouter : (req, res) => {
    res.render('signup.ejs', { errors: [] });
    },

    checkInput : (req, res, next) => {
        console.log('入力値の空チェック');
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const errors = [];

        if (username === '') {
        errors.push('ユーザー名が空です');
        }

        if (email === '') {
        errors.push('メールアドレスが空です');
        }

        if (password === '') {
        errors.push('パスワードが空です');
        }

        if (errors.length > 0) {
        res.render('signup.ejs', { errors: errors });
        } else {
        next();
        }
    },

    checkEmail : (req, res, next) => {
        console.log('メールアドレスの重複チェック');
        const email = req.body.email;
        const errors = [];
        connection.query(
            'SELECT * FROM users WHERE email = ?',
            [email],
            (error, results) => {
            if (results.length > 0) {
                errors.push('ユーザー登録に失敗しました');
                res.render('signup.ejs', { errors: errors });
            } else {
                next();
            }
            }
        );
    },

    register : (req, res) => {
        console.log('ユーザー登録');
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        bcrypt.hash(password, 10, (error, hash) => {
            connection.query(
                'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                [username, email, hash],
                (error, results) => {
                    const userId = results.insertId;
                    req.session.userId = userId;
                    req.session.username = username;
                    res.redirect('/index/'+userId);
                }
            );
        });
    }
};