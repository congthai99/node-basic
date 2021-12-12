import pool from '../configs/connectDB';

let getHomepage = async (req, res) => {
    // //logic
    // let data = [];
    // // connection.query(
    // //     'SELECT * FROM `users` ',
    // //     function (err, results, fields) {
    // //         results.map((row) => {
    // //             data.push({
    // //                 id: row.id,
    // //                 email: row.email,
    // //                 address: row.address,
    // //                 firstName: row.firstName,
    // //                 lastName: row.lastName
    // //             })
    // //         });

    // //         // return res.render('index.ejs', { dataUser: data });
    // //     })

    const [rows, fields] = await pool.execute('SELECT * FROM `users` ');

    return res.render('index.ejs', { dataUser: rows });
}

let getDetailPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('select * from users where id = ?', [id])

    return res.send(JSON.stringify(user))
}

module.exports = {
    getHomepage, getDetailPage
}