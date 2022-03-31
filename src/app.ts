import express, { Request, Response } from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.use(bodyParser.json());

interface LocationWithTimezone {
  location: string;
  timezoneName: string;
  timezoneAbbr: string;
  utcOffset: number;
};

const Locations: LocationWithTimezone[] = [
  {
    location: 'Germany',
    timezoneName: 'Central European Time',
    timezoneAbbr: 'CET',
    utcOffset: 1
  },
  {
    location: 'China',
    timezoneName: 'China Standard Time',
    timezoneAbbr: 'CST',
    utcOffset: 8
  },
  {
    location: 'Argentina',
    timezoneName: 'Argentina Time',
    timezoneAbbr: 'ART',
    utcOffset: -3
  },
  {
    location: 'Japan',
    timezoneName: 'Japan Standard Time',
    timezoneAbbr: 'JST',
    utcOffset: 9
  }
];

app.get('/timezones', (request: Request, response: Response) => {
  response.status(200).json(Locations);
});

app.get('/timezones/:location', (request: Request, response: Response) => {
  let location: string = request.params.location;
  console.log("location:" + location);
  let curLocation = Locations.find(l => l.location === location);
  if (curLocation) {
    return response.status(200).send(curLocation);
  }

  response.status(404).send();
});

app.post("/timezones", (request: Request, response: Response) => {
  let newLocation: LocationWithTimezone = request.body;
  if (!newLocation.location) {
    return response.status(400).send();
  }

  let curLocation = Locations.find(l => l.location === newLocation.location);
  if (curLocation) {
    return response.status(409).send();
  }

  Locations.push(newLocation);

  response.status(200).send();
});

app.put("/timezones", (request: Request, response: Response) => {
  let newLocation: LocationWithTimezone = request.body;
  if (!newLocation.location) {
    return response.status(400).send();
  }

  let curLocation = Locations.find(l => l.location === newLocation.location);
  if (!curLocation) {
    return response.status(404).send();
  }

  Object.assign(curLocation, newLocation);

  response.status(200).send();
});

app.delete('/timezones/:location', (request: Request, response: Response) => {
  let location: string = request.params.location;
  console.log("location:" + location);
  let curIndex = Locations.findIndex(l => l.location === location);
  if (curIndex >= 0) {
    Locations.splice(curIndex, 1);

    return response.status(200).send()
  }

  response.status(404).send();
});