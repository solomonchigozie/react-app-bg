// import { useState } from "react"

//  const Todo = () => {
//     const [todoList, setTodoList] = useState([]);
//     const [newTask, setNewTask] = useState("")

//     const handleChange = (event)=>{
//         setNewTask(event.target.value)
//     }

//     const addTask = () =>{
//         //...spread operator
//         // const newTodoList = [...todoList, newTask]
//         const task = {
//             id : todoList.length ===0? 1 : todoList[todoList.length -1].id +1,
//             taskName : newTask,
//         }
//         setTodoList([...todoList, task])
//     }

//     const deleteTask = (id) =>{
//         // const newTodoList = todoList.filter((task) => {
//         //     if(task === taskName){
//         //         return false
//         //     }else{
//         //         return true
//         //     }
//         // })
//         // setTodoList(newTodoList)
//         setTodoList(todoList.filter((task) => task.id !== id ));
//     }

//     return (
//         <div className="App">
//             <div className="addTask">
//                 <input onChange={handleChange}/>
//                 <button onClick={addTask}>Add Task</button>
//             </div>

//             <div className="list">
//                 {todoList.map((task)=>{
//                     return (
//                         <div>
//                             <h1>{task.taskName}</h1>
//                             <button onClick={() =>deleteTask(task.id)}>x</button>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     )
// }