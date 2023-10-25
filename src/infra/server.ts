import express from "express";
import { config } from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json";
import clienteController from "../adapter/cliente/clienteController";
import bodyParser from "body-parser";

config();
const app = express();
const port = process.env.PORT || 9001;

app.use(bodyParser.json());

/*docs*/
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/swagger", (_req, res) => {
  return res.sendFile(process.cwd() + "/swagger.json");
});
app.use("/documentacao", (_req, res) => {
  return res.sendFile(process.cwd() + "/index.html");
});

app.use(clienteController);

app.listen(port, () => console.log(`listening on port ${port}`));
