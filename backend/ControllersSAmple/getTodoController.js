import Todo from "../modelSample/todo"

export async function getTodoController(req, res){
    const {TodoId} = req.params
    const allTOdos = await Todo.findById(TodoId)
    //validate allTOdos
    res.json(allTOdos)
}

