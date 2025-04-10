const express = require('express');
const multer = require('multer');
const path = require('path');
const Characters = require('@/models/Characters'); 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });
  
// Rota POST (criar personagem)
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { name, universe, age, abilities } = req.body;
        if (!name || !universe || !age || !abilities || !req.file) {
            return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
        }

        const imagem = req.file.path;

        const newCharacters = new Characters({
            name,
            weight,
            height,
            year,
            description,
            image: imagem
        });

        await newCharacters.save();
        res.status(201).json({ message: 'Personagem cadastrado com sucesso', characters: newCharacters });
    } catch (error) {
        console.error('Erro ao cadastrar personagem:', error);
        res.status(500).json({ message: 'Erro ao cadastrar personagem', error });
    }
});

// LEITURA (GET) 
router.get('/', async (req, res) => {
    try {
        const characters = await Characters.find();
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar personagens', error });
    }
});

// ATUALIZAÇÃO (PUT)
router.put('/:id', async (req, res) => {
    const { name, weight, height, year, description } = req.body;

    try {
        const updatedCharacters = await Characters.findByIdAndUpdate(
            req.params.id, 
            { name, weight, height, year, description }, 
            { new: true }
        );

        if (!updatedCharacters) {
            return res.status(404).json({ message: 'Personagem não encontrado' });
        }

        res.status(200).json(updatedCharacters);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar personagem', error });
    }
});
 
// EXCLUSÃO (DELETE)  
router.delete('/:id', async (req, res) => {
    try {
        const deletedCharacters = await Characters.findByIdAndDelete(req.params.id);

        if (!deletedCharacters) {
            return res.status(404).json({ message: 'Personagem não encontrado' });
        }

        res.status(200).json({ message: 'Personagem deletado com sucesso', characters: deletedCharacters });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar personagem', error });
    }
});

module.exports = router;