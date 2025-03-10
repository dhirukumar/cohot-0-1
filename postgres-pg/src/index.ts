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


//relationship
// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE addresses (
//     id SERIAL PRIMARY KEY,
//     user_id INTEGER NOT NULL,
//     city VARCHAR(100) NOT NULL,
//     country VARCHAR(100) NOT NULL,
//     street VARCHAR(255) NOT NULL,
//     pincode VARCHAR(20),
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
// );

// joins gives you table with jons mens you don't need to get user table seprate and addresses table sepretly you can access both table at one command


// Types of Joins
// 1. INNER JOIN
// Returns rows when there is at least one match in both tables. If there is no match, the rows are not returned. It's the most common type of join.
// Use Case: Find All Users With Their Addresses. If a user hasn’t filled their address, that user shouldn’t be returned

//  SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincod
// FROM users
// INNER JOIN addresses ON users.id = addresses.user_id;

// 2. LEFT JOIN
// Returns all rows from the left table, and the matched rows from the right table.
// Use case - To list all users from your database along with their address information (if they've provided it), you'd use a LEFT JOIN. Users without an address will still appear in your query result, but the address fields will be NULL for them.

//  SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// LEFT JOIN addresses ON users.id = addresses.user_id;

// 3. RIGHT JOIN
// Returns all rows from the right table, and the matched rows from the left table.
// Use case - Given the structure of the database, a RIGHT JOIN would be less common since the addresses table is unlikely to have entries not linked to a user due to the foreign key constraint. However, if you had a situation where you start with the addresses table and optionally include user information, this would be the theoretical use case.

//  SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// RIGHT JOIN addresses ON users.id = addresses.user_id;

// 4. FULL JOIN
// Returns rows when there is a match in one of the tables. It effectively combines the results of both LEFT JOIN and RIGHT JOIN.
// Use case - A FULL JOIN would combine all records from both users and addresses, showing the relationship where it exists. Given the constraints, this might not be as relevant because every address should be linked to a user, but if there were somehow orphaned records on either side, this query would reveal them.

//  SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// FULL JOIN addresses ON users.id = addresses.user_id;






