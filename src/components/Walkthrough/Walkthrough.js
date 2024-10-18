import React from 'react'
import "./Walkthrough.css"

const Walkthrough = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cards</title>
  <link rel="stylesheet" href="./card.css" />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <div className='walk-body'>
    <div className="chead">
    <h3>A Quick guid to Visit our Website</h3>
  </div>
  <div className="wcard-container">
    <div className="wcard" id="c1">
      <div className="content">
        <div className="walk-front">
          <div className="front-content">
            <div className="badge">STEP 1</div>
            <div className="description">
              <p>
                Start by creating your personal account. Provide your basic
                information and set up a password to access the virtual campus.
                Once registered, you’ll be able to explore all features.
              </p>
            </div>
          </div>
        </div>
        <div className="walk-back">
          <div className="back-content">
            <p>Hover to see STEP 1</p>
          </div>
        </div>
      </div>
    </div>
    <div className="wcard" id="c2">
      <div className="content">
        <div className="walk-front">
          <div className="front-content">
            <div className="badge">STEP 2</div>
            <div className="description">
              <p>
                After logging in, click on the 'Xplore Campus' button. This will
                give you access to an interactive map of the entire campus. From
                here, you can choose specific buildings and view their layout.
              </p>
            </div>
          </div>
        </div>
        <div className="walk-back">
          <div className="back-content">
            <p>Hover to see STEP 2</p>
          </div>
        </div>
      </div>
    </div>
    <div className="wcard" id="c3">
      <div className="content">
        <div className="walk-front">
          <div className="front-content">
            <div className="badge">STEP 3</div>
            <div className="description">
              <p>
                Pick the floor number from the dropdown menu to navigate to a
                specific area. This will display a detailed floor plan with room
                labels for easy navigation.
              </p>
            </div>
          </div>
        </div>
        <div className="walk-back">
          <div className="back-content">
            <p>Hover to see STEP 3</p>
          </div>
        </div>
      </div>
    </div>
    <div className="wcard" id="c4">
      <div className="content">
        <div className="walk-front">
          <div className="front-content">
            <div className="badge">STEP 4</div>
            <div className="description">
              <p>
                Just click on classrooms to find specific classrooms, teacher
                cabins, or HOD offices. Click on any room to view more details
                like schedules, teacher availability, and their personal
                websites.
              </p>
            </div>
          </div>
        </div>
        <div className="walk-back">
          <div className="back-content">
            <p>Hover to see STEP 4</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ul className="bh">
    <div className='walk-home'>
    <li className="home">
      <a href="/">
        <i className="fas fa-home" />
      </a>
    </li>
    </div>
  </ul>
  <footer className="footer-feed">
    <p>All Rights Reserved © 2024 Virtuonavi</p>
  </footer>
</div>
</>
  );
}

export default Walkthrough;