import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config({
    path: "./.env"
});

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
    limit: '1mb'
}));
app.use(express.static('public'));
app.use(cookieParser());



export default app;

