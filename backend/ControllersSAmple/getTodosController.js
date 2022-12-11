import Todo from "../modelSample/todo"

export async function getTodosController(req, res){
    const todos = await Todo.find()
    res.json(todos)
}

