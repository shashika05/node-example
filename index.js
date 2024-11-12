const express = require("express");
const app = express();

const sampleRoute = require("./routes/sampleRoute");

app.use(express.json());

app.use("/user/api", sampleRoute);

app.listen(3333, () => {
  console.log("Server is running on port http://localhost:3333");
});
