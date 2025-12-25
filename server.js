const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.json({
    message: "Blog App Backend API",
    availableApis: {
      auth: {
        register: {
          method: "POST",
          url: "/api/auth/register"
        },
        login: {
          method: "POST",
          url: "/api/auth/login"
        }
      },
      blogs: {
        createBlog: {
          method: "POST",
          url: "/api/blogs",
          protected: true
        },
        getAllBlogs: {
          method: "GET",
          url: "/api/blogs"
        }
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
