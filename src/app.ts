import express, { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import { LocationController } from './controller/location.controller';
import { createConnection } from 'typeorm';
import { Location } from './model/location.model';

const app = express();
const port = 3000;

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "testdb",
  synchronize: true,
  entities: [Location],
  name: "default"
}).then((_connection) => {
  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
}).catch((err) => {
  console.log("Unable to connect to db", err);
  process.exit(1);
});


const locationController = new LocationController();

app.use(bodyParser.json());
app.use("/api/locations", locationController.router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});