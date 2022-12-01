import 'reflect-metadata';
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors';
import routes from "./routes";
import AppError from '../../../shared/errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request: Request, response: Response) => {
    response.send({ message: 'Github API' });
})

app.use(routes);

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }
        console.error(error);
        return response.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    },
);

export { app };
