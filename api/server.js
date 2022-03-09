const app = require('./app');

const PORT = process.env.PORT || 3306;

app.listen(PORT, () => console.log(`Conectado à porta ${PORT}!`));
