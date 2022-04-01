const mysql2=require('mysql2/promise');
const pool=mysql2.createPool({
    host:'localhost',
    database:'hotel_system',
    user:'root',
    password:'ZXCVlara210901',
});
module.exports=pool;