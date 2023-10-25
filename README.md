# Blog_server
Node.js, Express, and MongoDB: Create a Restful API with image upload

## What will you learn?
What will you learn by downloading my code?
- Use of **express** to make API creation simple
- Using **Mongoose** to manage communication with Mongo DB
- Image Upload with **multer**
- Image deletion with the notions of paths and file system in node
- Field validation using **validator**
- Creation of reusable methods thanks to the concept of **modules**
- Creation of a functional REST API with Node.js, Express, and Mongo DB.

Are you ready? Let's go

## Step 1: Installing dependencies

Clone the repository then run **npm install** or **yarn**

## Step 2: Link your API to Mongo DB

You can install Mongodb locally or use Mongo Atlas (online). In both cases, go to the **index.js** file then replace the URL **mongodb://localhost:27017/blog** with your URL into the **.env** file. 
In my case, I use Mongo DB locally. It is therefore available on port **27017**(by default) and the name of my database is **blog**.
Also, you will use the MongoDB cluster.

## Step 3: Launch your project

To launch your project, just type the following command: **npm run server or yarn server**. Your API will therefore run on port 8000

