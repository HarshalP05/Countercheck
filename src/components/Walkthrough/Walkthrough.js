import React from 'react'
import "./Walkthrough.css"

const Walkthrough = () => {
  return (
    <div className="walk-body">
            <div className="walk-container">
                <ul id="wcards">
                    <li id="wcard1" className="wcard">
                        <div className="wcard-body">
                            <h2>Create User Account</h2>
                            <p>Start by creating your personal account. Provide your basic information and set up a password to access the virtual campus. Once registered, you’ll be able to explore all features.</p>
                        </div>
                    </li>
                    <li id="wcard2" className="wcard">
                        <div className="wcard-body">
                            <h2>Explore the Campus</h2>
                            <p>After logging in, click on the 'Xplore Campus' button. This will give you access to an interactive map of the entire campus. From here, you can choose specific buildings and view their layout.</p>
                        </div>
                    </li>
                    <li id="wcard3" className="wcard">
                        <div className="wcard-body">
                            <h2>Select Floor and Navigate</h2>
                            <p>Pick the floor number from the dropdown menu to navigate to a specific area. This will display a detailed floor plan with room labels for easy navigation.</p>
                        </div>
                    </li>
                    <li id="wcard4" className="wcard">
                        <div className="wcard-body">
                            <h2>View Classrooms & Faculty Cabins</h2>
                            <p>Just click on classrooms to find specific classrooms, teacher cabins, or HOD offices. Click on any room to view more details like schedules, teacher availability, and their personal websites.</p>
                        </div>
                    </li>
                </ul>
            </div>
    </div>
  );
}

export default Walkthrough;