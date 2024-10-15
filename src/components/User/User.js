import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import './User.css';

const User = () => {
  const [userDetails, setUserDetails] = useState(null); // Track authenticated user
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state for user data

  // Search and filter states
  const [searchName, setSearchName] = useState('');
  const [searchClassroom, setSearchClassroom] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');

  // Handle user sign out
  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error logging out: ', error);
      });
  };

  // Fetch teachers from Firestore
  const fetchTeachers = async () => {
    try {
      const teachersCollection = collection(db, 'teachers');
      const teachersSnapshot = await getDocs(teachersCollection);
      const teachersData = teachersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTeachers(teachersData);
      console.log('Fetched Teachers:', teachersData);
    } catch (error) {
      console.error('Error fetching teachers: ', error);
    }
  };

  // Listen for authentication state changes and fetch user data
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserDetails({
          name: user.displayName || user.email, // Use displayName or email
          uid: user.uid,
        });
        setLoading(false); // Stop loading once user data is available
      } else {
        setUserDetails(null); // No user is signed in
        setLoading(false); // Stop loading even if no user is found
      }
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  // Fetch teachers after the user is authenticated
  useEffect(() => {
    if (userDetails) {
      fetchTeachers();
    }
  }, [userDetails]);

  // Filter and search functions
  const filteredTeachers = teachers.filter(teacher => {
    const matchesName = teacher.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesClassroom = teacher.classroom.toLowerCase().includes(searchClassroom.toLowerCase());
    const matchesDepartment = filterDepartment ? teacher.department === filterDepartment : true;
    return matchesName && matchesClassroom && matchesDepartment;
  });

  // Show loading screen until user data is fetched
  if (loading) {
    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <h2>Loading User Data...</h2>
      </div>
    );
  }

  // Show when no user is authenticated
  if (!userDetails) {
    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <h2>No user signed in</h2>
      </div>
    );
  }

  // Render the UI when user is authenticated and teachers data is fetched
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center user-container">
      <h1>Hello, {userDetails.name}!</h1>
      <h2 className="mt-4"> PRESENTING YOU THE SEARCH FEATURE</h2>
      

      {/* Search and Filter Inputs */}
      <div className="search-filter mt-4 ufeature-container">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="form-control mb-2"
        />
        <input
          type="text"
          placeholder="Search by Classroom"
          value={searchClassroom}
          onChange={(e) => setSearchClassroom(e.target.value)}
          className="form-control mb-2"
        />
        <select
          value={filterDepartment}
          onChange={(e) => setFilterDepartment(e.target.value)}
          className="form-control mb-2"
        >
          <option value="">Filter by Department</option>
          <option value="Department of AS&H (First Year)">Department of AS&H (First Year)</option>
          <option value="Department of Computer Engineering">Department of Computer Engineering</option>
          <option value="Department of Electronics and Telecommunication Engineering">Department of Electronics and Telecommunication Engineering</option>
          <option value="Department of Civil Engineering">Department of Civil Engineering</option>
          <option value="Department of Mechanical Engineering">Department of Mechanical Engineering</option>
          <option value="Department of Information Technology">Department of Information Technology</option>
          <option value="Department of CSE(AIML)">Department of CSE(AIML)</option>
          <option value="Department of Computer Engineering (Regional)">Department of Computer Engineering (Regional)</option>
        </select>
        <button className="btn-logout mt-3" onClick={handleLogout}>
        Logout
      </button>
      </div>
      

     

      {/* Teacher List */}
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Classroom</th>
            <th>Days Available</th>
            <th>Floor</th>
            <th>Personal Website</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map(teacher => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
                <td>{teacher.designation}</td>
                <td>{teacher.department}</td>
                <td>{teacher.classroom}</td>
                <td>{teacher.daysAvailable}</td>
                <td>{teacher.floor}</td>
                <td>
                  <a href={teacher.personalWebsite} target="_blank" rel="noopener noreferrer">
                    Visit
                  </a>
                </td>
                <td>
                  <img src={teacher.imageLink} alt={teacher.name} style={{ width: '50px', height: '50px' }} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">No teachers available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;
