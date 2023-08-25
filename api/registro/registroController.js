const ciudadanos = [];

exports.crearCiudadano = (req, res) => {
  const nuevoCiudadano = req.body;
  ciudadanos.push(nuevoCiudadano);
  res.json({ message: 'Ciudadano creado exitosamente' });
};

exports.actualizarCiudadano = (req, res) => {
  const dpi = req.params.dpi;
  const datosActualizados = req.body;

  for (let i = 0; i < ciudadanos.length; i++) {
    if (ciudadanos[i].DPI === dpi) {
      ciudadanos[i] = { ...ciudadanos[i], ...datosActualizados };
      return res.json({ message: 'Datos de ciudadano actualizados exitosamente' });
    }
  }

  res.status(404).json({ error: 'Ciudadano no encontrado' });
};

exports.eliminarCiudadano = (req, res) => {
  const dpi = req.params.dpi;

  for (let i = 0; i < ciudadanos.length; i++) {
    if (ciudadanos[i].DPI === dpi) {
      ciudadanos.splice(i, 1);
      return res.json({ message: 'Ciudadano eliminado exitosamente' });
    }
  }

  res.status(404).json({ error: 'Ciudadano no encontrado' });
};

exports.obtenerCiudadano = (req, res) => {
  const dpi = req.params.dpi;

  for (const ciudadano of ciudadanos) {
    if (ciudadano.DPI === dpi) {
      return res.json(ciudadano);
    }
  }

  res.status(404).json({ error: 'Ciudadano no encontrado' });
};

exports.obtenerListadoCiudadanos = (req, res) => {
  res.json(ciudadanos);
};
