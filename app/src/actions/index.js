const URL ="http://localhost:3001/students?name="

export const getStudents = (name)=>{
    let paylaod = fetch(`${URL}${name}`)
    .then(res=>{return res.json})
    .then(data =>{ 
        console.log(data)
        return data
    }).catch(e=>{console.log('Error:'+e)})
    return{
        type:'STUDENT_LIST',
        paylaod:paylaod
    }
}

export const getStudentsDetials = (id)=>{
    let paylaod =  fetch(`${URL}${id}`)
    .then(res=>{return res.json})
    .then(data =>{ 
        console.log(data)
        return data
    }).catch(e=>{console.log('Error:'+e)})
    return{
        type:'STUDENT_DETAILS',
        paylaod:paylaod
    }
}


export const AddStudent = (std)=>{
    let paylaod;
    return{
        type:'ADD_STUDENT',
        paylaod:paylaod
    }
}