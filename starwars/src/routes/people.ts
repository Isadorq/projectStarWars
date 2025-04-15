import { Router, Request, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';
import Character from '../models/People.ts';

interface ICharacter {
    name: string;
    weight: number;
    height: number;
    year: number;
    description: string;
    image?: string;
}

const router = Router();

// Configuração do Multer
const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
        cb(null, 'uploads/');
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Middleware para tratamento de erros assíncronos
const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => 
    (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };

// Rota POST
router.post('/', upload.single('image'), asyncHandler(async (req: Request, res: Response) => {
    const { name, weight, height, year, description } = req.body;
    
    if (!name || !weight || !height || !year || !description || !req.file) {
        res.status(400).json({ error: 'Campos obrigatórios ausentes' });
        return;
    }

    const newCharacter = new Character({
        name,
        weight: Number(weight),
        height: Number(height),
        year: Number(year),
        description,
        image: req.file.path
    });

    await newCharacter.save();
    res.status(201).json({ 
        message: 'Personagem cadastrado com sucesso', 
        character: newCharacter 
    });
}));

// Rota GET
router.get('/', asyncHandler(async (req: Request, res: Response) => {
    const characters = await Character.find();
    res.status(200).json(characters);
}));

// Rota PUT
router.put('/:id', asyncHandler(async (req: Request, res: Response) => {
    const { name, weight, height, year, description } = req.body;
    
    const updatedCharacter = await Character.findByIdAndUpdate(
        req.params.id, 
        { 
            name,
            weight: Number(weight),
            height: Number(height),
            year: Number(year),
            description 
        }, 
        { new: true }
    );

    if (!updatedCharacter) {
        res.status(404).json({ message: 'Personagem não encontrado' });
        return;
    }

    res.status(200).json(updatedCharacter);
}));

// Rota DELETE
router.delete('/:id', asyncHandler(async (req: Request, res: Response) => {
    const deletedCharacter = await Character.findByIdAndDelete(req.params.id);

    if (!deletedCharacter) {
        res.status(404).json({ message: 'Personagem não encontrado' });
        return;
    }

    res.status(200).json({ 
        message: 'Personagem deletado com sucesso', 
        character: deletedCharacter 
    });
}));

export default router;