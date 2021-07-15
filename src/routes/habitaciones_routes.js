const express = require('express');
const connection = require('../connection');

const router = express.Router();

router.get('/', (req, res) => {
  const sql = `SELECT habitaciones.*, estado_habitaciones.nombre AS estado
               FROM habitaciones, estado_habitaciones
               WHERE habitaciones.id_estado_hab = estado_habitaciones.id
               ORDER BY habitaciones.id`;

  connection.query(sql, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ message: 'Error al obtener las habitaciones', data: [] });
    } else {
      res.json({ message: '', data: result });
    }
  });
});

router.get('/:id', (req, res) => {
  const sql = `SELECT *
               FROM habitaciones
               WHERE id = ?`;

  connection.query(sql, [req.params.id], (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ message: 'Error al obtener la habitacion', data: [] });
    } else {
      res.json({ message: '', data: result[0] });
    }
  });
});

module.exports = router;
