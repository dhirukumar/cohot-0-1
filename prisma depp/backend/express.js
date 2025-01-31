import express from 'express';

import dashbord from './router.js';  

const app = express();
const port = 3000;
import cors from "cors"
app.use(cors());

app.use(express.json());


app.use("/api",dashbord);

app.listen(port, () => {
    console.log(`Site is hosted on ${port}`);
});
