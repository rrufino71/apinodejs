require("dotenv").config();

const app = require("./src/app");

//app.listen(3000, () => {
//  console.log("API corriendo en puerto 3000");
//});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API corriendo en puerto ${PORT}`);
});