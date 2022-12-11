// createTodoController
import Todo from "../modelSample/todo"

export async function createTodoController(req, res ){
    const newTodo = new Todo({
        title: req.body
    })

    const createdNewTodo = await newTodo.save()
    res.json(createdNewTodo)

    //try catch
    //if title empty or not
    //there should be status code
    
}


