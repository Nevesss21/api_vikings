import mysql from 'mysql2/promise.js'


const con = await mysql.createConnection({
    host: 'localhost',//process.env.MYSQL_HOST,
    user: 'admin',//process.env.MYSQL_USER,
    password: '@dm!n',//process.env.MYSQL_PWD,
    database: 'db_tcc',//process.env.MYSQL_DB,
    typeCast: function (field, next){
        if (field.type === 'TINY' && field.length === 1) {
            return(field.string() === '1');            
        }
        else if(field.type.includes('DECIMAL')){
            return Number(field.string());
        }
        else{
            return next();
        }
    }
});

console.log('-----> DB conectado <-----');
export default con;