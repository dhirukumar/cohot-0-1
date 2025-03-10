// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
    host: 'localhost',
    port: 5422,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
  })

//   postgresql://postgres:mysecretpassword@localhost:5422/postgres
// you can also use this url to connect to database inside client object

async function createUsersTable(username:string,email:string,password:string) {
    await client.connect()
    const result = await client.query(

//for create table

// CREATE TABLE users1 (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );

//this wrong way to do this in this you can do sql injection that cause problem
        // `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}');`

//this is right way to do this
        `insert into userss(username,email,password) values($1,$2,$3);`,[username,email,password] //($1,$2,$3) point to [username,email,password] eliminate SQL injuction
    )
    console.log(result)
}

createUsersTable("jesss","kesdlu@gmail.com","keddd");




