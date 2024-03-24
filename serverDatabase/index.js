import express from 'express';
import logger from 'morgan';
import * as  dotenv from 'dotenv'
import * as  url from 'url'; 
import mongooseDbConnect from "./config/dbConnect.js"

const app = express();

dotenv.config()
const PORT = process.env.PORT || 4000;

mongooseDbConnect();

app.get('/', (req, res) => {
    res.end("Hello World"); 
})

app.use(express.static('public'));

app.get('/psychologist', (req, res) => {
    res.json(Data);
});

app.get('/psychologist/:id', (req, res) => {
    let id = req.params.id;
    let psycholist = Data.find((psycholist) => psycholist.id === id);
    if (psycholist)
        res.json(psycholist);
    else
        res.status(404).json({
            error: `Not found product with id ${id}`,
        }); 
});


// add elements section
app.use(logger("short"));
app.use(express.json());

// entry route for /products post-request
app.post("/psychologist/:id/", (req, res) => {
    console.log(req.body);
    if (req.is("json")) {
        let psycholist = req.body;
        console.log("Body: ", psycholist);
        Data.push(psycholist);
        // แก้ไขให้คืนค่า product ที่เพิ่มใหม่ เพื่อให้สอดคล้องกับการทํางานของ client
        res.json(psycholist);
    } else { res.status(400).end(`Expected JSON product data!\n${req.body}`); }
});

app.put("/psychologist/:id/", (req, res) => {
    const id = req.params.id;
    const updatedPsycho = req.body;

    // find the index of the product to update
    const psychoIndex = Data.findIndex((psycholist) => psycholist.id === id);

    if (psychoIndex === -1) {
        res.status(400).send(`Product with id ${id} does not exist`);
        return;
    }

    // update the product
    Data[psychoIndex] = { ...Data[psychoIndex], ...updatedPsycho };

    // send the updated product as response
    res.json(Data[psychoIndex]);
});

app.get('/psychologist/:id/confirm', (req, res) => {
    let id = req.params.id;
    let psycholist = Data.find((psycholist) => psycholist.id === id);
    if (psycholist)
        res.json(psycholist);
    else
        res.status(404).json({
            error: `Not found product with id ${id}`,
        }); 
});

//11ExcerciseJWT

// routers
import psychoRouter from './router/psychoRouter.js';
import articleRouter from './router/articleRouter.js';
// our own modules need to put file extension .js

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));   

// routes
app.use('/api/psychologist', psychoRouter);
app.use('/api', articleRouter);

app.get('/', (req, res) => {
    res.status(401).send({ error: 'Invalid Endport' });
});

app.get('*', (req, res) => {
    res.status(404).json(new Error("Not Found Page!" + req.url))
})

// for error handling
app.use((err, req, res, next) => {
    console.error(`${err.name}: ${err.message}`)
    res.status(500).send(err.message);
}) 

import cookieParser from "cookie-parser";
app.use(cookieParser());

// authorization
import verifyJWT from './middleware/verifyJWT.js'; 

import userRouter from './router/userRouter.js';
import authRouter from './router/authRouter.js';

//serve static files
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
app.use('/', express.static(__dirname + '/public'));   

// routes
app.use('/api/auth', authRouter); // register, login, logout, refreshToken

// test to verify JWT
app.get('/secret', verifyJWT, (req, res) => res.json({
    success: true,
    message: 'Secret Page'
})); 

app.use('/api/user', verifyJWT, userRouter);

// for error handling
app.use((err, req, res, next) => {
    // console.error(`${err.name}: ${err.message}`)
    // res.status(500).send(err.message);   
    console.error(err.stack);
    res.status(500).send("Something broke!");
}); // make server start listening on a specified port

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

