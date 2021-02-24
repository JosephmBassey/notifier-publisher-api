const app = require('./app');

//Running the server on Port 3000 default
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Publisher Server is running on Port ${PORT}`);});
