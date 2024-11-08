import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebaseConfig';  // Firebase authentication
import { db } from './firebaseConfig';    // Firebase Firestore
import { collection, getDocs, query, where } from 'firebase/firestore';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Admin from './components/Admin/Admin'; // Admin component
import FrontPage from './components/FrontPage/FrontPage'; // FrontPage component
import Walkthrough from './components/Walkthrough/Walkthrough';
import Floor5 from './components/Building6/Floor5/Floor5';
import User from './components/User/User';  // User component
import References from './components/References/References';
import Sidebar from './components/Sidebar/Sidebar';
import Floor4 from './components/Building6/Floor4/Floor4';
import Floor3 from './components/Building6/Floor3/Floor3';
import Floor2 from './components/Building6/Floor2/Floor2';
import Floor1 from './components/Building6/Floor1/Floor1';
import GroundFloor from './components/Building6/GroundFloor/GroundFloor';
import ContactUs from './components/ContactUs/ContactUs';

// Create a context for user details
const UserContext = createContext();

// Custom hook to use the UserContext
const useUser = () => {
  return useContext(UserContext);
};

function App() {
  const [userDetails, setUserDetails] = useState(null);  // State to store user details
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Track authentication status
  const [authLoaded, setAuthLoaded] = useState(false); // Track if auth check is complete
  const [redirectPath, setRedirectPath] = useState('/'); // State to manage redirect path

  // useEffect hook to check authentication and fetch admin details
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsAuthenticated(true);
        console.log("User authenticated:", user.email); // Log authenticated user's email

        // Create a query to find the admin document with the matching email
        const q = query(collection(db, 'admin'), where('email', '==', user.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            const adminData = doc.data();
            console.log("Admin document found:", adminData); // Log found admin document data
            setUserDetails({
              name: user.displayName || user.email,
              isAdmin: adminData.role === "admin",
            });
            // Set the redirect path to Admin
            setRedirectPath('/Admin');
          });
        } else {
          console.log("No admin document found for this user."); // Log if no admin document is found
          setUserDetails({
            name: user.displayName || user.email,
            isAdmin: false,  // They are not an admin
          });
          // Set the redirect path to User
          setRedirectPath('/User');
        }
      } else {
        setIsAuthenticated(false);
        setUserDetails(null);
        setRedirectPath('/login'); // Set redirect path to login if not authenticated
      }
      setAuthLoaded(true);  // Set auth loading to false when the auth check is complete
    });

    return () => unsubscribe();  // Cleanup the subscription
  }, []);

  // If authentication has not been loaded, do not render anything
  if (!authLoaded) {
    return null; // Optionally, return a loading spinner here
  }

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      <Router>
        <Routes>
          {/* FrontPage route */}
          <Route path="/" element={<FrontPage />} />

          {/* Redirect user to login or to home if authenticated */}
          <Route 
            path="/login" 
            element={!isAuthenticated ? <Login /> 
                                     : <Navigate to={redirectPath} replace />} 
          />

          {/* Redirect to signup if user wants to sign up */}
          <Route path="/signup" element={<Signup />} />

          {/* User route, accessible to both users and admins */}
          <Route path="/User" 
            element={isAuthenticated ? <User /> : <Navigate to="/login" />} 
          />
          
          {/* Admin route, accessible only to admins */}
          <Route path="/Admin" 
            element={isAuthenticated && userDetails?.isAdmin ? <Admin /> : <Navigate to="/login" />} 
          />

          {/* Other routes */}
          <Route path='/ContactUs' element={<ContactUs />} />
         
          <Route path="/Walkthrough" element={<Walkthrough />} />
          <Route path="/References" element={<References/>} />
          <Route path="/Sidebar" element={<Sidebar/>} />
          <Route path="/GroundFloor" element={<GroundFloor />} />
          <Route path="/Floor1"  element={<Floor1 />} />
          <Route path="/Floor2"  element={<Floor2 />} />
          <Route path="/Floor3"  element={<Floor3 />} />
          <Route path="/Floor4"  element={<Floor4 />} />
          <Route path="/Floor5" element={<Floor5 />} />
          
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
