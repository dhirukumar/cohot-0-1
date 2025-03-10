# Docker 
### In docker you need to understand three things 
## 1.)Image 
## 2.)container 
## 3.)Dockerhub 
<img width="600" alt="Screenshot 2025-03-10 at 9 01 32 PM" src="https://github.com/user-attachments/assets/b2aa6990-1904-4e3f-94ba-949deae36182" />


### First you need to understand what is docker see. Docker is a platform that allows you to create, deploy, and run applications inside containers. Containers are like lightweight, portable mini virtual machines that include everything an application needs to run—code, dependencies, and configurations. Docker have a lot of images what is images you can think like that images have a box in which what you need for your code run already store think like that if you need a postgrace for that what is the old way you can think like you go and download postgras provider like PG admin 4 or you can buy the postgrace database online from neon DB or other database provider so in this case docker play a very Vital role docker gives you a image in which post Grace database is installed you just need to pull the images from docker hub you go and search on chat GPT or Google all command for download a specific image like mango db post grace and anything and you just need to put this command into your terminal they will all do for you let us see how to download mongoose and postgrace 
### How to download mongo image from docker hub 

        docker run mongo 
### This run command mango db if the mongo DB is not present it also installed and run it after that you need to set the port because this mongo DB present in your computer but it behave like virtual machine if You Hit the local host they will not show you for that you need to set port forwarding 
 
        docker run -d -p 27017:27017 mongo 

### This upper command run the docker in - d means detach mode you just run one time and it set the port like 2701 hit in your local host they will directed to 2701 host to docker container 

### Now you can connect your mongo review to local host 2701 and your mom would be is connected because localhost 2701 forward to mongoDB database that is inside your container 

### Let us see how to install postgrace image 

       docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres 

### This upper command install postgrace image into your docker dashboard and also run this image and also set the port forwarding means the local host 5432 forward to docker post grace in detached mode means you can just only Run one time it set for always until you kill the docker container if you want to see your docker or mono DB container is running or not you can check by this,nd 

                    docker ps 
### This all the container that is running 
### If you want to stop or Kill your container then you can use this command 

      docker kill contaner-id 

### You can connect your docker postgrace using any CLI that support postgrace like psql 


### What is container when the image is running that mean this is container basically container means there are a small box make inside your computer that have running image 
