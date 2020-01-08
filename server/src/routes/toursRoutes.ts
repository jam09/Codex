import {Router} from 'express';
import toursController from '../controller/toursController';

class ToursRoutes {

    public router: Router = Router();

    constructor (){
        this.config();
    }
    config(): void{
        this.router.get('/',toursController.list);
        this.router.get('/:id',toursController.getOne)
        this.router.post('/',toursController.create);
        this.router.delete('/:id',toursController.delete)
        this.router.put('/:id',toursController.update);
    }
}

const toursRoutes = new ToursRoutes();
export default toursRoutes.router;