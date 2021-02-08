import { bindActionCreators } from "redux";
import { getStudents } from "../actions";
import { useRef } from 'react';
import { connect } from "react-redux";
import StudentList from './../components/studentList';

const Search = (props) => {
    const stdName =useRef();

    const searchBy= ()=>{props.getStudents(stdName.currnt.value)}

    
    return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Home</a>
                    <a href="/add" className=" navbar-brand ml-auto">Add</a>
                </nav>
                    <h2 className="text-center py-2 ">search for a student </h2>
                    <input ref={stdName} type="text" className="form-control"/>
                
                <button className="btn btn-outline-secondary btn-lg float-right my-2"> Search </button>
                <div className="row">
                    <div className="col-md-12">
                        <StudentList/>
                    </div>
                </div>
            </div>);
}

const mapDisbatchToProps = (dispatch)=>{
    return bindActionCreators({getStudents},dispatch)
}

export default connect(null,mapDisbatchToProps)(Search)