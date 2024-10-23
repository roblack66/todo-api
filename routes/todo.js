import { Router } from "express";
import { addTodo, countTodos, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/todo.js";
import { localUpload,todoUploadIcon } from "../middlewares/upload.js";

// create a router
const todoRouter = Router();

// define routes
todoRouter.post('/todos', todoUploadIcon.single('icon'), addTodo);

todoRouter.get('/todos', getTodos);

todoRouter.get('/todos/count', countTodos);

 todoRouter.get('/todos/:id', getTodo)

todoRouter.patch('/todos/:id', updateTodo);

todoRouter.delete('/todos/:id', deleteTodo);

// Export router
export default todoRouter;