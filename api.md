apis availible are 
{
  "message": "Blog App Backend API",
  "availableApis": {
    "auth": {
      "register": {
        "method": "POST",
        "url": "/api/auth/register"
      },
      "login": {
        "method": "POST",
        "url": "/api/auth/login"
      }
    },
    "blogs": {
      "createBlog": {
        "method": "POST",
        "url": "/api/blogs",
        "protected": true
      },
      "getAllBlogs": {
        "method": "GET",
        "url": "/api/blogs"
      }
    }
  }
}

now command is  "npm run dev"

content need to recive are : "Content-Type: application/json"

----> /api/auth/register
{
  "username": "lally",
  "email":    "lally@gmail.com",
  "password": "123456"
}

->Success Response
{
  "message": "User registered successfully"
}

---->  /api/auth/login
{
  "email": "lally@gmail.com",
  "password": "123456"
}
->Success Response
{
    "token": "Random_Key",
    "user": {
        "id": "694d40c98bdd0658764e73f1",
        "username": "lally",
        "email": "lally@gmail.com"
    }
}

----> /api/blogs (post blogs)
Content-Type	application/json
Authorization	YOUR_JWT_TOKEN

{
  "title": "My First Blog",
  "content": "This is my first blog using Node, Express & MongoDB Atlas"
}

Success Response
{
  "_id": "BLOG_ID",
  "title": "My First Blog",
  "content": "This is my first blog using Node, Express & MongoDB Atlas",
  "author": "USER_ID",
  "createdAt": "2025-01-01T10:00:00.000Z",
  "up
}

----> /api/blogs (Get blogs)
Content-Type	application/json
[
  {
    "_id": "BLOG_ID",
    "title": "My First Blog",
    "content": "This is my first blog using Node, Express & MongoDB Atlas",
    "author": {
      "_id": "USER_ID",
      "username": "lally"
    }
  }
]
