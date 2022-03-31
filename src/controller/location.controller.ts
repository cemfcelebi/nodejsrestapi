import { Router, Response, Request } from "express";
import { LocationService } from "../service/location.service";

export class LocationController {

    public router: Router;
    private locationService: LocationService;

    constructor() {
        this.router = Router();
        this.locationService = new LocationService();        
        this.routes();        
    }

    public get = async (req: Request, res:Response) => {
        res.send(this.locationService.get(req.params.location));
    };

    public getAll = async (req: Request, res:Response) => {
        res.send(this.locationService.getAll());
    };

    public create(req: Request, res:Response) {
        res.send(this.locationService.create());
    }

    public update(req: Request, res:Response) {
        res.send(this.locationService.update());
    }

    public delete(req: Request, res:Response) {
        res.send(this.locationService.delete());
    }

    public routes() {
        this.router.get("/:id", this.get);
        this.router.get("/", this.getAll);        
        this.router.post("/", this.create);
        this.router.put("/:id", this.update);
        this.router.delete("/:id", this.delete);
    }
}