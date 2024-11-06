import React, { useEffect, useState } from 'react';
import './Floor5.css';
import { db } from '../../../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Sidebar from '../../Sidebar/Sidebar'

const Floor5 = () => {
  // classrooms data
  const [classrooms, setClassrooms] = useState([
    {
      id: 1,
      name: '6501CR', 
      description: 'This is Classroom 6501CR',
      roomtitle: "Classroom Timetable is as Follows:-",
      faculties: [],
      showTimetableOnly: true,
    },
    {
      id: 2,
      name: '6502CR', 
      description: 'This is Classroom 6502CR',
      roomtitle: "Classroom Timetable is as Follows:-",
      faculties: [],
      showTimetableOnly: true,
    },
    {
      id: 3,
      name: '6503TU', 
      description: 'This is Tutorial Room 6503TU',
      roomtitle: "Classroom Timetable is as Follows:-",
      faculties: [],
      
    },

    {
      id: 4,
      name: '6504LA', 
      description: 'Faculties available in the lab are:-',
      roomtitle: "Language Laboratory-I",
      faculties: [],
    },
    {
      id: 5,
      name: '6505LA', 
      description: 'Faculties available in the lab are:-',
      roomtitle: "Language Laboratory-II",
      faculties: [],
    },
    {
      id: 6,
      name: '6506LA', 
      roomtitle: "Faculties available in the lab are:-",
      description: ' Basic Electrical Engineering Lab',
      faculties: [],
    },
    {
      id: 7,
      name: '6507LA', // Example classroom with its own format
      description: 'Electrical Machines Lab',
      roomtitle: "Faculties available in the lab are:-",
      faculties: [],
    },
    {
      id: 8,
      name: '6508LA', // Another classroom with a unique name format
      description: 'This is Basic Electronics Lab ',
      roomtitle: "Faculties available in the lab are:-",
      faculties: [],
    },
    {
      id: 9,
      name: '6509CR', // Another classroom with a unique name format
      description: 'This is Classroom 6509CR',
      roomtitle: "Classroom Timetable is as Follows:-",
      faculties: [],
      showTimetableOnly: true,
    },
    {
      id: 10,
      name: '6510CR', // Another classroom with a unique name format
      description: 'This is Classroom 6510CR',
      roomtitle: "Classroom Timetable is as Follows:-",
      faculties: [],
      showTimetableOnly: true,
    },
    {
      id: 11,
      name: '6511FC', // Another classroom with a unique name format
      description: 'FACULTY CABIN',
      roomtitle: "",
      faculties: [],
    },
    {
      id: 12,
      name: '6512', // Another classroom with a unique name format
      description: 'This is Mens Washroom',
      roomtitle: "",
      faculties: [],
      showTimetableOnly: true,
    },
    {
      id: 13,
      name: '6513', // Another classroom with a unique name format
      description: 'This is Ladies Washroom',
      roomtitle: "",
      faculties: [],
      showTimetableOnly: true,
    },
    {
      id: 14,
      name: '6514FC', // Another classroom with a unique name format
      description: '',
      roomtitle: "FACULTY CABIN",
      faculties: [],
      showTimetableOnly: true,
    },
    {
      id: 15,
      name: '6515CR', // Another classroom with a unique name format
      description: 'This is Classroom 6515CR',
      roomtitle: "Classroom Timetable is as Follows:-",
      faculties: [],
      showTimetableOnly: true,
    },

    {
      id: 16,
      name: '6516HO', // Another classroom with a unique name format
      description: 'Applied Science And Humanities',
      roomtitle: "HOD CABIN",
      faculties: [],
    },
    {
      id: 17,
      name: '6517LA', // Another classroom with a unique name format
      description: 'Artificial Intelligence Laboratory',
      roomtitle: "",
      faculties: [],
    },
    {
      id: 18,
      name: '6518LA', // Another classroom with a unique name format
      description: 'Algorithms Laboratory',
      roomtitle: "",
      faculties: [],
    },
    {
      id: 19,
      name: '6519LA', // Another classroom with a unique name format
      description: 'Programming Lab-1',
      roomtitle: "",
      faculties: [],
    },





  ]);
  
  // Function to fetch faculties for a specific classroom from Firebase
  const fetchClassroomFaculties = async (classroomName) => {
    // Extract the numeric portion from the classroom name (e.g., '6506' from '6506LA')
    const numericClassroom = classroomName.match(/\d+/)[0]; // Extract digits

    const q = query(
      collection(db, 'teachers'),
      where('classroom', '==', numericClassroom) // Query based on numeric classroom value
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      name: doc.data().name,
      link: doc.data().personalWebsite,
      img: doc.data().imageLink,
    }));
  };

  // Fetch data from Firebase and update classrooms state
  useEffect(() => {
    const loadClassroomData = async () => {
      const updatedClassrooms = await Promise.all(
        classrooms.map(async (classroom) => {
          const faculties = await fetchClassroomFaculties(classroom.name);
          return { ...classroom, faculties };
        })
      );
      setClassrooms(updatedClassrooms);
    };

    loadClassroomData();
  }, []); // Run only on mount

  useEffect(() => {
    const svgObject = document.getElementById('svgObject');

    const handleSvgLoad = () => {
      const svgDocument = svgObject.contentDocument;

      classrooms.forEach(({ id }) => {
        const referElement = svgDocument.getElementById(`refer${id}`);
        const popup = document.getElementById(`popup${id}`);
        const popupClose = popup.querySelector('.popupClose');

        if (referElement && popup) {
          referElement.addEventListener('click', () => {
            const svgRect = referElement.getBoundingClientRect();
            popup.style.left = `${svgRect.left}px`;
            popup.style.top = `${svgRect.bottom + window.scrollY}px`;
            popup.style.display = 'block';
          });

          // Close popup when close button is clicked
          popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
          });
        }
      });
    };

    const handleClickOutside = (event) => {
      classrooms.forEach(({ id }) => {
        const popup = document.getElementById(`popup${id}`);
        if (popup && !popup.contains(event.target) && event.target.id !== `refer${id}`) {
          popup.style.display = 'none';
        }
      });
    };

    if (svgObject) {
      svgObject.addEventListener('load', handleSvgLoad);
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      if (svgObject) {
        svgObject.removeEventListener('load', handleSvgLoad);
      }
      document.removeEventListener('click', handleClickOutside);
    };
  }, [classrooms]);

  return (
    <div className="body">
      
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      {/* Bootstrap CSS */}
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className='final-floor-cont'>
      <Sidebar />
      <div className="floorplan">
        
        <div className="fptitles">
          <h1 className="h1">Welcome To Virtual Campus</h1>
          <h2 className="h2">Here's the 5th Floor of our Building</h2>
        </div>
        
        <object
          id="svgObject"
          type="image/svg+xml"
          data="/images/Floorplans/Bldg6Floor5.svg"
          aria-label="Building 6 Floor 5 SVG"
        >
          <p>Your browser does not support SVGs. Consider updating your browser for a better experience.</p>
        </object>
      </div>

      {/* Render popups dynamically */}
      {classrooms.map(({ id, name, roomtitle, description, showTimetableOnly, faculties }) => (
  <div
    key={id}
    id={`popup${id}`}
    className="popup p-3 border rounded shadow"
    style={{ display: 'none', position: 'absolute', backgroundColor: 'white' }}
  >
    <div className="popup-header">
      <h5 className="popup-title">{name}</h5>
      <span className="popupClose close">×</span>
    </div>

    {showTimetableOnly ? ( 
      // Show only timetable image
      <>
        <p>{description}</p>
        <p>{roomtitle}</p>
        <div className="tt-cont">
          <img
            alt="Timetable"
            className="timetable-image"
            src={`/images/floor5timetables/${name}.jpg`}
          />
          <a
            href={`/images/floor5timetables/${name}.jpg`} // Path to the timetable image
            download={`${name}-timetable.jpg`} // Set the filename to be downloaded
            className="view-details-btn"
          >
            Download Timetable
          </a>
        </div>
      </>
    ) : ( 
      // Show full details with the "View Timetable" button for additional popup
      <>
        <p>{description}</p>
        <p>{roomtitle}</p>
        <div className='popup-btn-cont'>
        <button
          onClick={() => {
            const timetablePopup = document.getElementById(`timetablePopup${id}`);
            if (timetablePopup) {
              timetablePopup.style.display = 'block';
            }
          }}
          className="view-details-btn"
        >
          View Timetable
        </button></div>
        
        {faculties && (
          <ol className="faculty-grid">
            {faculties.map((faculty, index) => (
              <li key={index} className="faculty-item">
                <div className="fc-cont">
                  <img alt="facultyimage" className="fimage" src={faculty.img} />
                  <div className="faculty-details">
                    <p>{faculty.name}</p>
                    <a
                      href={faculty.link}
                      className="view-details-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        )}
        
        {/* Additional popup for viewing the timetable */}
        <div
          id={`timetablePopup${id}`}
          className="popup p-3 border rounded shadow"
          style={{ display: 'none', position: 'absolute', backgroundColor: 'white' }}
        >
          <div className="popup-header">
            <h5 className="popup-title">{name} - Timetable</h5>
            <span
              className="popupClose close"
              onClick={() => {
                const timetablePopup = document.getElementById(`timetablePopup${id}`);
                if (timetablePopup) {
                  timetablePopup.style.display = 'none';
                }
              }}
            >
              ×
            </span>
          </div>
          <div className="tt-cont">
            <img
              alt="Timetable"
              className="timetable-image"
              src={`/images/floor5timetables/${name}.jpg`}
            />
            <a
          href={`/images/floor5timetables/${name}.jpg`} // Path to the timetable image
          download={`${name}-timetable.jpg`} // Set the filename to be downloaded
          className="view-details-btn"
        >
          Download Timetable
        </a>
          </div>
        </div>
      </>
    )}
  </div>
))}


    </div>
    </div>
  );
};

export default Floor5;