export const students =(state={},action)=>{
    switch (action.type) {
        case 'STUDENT_LIST':{
            return {...state,studentlist:action.payload}
        }
        case 'STUDENT_DETAILS':{
            return {...state,studentdetails:action.payload}
        }
        case 'ADD_STUDENT':{
            return {...state,student:action.payload}
        }
        default:
            break;
    }
    return state;
}