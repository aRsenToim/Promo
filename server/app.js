import routes from './routes.js';
import express from 'express'
import { PrismaClient } from '@prisma/client'
import fileUpload from 'express-fileupload';
import cors from 'cors'


export const prisma = new PrismaClient();
const app = express();

const corsConfig = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(corsConfig))
app.use(express.json());
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', routes)


const PORT = process.env.PORT || 3000
app.listen(PORT, (err) => {
    console.log(`Сервер запущен на порту ${PORT}`);
})