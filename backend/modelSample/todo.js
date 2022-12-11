import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title:String,
    task:[String]
});

const Todo = mongoose.model("Todo",TodoSchema)

export default Todo