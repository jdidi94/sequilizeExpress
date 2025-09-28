const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routes/user");
require("./database/main");
app.use(express.json());
app.use("/api/users", userRouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
