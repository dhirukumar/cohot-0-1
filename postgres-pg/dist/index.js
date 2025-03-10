"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// write a function to create a users table in your database.
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: 'localhost',
    port: 5422,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
});
function createUsersTable(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(
        //this wrong way to do this
        // `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}');`
        //this is right way to do this
        `insert into userss(username,email,password) values($1,$2,$3);`, [username, email, password] //($1,$2,$3) eliminate SQL injuction
        );
        console.log(result);
    });
}
createUsersTable("jesss", "kesdlu@gmail.com", "keddd");
