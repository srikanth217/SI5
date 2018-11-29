import React from 'react';

const AddEmployee = (props) => {
    const employee = props.employee;
    return (
        <div className="container px-5">
            <button type="button" className="btn btn btn-outline-dark ml-5 text-capitalize"
                    onClick={props.goBackHandler}>go back</button>
            <p className="display-4 text-center text-capitalize">{props.title ? props.title : 'Add Employee Details'}</p>
            <div className="form px-md-5">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name" name="firstName"
                           defaultValue={employee && employee.firstName ? employee.firstName : null}
                           onChange={props.changeEmployeeFieldsHandler} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last Name" name="lastName"
                           defaultValue={employee && employee.lastName ? employee.lastName : null}
                           onChange={props.changeEmployeeFieldsHandler} />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Age" name="age"
                           defaultValue={employee && employee.age ? employee.age : null}
                           onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">date of birth</label>
                    <input type="date" className="form-control" name="dateOfBirth"
                           defaultValue={employee && employee.dateOfBirth ? employee.dateOfBirth : null}
                           onChange={props.changeEmployeeFieldsHandler} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Marital Status" name="maritalStatus"
                           defaultValue={employee && employee.maritalStatus ? employee.maritalStatus : null}
                           onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Gender" name="gender"
                           defaultValue={employee && employee.gender ? employee.gender : null}
                           onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">hiring date</label>
                    <input type="date" className="form-control" name="hiringDate"
                           defaultValue={employee && employee.hiringDate ? employee.hiringDate : null}
                           onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">joining date</label>
                    <input type="date" className="form-control" name="joiningDate" id="joiningDate"
                           defaultValue={employee && employee.joiningDate ? employee.joiningDate : null}
                           onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Job Id" name="jobId"
                           defaultValue={employee && employee.jobId ? employee.jobId : null}
                           onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name of the School" name="nameOfSchool"
                           defaultValue={employee && employee.nameOfSchool ? employee.nameOfSchool : null}
                           onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Degree" name="degree"
                           defaultValue={employee && employee.degree ? employee.degree : null}
                           onChange={props.changeEmployeeFieldsHandler} />
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">start date</label>
                    <input type="date" className="form-control" name="startDate"
                           defaultValue={employee && employee.startDate ? employee.startDate : null}
                           onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">end date</label>
                    <input type="date" className="form-control" name="endDate"
                           defaultValue={employee && employee.endDate ? employee.endDate : null}
                           onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Salary" name="amount"
                           defaultValue={employee && employee.amount ? employee.amount : null}
                           onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Is monthly" name="isMonthly"
                           defaultValue={employee && employee.isMonthly ? employee.isMonthly : null}
                           onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" placeholder="Contact Number" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                           defaultValue={employee && employee.phoneNumber ? employee.phoneNumber : null}
                           onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" name="email"
                           defaultValue={employee && employee.email ? employee.email : null}
                           onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="Address" name="address"
                              defaultValue={employee && employee.address ? employee.address : null}
                              onChange={props.changeEmployeeFieldsHandler}/>
                </div>
                <button type="button" className="btn btn-lg btn-info btn-block mt-4 text-capitalize"
                        onClick={props.submitPatchEmployeeHandler}>{props.submitText ? props.submitText : 'Submit'}</button>
            </div>
        </div>
    );
};

export default AddEmployee;
