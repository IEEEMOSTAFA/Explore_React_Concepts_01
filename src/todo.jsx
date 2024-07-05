// export default function Todo({props}){
    
//     return(
//         <li>Task : {task}</li>
//     )
// }


// export default function Todo({task,isDone}){
//     if(isDone === true){
//         return <li>finished: {task}</li>
//     }
//     else{
//         return <li>Work one: {task}</li>
//     }
//     return(
//         <li>Task : {task}</li>
//     )
// }


export default function Todo({task,isDone}){
    if(isDone){
        return <li>Finished: {task}</li>
    }
    return <li>Work on : {task}</li>
}