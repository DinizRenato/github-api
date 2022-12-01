import usersRouter from "../../../../modules/users/routes/users.routes";
import { Router } from "express";

const routes = Router();

routes.use('/api/users', usersRouter);

export default routes;
