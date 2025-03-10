## firest you need to initialised the json for depandences 

     npm init -y
## also initilised tdconfig and set rootdir and outdir

    npx tsc --init
## when you make your quary inside src/index.ts using pg library you need to change into .js into dist/index.js and run it

        node dist/index.js

<img width="1273" alt="Screenshot 2025-03-10 at 9 50 00 PM" src="https://github.com/user-attachments/assets/277791e4-3844-4052-a84c-6561c0f66ea7" />

##  There are two cLI best editor postgrace first one is psql you can connect your postgrace using psql and see the all tables and data inside tables 
 ## How you can see tables in your postgrace database with the help of psql 
 
       \dt 
 ## This command so you all database how you can see data inside table using psql 
 
      select * from table-name; 

 ## And the second one cli which is used inside code that is pG library this provide you a cli for your code you just need to download PG library and set into your code and set the postgrace string and write the query inside your
