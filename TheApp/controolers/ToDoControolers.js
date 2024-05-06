import ToDoModel from "../modles/ToDoModel.js";

export const getToDo = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(404).json({ success: false, message: "All fields are mandtory.." })
    
    const todo= new ToDoModel({
      text,
    });

    await todo.save();

    return res.status(201).json({ success: true , message:"Todo Created added successfully!"});
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};



export const alltodo = async (req, res) => {
  try {
    const todo = await ToDoModel.find({});
    if (todo.length) {
      return res.status(200).json({ success: true, todo: todo });
    }
    return res
      .status(404)
      .json({ success: false, message: "No todo found!" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};


export const updateYourTodo = async (req, res) => {
  try {
      const { text,todoId } = req.body;
      if (!text) return res.status(404).json({ success: false, message: "Product id mandtory.." })
      const updateYourTodo = await ToDoModel.findOneAndUpdate({ _id: todoId }, { text }, { new: true })

      if (updateYourTodo) {
          return res.status(200).json({ success: true, todo: updateYourTodo})
      }
  } catch (error) {
      return res.status(500).json({ success: false, error: error.message })
  }
}

export const deleteYourTodo = async (req, res) => {
  try {
      const { todoId } = req.body;

      if (!todoId) return res.status(404).json({ success: false, message: "todo Id  is mandtory.." })

      const isDeleted = await ToDoModel.findOneAndDelete({ _id: todoId,})
      if (isDeleted) {
          return res.status(200).json({ success: true, message: "todo Deleted Successfully." })
      }

      throw new Error("Mongodb error")

  } catch (error) {
      return res.status(500).json({ success: false, error: error.message })
  }
}