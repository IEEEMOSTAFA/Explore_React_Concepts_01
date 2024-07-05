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



// Conditional rendering --03:
// export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on : {task}</li>
// }
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{isDone ? 'Finished : 'work on'} : {task}</li>
//     )
// }

// export default function Todo({task,isDone}){

//     return(
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }


// conditional rendering --05:
// export default function Todo({task,isDone}){

//     return(
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }

// conditional rendering --06:
export default function Todo({task,isDone}){
    let listItem;
    if(isDone === true){
        listItem = <li>finished: {task}</li>
    }
    else{
        listItem = <li>Work one: {task}</li>
    }
    return listItem;
}