# How to deploy your frontend using AWS 

## First you need to understand AWS only deploy the file which is present in the form of HTML CSS so it mean that you only use REACT or raw CSS HTML for make your frontend react is because when you use this command at the end of react 

     npm run build 

## This command change your app.jsx file into hTML and CSS after that if you want to delete all the file then you can you only need your dest file in which your html or CSS will be present 

## Go to your AWS dashboard and go inside S3 and create one bucket you understand bucket as like when you are creating frontend it need lot of things like images,video or html or CSS file so you need to save all the objects(image, video, hTML, cSS) inside a bucket and you need to restrict all the permission when you complete your S3 bucket you need to export your hTML,CSS,image,video into your bucket remember one thing don't export dist file if you export your dist file you need to give the origin that all object are present inside dist so you don't want to increase more step so directly export the HTML,css,image,video file not the dis file 

## At this point your S3 bucket was created and all the necessary object will be present inside your bucket after that you need to host your frontend using cloudfront it is a Content Delivery Network (CDN) which is pop frontend to to many location around the world this help to decrease the latency time because when someone want to hit your frontend they hit the S3 directly and your S3 will present at one location so for that we use cloudfront services of AWS you will think like that cloudfront create lot of Replica of your frontend around the world and when someone want to hit your frontend they directed through cloudfront 

## So right now you need to create your cloudfront distribution 

## When you create your cloudfront you need to give your S3 bucket in origin domain means from where you want to fetch your all data and in origin path you need to give the file name in which you want to show user first win the user hit your site inside this give your uRL of file like this(/index.html) and after that you want to give the name of origin you need to enable the enable security protection inside wave application firewall this provide you a Firewall for your site and inside default root object you need to give the file name that user want to see at first time like this(/index.html) and if you want to add your domain then add inside alternate domain name CM or you can add your day in after making your cloudfront and the most important thing when you making a cloud front is in origin access section you need to choose origin access control setting and create a new OAC and after Creating your distribution you get a longest string and you need to put this long string inside S3 security section you need to put this string and this will give the access to cloudfront to access the S3 block after that you go to your cloud friend that's what and cloud front provide you a dNS copy and paste to browser and this will show the result 

# There are two additional things in cloud front after making your cloud front you need to set the error page it means when the error is occur so your side showing unnecessary long  string that not look so good so if you want to set the pages then you can after that second thing is invalidation means when the user give the wrong route means if you have /admin route and user give /user route so in this case you don't want to so error page instead of this you can show your main page default so 

