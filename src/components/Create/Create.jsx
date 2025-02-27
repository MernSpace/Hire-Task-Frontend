import React, {useRef} from 'react';
import {Container, Row} from "react-bootstrap";
import {ErrorToast, IsEmpty} from "../../helper/FormHelper";
import {useNavigate} from "react-router-dom";
import {NewTaskRequest} from "../../APIRequest/APIRequest";
const Create = () => {
    let titleRef,descriptionRef,priorityRef,dueDateRef=useRef();
    let navigate = useNavigate ();

    const CreateNew = () => {
        let title=titleRef.value;
        let description=descriptionRef.value;
        let priority = priorityRef.value;
        let dueDate = dueDateRef.value;
        if(IsEmpty(title)){
            ErrorToast("Title Required")
        }
        else if(IsEmpty(description)){
            ErrorToast("Description Required")
        }
        else {
            NewTaskRequest(title,description,priority,dueDate).then((res)=>{
                if(res===true){
                    navigate("/All")
                }
            })
        }
    }

    return (
        <Container fluid={true} className="content-body">
            <Row className="d-flex justify-content-center">
                <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
                    <div className="card">
                        <div className="card-body">
                            <h4>Create New</h4>
                            <br/>
                            <h2 className='form-label'>Task Name:</h2>
                            <input ref={(input) => titleRef = input} placeholder="Task Name"
                                   className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <h2 className='form-label'>Description:</h2>
                            <textarea ref={(input) => descriptionRef = input} rows={5} placeholder="Task Description"
                                      className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <h2 className='form-label'>Priority: </h2>
                            <select ref={(input) => (priorityRef = input)} className="form-control animated fadeInUp">
                                <option value="">Select Priority</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                            <br/>
                            <h2 className='form-label'>Due Date:</h2>
                            <input ref={(input) => dueDateRef = input} placeholder="Priority"
                                   className=" animated fadeInUp" type="date"/>
                            <button onClick={CreateNew} className="btn float-end btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};
export default Create;