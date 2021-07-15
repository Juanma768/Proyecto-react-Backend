const express = require('express');
const connection = require('../connection');

const router = express.Router();

router.post('/', (req, res) => {
  const idUsr = 1; //Elon
  const idHabitacion = req.body.idHabitacion;
  const fechaDesde = '2021-7-20';
  const fechaHasta = '2021-7-25';
  const precio = '25000';

  let sql = `INSERT INTO reservas (id_usr, id_hab, fecha_desde, fecha_hasta, precio)
               VALUES (?, ?, ?, ?, ?);`;

  const values = [idUsr, idHabitacion, fechaDesde, fechaHasta, precio];

  connection.query(sql, values, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ message: 'Error al generar la reserva', data: [] });
    } else {
      sql = `UPDATE habitaciones
             SET id_estado_hab = 2
             WHERE habitaciones.id = ?`;

      connection.query(sql, [idHabitacion], (err, result) => {
        if (err) {
          res
            .status(500)
            .json({ message: 'Error al generar la reserva', data: [] });
        } else {
          res.json({ message: 'Reserva generada', data: [] });
        }
      });
    }
  });
});

module.exports = router;
