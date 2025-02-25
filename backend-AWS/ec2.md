# how to use ec2 for host backend
 
### firest make ec2 instance ans select both http and https when you make your instance and connect vai any way like from aws or your terminal

### if you want to connect you machin from terminal then you need to make a file inside this file you neeed to export/save your key that is used for making your instance and then open your terminal and give this permission to you key file with this command 

       chmod 700 (your key file name)

### and then ssh(Secure Shell) your machin useing this key followed by this command

     ssh -i (you key) ubuntu@(your instance ipv4 ip or you instance dns)

### then terminal ask for password and after giving the password you were access your machin

### if you want to know your instance have access to your local internate for that 
   
         ping google.com(any websit name)

### at this point you'll thingh like that you have a new machine without any things you need downlode everything you want to excute your backend (like:-node,npm etc)

### so firest you need to clone your backend in this case we use a simple sum-server backend

     git clone https://github.com/hkirat/sum-server

### after cloneing the project you need to install node you can install node vai any where you can find out the step to install node in this
 
         https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04

### after installing node you need to install npm(if you already have then ignor it) for that 

     sudo apt install -g npm 

### then follow this command

cd sum-server
npm install

### and run you backend 

      node index.js


### V.V.I you know at what port your backend file is hosted you need to find at what port for that you will open your index file by this command
       
       cat index.js


### your index.js file is running on your instance you need go to your aws dashbord and change you inbound rule and add this port like in this case (port 8080) and edit this inbound rule TCP (Transmission Control Protocol) and port (8080) for both ipv4 and ipv6 after that you were able to see your backend

 ### how you'll see your backend for that go to your aws dashbord and copy your ipv4 or dns and pest into your browser and add your port number after this(:) at what you hosted your backend in this case(8080) and you see your backend is hosted let's get into more detail and learn nginx

### if you want to stop and get out from any process in this case if you stuck after running you index file for that use this short key

      ctrl+c


 ## nginx

<img width="686" alt="Screenshot 2025-02-25 at 7 01 39 PM" src="https://github.com/user-attachments/assets/f4b8eee9-3122-41f9-aab5-e7a3684b568a" />


### nginx defalt port is 80 which is not secure

 ### nginx is used for reverse-proxy what it mean

 ### see when you have a machine and you want to host not only one backend more then one for that how the different dns know at what port i hit inside your instance to get true sit in this case reverse-proxy came into picture there are lot of another way to do reverse-proxy but in i use nginxin this case

<img width="1440" alt="Screenshot 2025-02-24 at 3 37 33 PM" src="https://github.com/user-attachments/assets/8977172e-9847-4d93-8ae2-abdbfe3dc34d" />


 ### so firest you need to downlode nginx into your machine you need to came out to this sum-server file and install nginx into your instance not into your sum-server file 
        
        cd ..

### for install nginx 

     sudo apt update
     sudo apt install nginx

### after that you need to edit the nginx.conf file or you can delete you nginx.config file and re-write the file contant by this

## delete nginx.conf file contant

     sudo rm sudo vi /etc/nginx/nginx.conf

## insert new contant to this file

      sudo vi /etc/nginx/nginx.conf

### and insert this into your nginx.conf file

      events {
    # Event directives...
     }

      http {
	server {
    listen 80;
    server_name be1.100xdevs.com;(be1.100xdevs.com:-in this place you can put your domain name or if you do not have your domain name then put your instance dns or ipv4 to directly access your backend)

    location / {
        proxy_pass http://localhost:8080;(in this port number you can put your port number at what your backend runs on )
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
	}
    }

### what you have put your server_name (this) by this you can access you backend from your browser

### you can bye your free domain name from (no ip) and add your instance ip into your this domain ip section 

### if you want to put more backend process in this same instance for thar you need to add more server into nginx.conf file like this 

      events {
    # Event directives...
      }

    http {
	server {
    listen 80;
    server_name be1.100xdevs.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
	},
    server {
    listen 80;
    server_name (your dns or some ip);

    location / {
        proxy_pass http://localhost:2040;(port is unique for all server )
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
	}
     }


### 
### after you edit your nginx.conf file you need to relode your edited nginx.conf file for that

    sudo nginx -s reload

### and after this you will goto into your file like(sum-server or some other backend file that you have into your instance) and run index.js file
    
      node index.js

### if you want always run your index.js file after closeing your terminal the use this PM2 (Process Manager for Node.js)

       npm install -g pm2

### and then you start your index.js for 24/7 with pm2

      pm2 start index.js
      pm2 start index.js --name my-app (index.js file show name with my-app)

### if you want to stop then

     pm2 stop index.js
     pm2 restart my-app

### few another command that will help

      pm2 restart my-app
      pm2 listin
      pm2 delete my-app
 #### Monitor App Performance
     pm2 monit
 #### Auto-Restart Apps on System Reboot
     pm2 startup
 #### Save your running processes
      pm2 save

### at this point you hosted your backend onto aws but your sit is hosted on http(port 80) which is not secure for that you need https(port 443) for that you need a certificate how you will find you certificate for your backend for that 

      https://certbot.eff.org/

### this open certbot from certbot you will get your certificate 

### select (nginx) in software section and select (linux snap) in system section and you will find out how to install certbot locally and get a certificate for your backend

### remamber one thing after every 24h your certificate need to update for that you run this command and don't need to do manualy do renew you certificate certbot renew for you

       sudo certbot renew --dry-run

### and after your secure backend is ready only things you need to do is rum your index.js using pm2 and done 

### remamber one thing when you'll stop your instance and again start your instance then your ip is changed for your instance so you need to update your ip in your domain(go to no-ip and edit your dns ip)to hit your instance


