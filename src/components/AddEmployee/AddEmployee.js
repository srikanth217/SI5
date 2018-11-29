import React from 'react';

const AddEmploye = () => (
    <div className="add-education">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h3 className="display-4 text-center">Add Employee Details</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg"
                                   placeholder="First Name" name="firstName" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg"
                                   placeholder="Last Name" name="lastName" />
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control form-control-lg" placeholder="Age"
                                   name="age"/>
                        </div>
                        <h6>Date Of Birth</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="dateOfBirth"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Marital Status" name="maritalStatus"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Gender" name="gender"/>
                        </div>
                        <h6>Hiring Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="hiringDate"/>
                        </div>
                        <h6>Joining Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="joiningDate"/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control form-control-lg" placeholder="Job Id"
                                   name="jobId"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Name of the School" name="nameOfSchool"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Degree" name="degree"/>
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="startDate"/>
                        </div>
                        <h6>End Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" name="endDate"/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control form-control-lg" placeholder="Salary"
                                   name="amount"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Is monthly" name="isMonthly"/>
                        </div>
                        <div className="form-group">
                        <input type="tel" className="form-control form-control-lg"  placeholder="Contact Number" name="phoneNumber"
                               pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Email" name="email"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Address"
                                      name="address"></textarea>
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4"/>
                    </form>
                </div>
            </div>
        </div>
    </div>

);

export default AddEmploye;