
import {Request,Response} from 'express';
import database  from '../includes/database';

class ToursController{

    public async list (req:Request, res:Response): Promise<void>{
        const games = await database.query('select * from tours');
        res.json(games);
    }
    public async getOne (req: Request, res:Response): Promise<any>{       
       const {id}  = req.params;
       const games = await database.query("SELECT * FROM tours WHERE id=?",[id]);
       if (games.length > 0){
           return res.json(games[0]);
       }
       res.status(404).json({text: "The tours doesn't exists "});
    }
    public async create (req: Request, res: Response): Promise<void>{
        await database.query("INSERT INTO reservas SET ?",[req.body]);
        res.json({message: 'reserva saveb'})
    }
    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await database.query(" DELETE FROM tours WHERE id = ?",[id]);
        res.json({message: 'The tours was daleted '});
    }
    public async update(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await database.query("UPDATE tours SET ? WHERE id = ?",[req.body,id]);
        res.json({message: 'The tours was update'});
    }
}

const toursController = new ToursController();
export default toursController;