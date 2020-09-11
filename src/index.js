require('dotenv/config');

const applicationListener = require('./configs/server');

const PORT = process.env.APPLICATION_PORT;
const HOST = process.env.APPLICATION_HOST;

applicationListener.listen(PORT, HOST, () => {
  console.log(`Server running in ${HOST}:${PORT}`);
});
