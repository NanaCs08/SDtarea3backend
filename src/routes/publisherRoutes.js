const express = require('express');
const Publisher = require('../../models/Publisher');
const router = express.Router();

// Crear Publisher
router.post('/', async (req, res) => {
  try {
    const publisher = new Publisher(req.body);
    await publisher.save();
    res.status(201).send(publisher);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Obtener Todos los Publishers
router.get('/', async (req, res) => {
  try {
    const publishers = await Publisher.find();
    res.send(publishers);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obtener Publisher por ID (solo numérico)
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    return res.status(400).send({ error: 'El ID debe ser un número.' });
  }
  try {
    const publisher = await Publisher.findOne({ id: Number(id) });
    if (!publisher) return res.status(404).send();
    res.send(publisher);
  } catch (err) {
    res.status(500).send(err);
  }
});



// Actualizar Publisher
router.put('/:id', async (req, res) => {
  try {
    const publisher = await Publisher.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!publisher) return res.status(404).send();
    res.send(publisher);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Eliminar Publisher
router.delete('/:id', async (req, res) => {
  try {
    const publisher = await Publisher.findOneAndDelete({ id: req.params.id });
    if (!publisher) return res.status(404).send();
    res.send(publisher);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
