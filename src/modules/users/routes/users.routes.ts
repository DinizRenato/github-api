
import { Router } from "express";
import UserController from "../controllers/UserController";

const usersRouter = Router();
const userController = new UserController();

usersRouter.get('/', userController.getUsers);

usersRouter.get('/:username/details', userController.getUserByUserName);

usersRouter.get('/:username/repos', userController.getUserReposByUserName);

export default usersRouter;
