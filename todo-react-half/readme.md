When you make any full-fledged app at that time, you need to make a separate file called backend in this file, you need a JSON file that has all dependencies (all nodes lib) for that, you need to go to this backend file 
.)cd backend
after that, you need a JSON file for that 
.)npm init
after that, it asks some questions, a JSON file is created in your backend folder, and when you install any lib so in JSON file, a new dependency is added like you install an express lib
.)npm install express
after that, a node_module file is created in this file; you see all the lib nodes provided. If you want any lib in your project, then install it This is also added in your dependency section in the JSON file 

REMEMBER ONE THING: WHEN YOU WANT TO SEND YOUR PROJECT, OR YOU WANT TO PUSH IT INTO YOUR GITHUB THAT TIME YOU NEED TO DELETE THE NODE_MODULE FOLDER BECAUSE IT IS A VERY LARGE FILE.SO YOU THINK THAT WHEN YOU SEND THIS FILE AT THAT TIME, THE PERSON FACE THE PROBLEM THAT LIB IS NOT EXIST, SO DON, T WORRY 
SOL:-IF YOU RECEIVE THE PROJECT WITHOUT NODE_MODULE AT THAT TIME, YOU RUN THIS COMMAND
.)npm install
THIS COMMAND HELPS TO DOWNLOAD THE NODE_MODULE FILE WITH ALL LIB THAT ARE LISTED IN DEPENDENCY IN JSON FILE