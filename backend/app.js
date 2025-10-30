import express from "express";
import cors from "cors";
import routes from "./routes/indexRoute.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`API url: http://localhost:${port}/api/`);
});
