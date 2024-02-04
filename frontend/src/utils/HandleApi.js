// import  axios from 'axios' 
// const baseUrl = "http://localhost:8000";

// const getAllToDo = (setToDO) =>{
//      axios.get(baseUrl)
//      .then(({data})=>{
//       console.log('data--->',data);
//       setToDO(data)
//      })
//      .catch((err) => console.log(err))  
//     }
//      const addToDo = (text, settext, setToDo)=>{
//           axios.post(`${baseUrl}/all-todo`,{text})
//           .then((data)=>{
//                console.log(data)
//                settext("")
//                getAllToDo(setToDo)
   
//           })
//           .catch((err) => console.log(err))   

//      }


//      const updateToDo = ( todoId, setIsUpdate,text, settext, setToDo)=>{
//       axios.post(`${baseUrl}/update-todo`,{_id:todoId, text})
//       .then((data)=>{
//            console.log(data)

//            settext("")
//            setIsUpdate(false)
//            getAllToDo(setToDo)   
//       })
//    .catch((err) => console.log(err))   
//  }
// export { getAllToDo, addToDo, updateToDo };


// const deleteToDo = ( _id, todoId)=>{
//   axios.post(`${baseUrl}/delete-todo`,{_id})
//   .then((data)=>{      
//        getAllToDo(setToDo)   
//   })
// .catch((err) => console.log(err))   
// }
// export default { getAllToDo, addToDo, updateToDo,deleteToDo };
// HandleApi.js

import axios from 'axios';
const baseUrl = "http://localhost:8000";

const getAllToDo = (setToDO) => {
    axios.get(baseUrl)
        .then(({ data }) => {
            console.log('data--->', data);
            setToDO(data);
        })
        .catch((err) => console.log(err));
};
const addToDo = (text, settext, setToDo) => {
    axios.post(`${baseUrl}/getToDo`, { text })
        .then((data) => {
            console.log(data);
            settext("");
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

const updateToDo = (todoId, setIsUpdate, text, settext, setToDo) => {
    axios.post(`${baseUrl}/update-Your-Todo`, { _id: todoId, text })
        .then((data) => {
            console.log(data);
            settext("");
            setIsUpdate(false);
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};
const deleteToDo = (_id, setToDo) => {
    axios.post(`${baseUrl}/delete-Your-Todo`, { _id })
        .then((data) => {
            console.log(data);
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
