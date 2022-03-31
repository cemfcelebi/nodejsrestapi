"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
app.use(bodyParser.json());
;
const Locations = [
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
app.get('/timezones', (request, response) => {
    response.status(200).json(Locations);
});
app.get('/timezones/:location', (request, response) => {
    let location = request.params.location;
    console.log("location:" + location);
    let curLocation = Locations.find(l => l.location === location);
    if (curLocation) {
        return response.status(200).send(curLocation);
    }
    response.status(404).send();
});
app.post("/timezones", (request, response) => {
    let newLocation = request.body;
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
app.put("/timezones", (request, response) => {
    let newLocation = request.body;
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
app.delete('/timezones/:location', (request, response) => {
    let location = request.params.location;
    console.log("location:" + location);
    let curIndex = Locations.findIndex(l => l.location === location);
    if (curIndex >= 0) {
        Locations.splice(curIndex, 1);
        return response.status(200).send();
    }
    response.status(404).send();
});
//# sourceMappingURL=app.js.map