import React from 'react';

const AddEmployee = (props) => {
    const employee = props.employee;
    return (
        <div className="container px-5">
            <p className="display-4 text-center">Add Employee Details</p>
            <form className="px-md-5">
                <div className="form-group">
                    <input type="text" className="form-control"
                           placeholder="First Name" name="firstName" value={employee && employee.firstName ? employee.firstName : null} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"
                           placeholder="Last Name" name="lastName" value={employee && employee.lastName ? employee.lastName : null} />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Age"
                           name="age"  value={employee && employee.age ? employee.age : null}/>
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">date of birth</label>
                    <input type="date" className="form-control" name="dateOfBirth" value={employee && employee.dateOfBirth ? employee.dateOfBirth : null} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Marital Status" name="maritalStatus"  value={employee && employee.maritalStatus ? employee.maritalStatus : null}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Gender" name="gender" value={employee && employee.gender ? employee.gender : null}/>
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">hiring date</label>
                    <input type="date" className="form-control" name="hiringDate" value={employee && employee.hiringDate ? employee.hiringDate : null}/>
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">joining date</label>
                    <input type="date" className="form-control" name="joiningDate" id="joiningDate" value={employee && employee.joiningDate ? employee.joiningDate : null}/>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Job Id"
                           name="jobId" value={employee && employee.jobId ? employee.jobId : null}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name of the School" name="nameOfSchool" value={employee && employee.nameOfSchool ? employee.nameOfSchool : null}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Degree" name="degree" value={employee && employee.degree ? employee.degree : null} />
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">start date</label>
                    <input type="date" className="form-control" name="startDate" value={employee && employee.startDate ? employee.startDate : null}/>
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">end date</label>
                    <input type="date" className="form-control" name="endDate" value={employee && employee.endDate ? employee.endDate : null}/>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Salary"
                           name="amount" value={employee && employee.salary ? employee.salary : null}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Is monthly" name="isMonthly" value={employee && employee.isMonthly ? employee.isMonthly : null}/>
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control"  placeholder="Contact Number" name="phoneNumber"
                           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={employee && employee.phoneNumber ? employee.phoneNumber : null}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" name="email" value={employee && employee.email ? employee.email : null}/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="Address"
                              name="address" value={employee && employee.address ? employee.address : null}/>
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4"/>
            </form>
        </div>
    );
};

export default AddEmployee;
