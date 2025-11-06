import express from "express";
import cors from "cors";
import routes from "./routes/indexRoute.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" with { type: "json" };
import passport from "passport";
import strategy from "./lib/jwtStrategy.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(passport.initialize());
passport.use(strategy);

app.listen(port, () => {
  console.log(`API url: http://localhost:${port}/api/`);
});
