import express from "express";
import cors from "cors";
import db from './config/config.js'
import movie from './model/product_model.js'

const app = express();
const port = 2318;

app.use(express.json());
app.use(cors());

db.once('open', () => {
    movie.find({}).limit(1).then((res) => { console.log(res) })

})


app.listen(port, () => {
    console.log(`http://localhost:${port} server running`);
});
