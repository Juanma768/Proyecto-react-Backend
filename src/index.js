const express = require('express');
const cors = require('cors');

const habitacionesRoutes = require('./routes/habitaciones_routes');
const reservasRoutes = require('./routes/reservas_routes');

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(express.static('public'));

app.use(express.json());

app.use('/habitaciones', habitacionesRoutes);
app.use('/reservas', reservasRoutes);

app.listen(8000, () => {
  console.log('Servidor inciado!');
});
