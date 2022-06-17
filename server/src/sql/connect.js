const sql = require('mssql/msnodesqlv8');

const config = {
    user: 'sa',
    password: '123456789',
    server:'LAPTOP-VNS3VHIC',
    database: 'ACCOUNT',
    port: 1433,
    driver: 'msnodesqlv8'
}

const conn = new sql.ConnectionPool(config).connect().then(pool => {
    return pool
})

module.exports = {
    conn: conn,
    sql:sql
}