
const PORT = 8080;
const HOST = '0.0.0.0';

const applicationListener = require('./config/server');

applicationListener.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
})
