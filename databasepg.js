const {Client} = require('pg')
const client = new Client({
    host: "localhost",
    user:"postgres",
    port: 5433,
    password: "fx-570CA",
    database: "postgres"
})


client.connect();

client.query(`SELECT * FROM users`, (err, res) =>{
    if(!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})