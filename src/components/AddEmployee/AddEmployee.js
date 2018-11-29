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
                           placeholder="Last Name" name="lastName" />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Age"
                           name="age"/>
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">date of birth</label>
                    <input type="date" className="form-control" name="dateOfBirth" value={employee && employee.dateOfBirth ? employee.dateOfBirth : null} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Marital Status" name="maritalStatus"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Gender" name="gender"/>
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">hiring date</label>
                    <input type="date" className="form-control" name="hiringDate"/>
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">joining date</label>
                    <input type="date" className="form-control" name="joiningDate" id="joiningDate"/>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Job Id"
                           name="jobId"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name of the School" name="nameOfSchool"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Degree" name="degree"/>
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">start date</label>
                    <input type="date" className="form-control" name="startDate"/>
                </div>
                <div className="form-group">
                    <label className="h6 text-capitalize">end date</label>
                    <input type="date" className="form-control" name="endDate"/>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Salary"
                           name="amount"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Is monthly" name="isMonthly"/>
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control"  placeholder="Contact Number" name="phoneNumber"
                           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" name="email"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="Address"
                              name="address" />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4"/>
            </form>
        </div>
    );
};

export default AddEmployee;
