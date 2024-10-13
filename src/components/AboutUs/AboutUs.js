import { useNavigate } from 'react-router-dom';
import React, { useState ,useEffect  } from 'react';
import './AboutUs.css'; // Import a CSS file for styling


const AboutUs =() => {
         
    useEffect(() => {
        const script = document.createElement('script');
        script.src = './Abpage.js';
        script.async = true;
        document.body.appendChild(script);
    
        script.onload = () => {
          if (window.SomeGlobalMethod) {
            window.SomeGlobalMethod();
          }
        };
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
    return (
    <div>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="utf-8" />
  <meta name="keywords" content="Member, Role, Our Backend Programmer, Team Leader, Data Analytics Expert, Technical Lead Profile, Data Analyst, Tech Lead, Digital Media Manager, Meet Our Team Members, Role" />
  <meta name="description" content />
  <title>Page 1</title>
  <link rel="stylesheet" href="nicepage.css" media="screen" />
  <link rel="stylesheet" href="index.css" media="screen" />
  <meta name="generator" content="Nicepage 6.17.0, nicepage.com" />
  <link rel="stylesheet" href="nicepage.css" media="screen"></link>
  <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i" />
  <link id="u-page-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" />
  <meta name="theme-color" content="#478ac9" />
  <meta property="og:title" content="Page 1" />
  <meta property="og:type" content="website" />
  <meta data-intl-tel-input-cdn-path="intlTelInput/" />
  <header className="u-clearfix u-header u-header" id="sec-510c"><div className="u-clearfix u-sheet u-sheet-1">
      <a href="#" className="u-image u-logo u-image-1" data-image-width={224} data-image-height={225}>
        <img src="images/pccoelogo.png" className="u-logo-image u-logo-image-1" />
      </a>
      <nav className="u-menu u-menu-one-level u-offcanvas u-menu-1">
        <div className="menu-collapse" style={{"font-size":"1.5rem","letter-spacing":"0px","font-weight":"700"}}>
          <a className="u-button-style u-custom-border-radius u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
            <svg className="u-svg-link" viewBox="0 0 24 24"><use xlinkHref="#menu-hamburger" /></svg>
            <svg className="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g><rect y={1} width={16} height={2} /><rect y={7} width={16} height={2} /><rect y={13} width={16} height={2} />
              </g></svg>
          </a>
        </div>
        <div className="u-custom-menu u-nav-container">
          <ul className="u-nav u-unstyled u-nav-1"><li className="u-nav-item"><a className="u-border-3 u-border-hover-palette-1-dark-1 u-border-palette-1-light-2 u-button-style u-nav-link u-radius u-text-active-palette-1-base u-text-hover-palette-1-dark-1" href="/" style={{"padding":"10px 55px","border-style":"solid","--radius":"200px"}}>Home</a>
            </li></ul>
        </div>
        <div className="u-custom-menu u-nav-container-collapse">
          <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
            <div className="u-inner-container-layout u-sidenav-overflow">
              <div className="u-menu-close" />
              <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item"><a className="u-button-style u-nav-link" href="/">Home</a>
                </li></ul>
            </div>
          </div>
          <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
        </div>
      </nav>
    </div></header> 
  <section className="u-align-center u-clearfix u-container-align-center u-image u-shading u-section-1" id="carousel_790c" data-image-width={1280} data-image-height={1280}>
    <div className="u-clearfix u-sheet u-sheet-1">
      <h4 className="u-align-center u-text u-text-1" data-animation-name="customAnimationIn" data-animation-duration={1500}>Presenting you </h4>
      <h1 className="u-align-center u-text u-text-default u-text-2" data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={500}>The VirtuoNavi's </h1>
      <h3 className="u-align-center u-text u-text-body-alt-color u-text-3" data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={500}>A Community Engagement Project </h3>
      <a href="#" className="u-active-white u-align-center u-border-2 u-border-active-white u-border-hover-white u-border-white u-btn u-btn-round u-button-style u-hover-white u-none u-radius-50 u-btn-1" data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={500}>read more</a>
    </div>
  </section>
  <section className="u-clearfix u-grey-80 u-section-2" id="sec-3111">
    <div className="u-clearfix u-sheet u-sheet-1">
      <h2 className="u-align-center u-text u-text-default u-text-1" data-animation-name="customAnimationIn" data-animation-duration={1500}>Data Analytics Expert</h2>
      <div className="u-expanded-width u-list u-list-1">
        <div className="u-repeater u-repeater-1">
          <div className="u-container-style u-list-item u-radius-32 u-repeater-item u-shape-round u-white u-list-item-1" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration={1500}>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
              <p className="u-align-center u-text u-text-default u-text-2">Eshal Shaikh - Team Lead</p>
              <div className="u-align-center u-border-3 u-border-grey-30 u-line u-line-horizontal u-opacity u-opacity-45 u-line-1" />
              <div className="u-border-9 u-border-palette-1-base u-image u-image-circle u-preserve-proportions u-image-1" alt data-image-width={640} data-image-height={640} data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={750} />
            </div>
          </div>
          <div className="u-container-style u-list-item u-radius-32 u-repeater-item u-shape-round u-white u-list-item-2" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration={1500}>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
              <p className="u-align-center u-text u-text-default u-text-3">Akshay Dhere - Design and Front End Lead</p>
              <div className="u-align-center u-border-3 u-border-grey-30 u-line u-line-horizontal u-opacity u-opacity-45 u-line-2" />
              <div className="u-border-9 u-border-palette-1-base u-image u-image-circle u-preserve-proportions u-image-2" alt data-image-width={200} data-image-height={200} data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={750} />
            </div>
          </div>
          <div className="u-container-style u-list-item u-radius-32 u-repeater-item u-shape-round u-white u-list-item-3" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration={1500}>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
              <p className="u-align-center u-text u-text-default u-text-4">Riya Deshmukh - Digital Media management lead</p>
              <div className="u-align-center u-border-3 u-border-grey-30 u-line u-line-horizontal u-opacity u-opacity-45 u-line-3" />
              <img className="u-border-9 u-border-palette-1-base u-image u-image-circle u-preserve-proportions u-image-3" alt data-image-width={800} data-image-height={800} src="images/riya.jfif" data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={750} />
            </div>
          </div>
          <div className="u-container-style u-list-item u-radius-32 u-repeater-item u-shape-round u-white u-list-item-4" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={500}>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
              <p className="u-align-center u-text u-text-default u-text-5">Pranita Daphal<br />Data Analytics 
              </p>
              <div className="u-align-center u-border-3 u-border-grey-30 u-line u-line-horizontal u-opacity u-opacity-45 u-line-4" />
              <div className="u-border-9 u-border-palette-1-base u-image u-image-circle u-preserve-proportions u-image-4" alt data-image-width={820} data-image-height={820} data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={750} />
            </div>
          </div>
          <div className="u-container-style u-list-item u-radius-32 u-repeater-item u-shape-round u-white u-list-item-5" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={500}>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
              <p className="u-align-center u-text u-text-default u-text-6">Rajshree Gawai - Research coordinator Lead</p>
              <div className="u-align-center u-border-3 u-border-grey-30 u-line u-line-horizontal u-opacity u-opacity-45 u-line-5" />
              <div className="u-border-9 u-border-palette-1-base u-image u-image-circle u-preserve-proportions u-image-5" alt data-image-width={888} data-image-height={888} data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={750} />
            </div>
          </div>
          <div className="u-container-style u-list-item u-radius-32 u-repeater-item u-shape-round u-white u-list-item-6" data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={500}>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-6">
              <p className="u-align-center u-text u-text-default u-text-7">Om Dalvi - Backend Programmer</p>
              <div className="u-align-center u-border-3 u-border-grey-30 u-line u-line-horizontal u-opacity u-opacity-45 u-line-6" />
              <div className="u-border-9 u-border-palette-1-base u-image u-image-circle u-preserve-proportions u-image-6" alt data-image-width={800} data-image-height={800} data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={750} />
            </div>
          </div>
        </div>
      </div>
      <div className="custom-expanded u-list u-list-2">
        <div className="u-repeater u-repeater-2">
          <div className="u-container-style u-list-item u-radius-32 u-repeater-item u-shape-round u-white u-list-item-7" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration={1500}>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-7">
              <p className="u-align-center u-text u-text-default u-text-8" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction> Harshal Patil<br />&nbsp;Technical lead
              </p>
              <div className="u-align-center u-border-3 u-border-grey-30 u-line u-line-horizontal u-opacity u-opacity-45 u-line-7" />
              <div className="u-border-9 u-border-palette-1-base u-image u-image-circle u-preserve-proportions u-image-7" alt data-image-width={600} data-image-height={600} data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={750} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-clearfix u-container-align-center u-grey-80 u-section-3" id="carousel_4485">
    <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
      <div className="u-expanded-width u-layout-grid u-list u-list-1">
        <div className="u-repeater u-repeater-1">
          <div className="u-container-align-left u-container-style u-list-item u-repeater-item u-shape-rectangle u-list-item-1" data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={0}>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1"><span className="u-align-left u-icon u-text-palette-2-base u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 95.333 95.332" style={{}}><use xlinkHref="#svg-b666" /></svg><svg className="u-svg-content" viewBox="0 0 95.333 95.332" x="0px" y="0px" id="svg-b666" style={{"enable-background":"new 0 0 95.333 95.332"}}><g><g><path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793    c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045    s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076    c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002    c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z" /><path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019    c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23    c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16    c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312    c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z" />
                    </g>
                  </g></svg></span>
              <p className="u-align-left u-text u-text-1">Harshal Patil, our Technical Lead, is the driving force behind the successful implementation of our project.</p>
              <h4 className="u-align-left u-text u-text-default u-text-2">Role</h4>
            </div>
          </div>
          <div className="u-container-align-left u-container-style u-list-item u-repeater-item u-shape-rectangle u-list-item-2" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration={1500}>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2"><span className="u-align-left u-icon u-text-palette-2-base u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 95.333 95.332" style={{}}><use xlinkHref="#svg-db30" /></svg><svg className="u-svg-content" viewBox="0 0 95.333 95.332" x="0px" y="0px" id="svg-db30" style={{"enable-background":"new 0 0 95.333 95.332"}}><g><g><path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793    c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045    s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076    c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002    c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z" /><path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019    c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23    c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16    c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312    c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z" />
                    </g>
                  </g></svg></span>
              <p className="u-align-left u-text u-text-3">Akshay Dhere, our talented Design and Front End Lead, crafts the visual and interactive aspects of our system.</p>
              <h4 className="u-align-left u-text u-text-default u-text-4">Skills</h4>
            </div>
          </div>
          <div className="u-container-align-left u-container-style u-list-item u-repeater-item u-shape-rectangle u-list-item-3" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={500}>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3"><span className="u-align-left u-icon u-text-palette-2-base u-icon-3"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 95.333 95.332" style={{}}><use xlinkHref="#svg-42a5" /></svg><svg className="u-svg-content" viewBox="0 0 95.333 95.332" x="0px" y="0px" id="svg-42a5" style={{"enable-background":"new 0 0 95.333 95.332"}}><g><g><path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793    c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045    s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076    c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002    c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z" /><path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019    c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23    c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16    c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312    c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z" />
                    </g>
                  </g></svg></span>
              <p className="u-align-left u-text u-text-5">Riya Deshmukh, our Digital Media Management Lead, strategically promotes our campus navigation system across various platforms.</p>
              <h4 className="u-align-left u-text u-text-default u-text-6">Team Leader</h4>
            </div>
          </div>
          <div className="u-container-align-left u-container-style u-list-item u-repeater-item u-shape-rectangle u-list-item-4" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={500}>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4"><span className="u-align-left u-icon u-text-palette-2-base u-icon-4"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 95.333 95.332" style={{}}><use xlinkHref="#svg-ac06" /></svg><svg className="u-svg-content" viewBox="0 0 95.333 95.332" x="0px" y="0px" id="svg-ac06" style={{"enable-background":"new 0 0 95.333 95.332"}}><g><g><path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793    c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045    s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076    c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002    c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z" /><path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019    c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23    c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16    c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312    c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z" />
                    </g>
                  </g></svg></span>
              <p className="u-align-left u-text u-text-7">Meet our team leader, Eshal Shaikh, who leads our campus navigation system project with exceptional vision and leadership.</p>
              <h4 className="u-align-left u-text u-text-default u-text-8">Research Lead</h4>
            </div>
          </div>
          <div className="u-container-align-left u-container-style u-list-item u-repeater-item u-shape-rectangle u-list-item-5" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={750}>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5"><span className="u-align-left u-icon u-text-palette-2-base u-icon-5"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 95.333 95.332" style={{}}><use xlinkHref="#svg-9c4d" /></svg><svg className="u-svg-content" viewBox="0 0 95.333 95.332" x="0px" y="0px" id="svg-9c4d" style={{"enable-background":"new 0 0 95.333 95.332"}}><g><g><path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793    c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045    s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076    c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002    c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z" /><path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019    c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23    c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16    c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312    c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z" />
                    </g>
                  </g></svg></span>
              <p className="u-align-left u-text u-text-9">Rajshree Gawai, our dedicated Research Coordinator Lead, ensures that our system is backed by solid research.</p>
              <h4 className="u-align-left u-text u-text-default u-text-10">Backend Programmer</h4>
            </div>
          </div>
          <div className="u-container-align-left u-container-style u-list-item u-repeater-item u-shape-rectangle u-list-item-6" data-animation-direction="Up" data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={750}>
            <div className="u-container-layout u-similar-container u-valign-top u-container-layout-6"><span className="u-align-left u-icon u-text-palette-2-base u-icon-6"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 95.333 95.332" style={{}}><use xlinkHref="#svg-ea8a" /></svg><svg className="u-svg-content" viewBox="0 0 95.333 95.332" x="0px" y="0px" id="svg-ea8a" style={{"enable-background":"new 0 0 95.333 95.332"}}><g><g><path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793    c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045    s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076    c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002    c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z" /><path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019    c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23    c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16    c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312    c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z" />
                    </g>
                  </g></svg></span>
              <p className="u-align-left u-text u-text-11">Om Dalvi, our skilled Backend Programmer, is the coding genius behind the technical framework of our system.</p>
              <h4 className="u-align-left u-text u-text-default u-text-12">Data Analyst</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="u-align-left u-clearfix u-container-align-left u-image u-shading u-section-4" id="carousel_4c00" data-image-width={1980} data-image-height={1320}>
    <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
      <div className="u-align-left u-container-align-left u-container-style u-group u-shape-rectangle u-group-1" data-animation-name="customAnimationIn" data-animation-duration={1500} data-animation-delay={500}>
        <div className="u-container-layout u-valign-middle u-container-layout-1">
          <h2 className="u-align-left u-font-titillium-Web u-text u-text-1">Our Team Socials</h2>
          <p className="u-align-left u-large-text u-text u-text-body-alt-color u-text-variant u-text-2">Om Dalvi, our skilled Backend Programmer, is the coding genius behind the technical framework of our system.</p>
          <div className="u-social-icons u-spacing-10 u-social-icons-1">
            <a className="u-social-url" target="_blank" href><span className="u-icon u-icon-circle u-social-facebook u-social-icon u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}><use xlinkHref="#svg-cb72" /></svg><svg x="0px" y="0px" viewBox="0 0 112 112" id="svg-cb72" className="u-svg-content"><path d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z" /></svg></span>
            </a>
            <a className="u-social-url" target="_blank" href><span className="u-icon u-icon-circle u-social-icon u-social-twitter u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}><use xlinkHref="#svg-f751" /></svg><svg x="0px" y="0px" viewBox="0 0 112 112" id="svg-f751" className="u-svg-content"><path d="M92.2,38.2c0,0.8,0,1.6,0,2.3c0,24.3-18.6,52.4-52.6,52.4c-10.6,0.1-20.2-2.9-28.5-8.2 c1.4,0.2,2.9,0.2,4.4,0.2c8.7,0,16.7-2.9,23-7.9c-8.1-0.2-14.9-5.5-17.3-12.8c1.1,0.2,2.4,0.2,3.4,0.2c1.6,0,3.3-0.2,4.8-0.7 c-8.4-1.6-14.9-9.2-14.9-18c0-0.2,0-0.2,0-0.2c2.5,1.4,5.4,2.2,8.4,2.3c-5-3.3-8.3-8.9-8.3-15.4c0-3.4,1-6.5,2.5-9.2 c9.1,11.1,22.7,18.5,38,19.2c-0.2-1.4-0.4-2.8-0.4-4.3c0.1-10,8.3-18.2,18.5-18.2c5.4,0,10.1,2.2,13.5,5.7c4.3-0.8,8.1-2.3,11.7-4.5 c-1.4,4.3-4.3,7.9-8.1,10.1c3.7-0.4,7.3-1.4,10.6-2.9C98.9,32.3,95.7,35.5,92.2,38.2z" /></svg></span>
            </a>
            <a className="u-social-url" target="_blank" href><span className="u-icon u-icon-circle u-social-icon u-social-instagram u-icon-3"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}><use xlinkHref="#svg-96f2" /></svg><svg x="0px" y="0px" viewBox="0 0 112 112" id="svg-96f2" className="u-svg-content"><path d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z" /><path d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z" /><path d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7 V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7 c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z" /></svg></span>
            </a>
            <a className="u-social-url" target="_blank" href="#"><span className="u-icon u-icon-circle u-social-google u-social-icon u-icon-4"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}><use xlinkHref="#svg-b221" /></svg><svg x="0px" y="0px" viewBox="0 0 112 112" id="svg-b221" className="u-svg-content"><path d="M62.2,81.6c-8.6,11.2-24.6,14.4-37.6,10C10.9,87,0.8,73.2,1,58.5c-0.8-18,15.2-34.6,33.1-34.9 c9.2-0.8,18.2,2.7,25,8.6c-2.9,3.1-5.7,6.2-8.9,9.2c-6.2-3.8-13.5-6.5-20.6-4C18.1,40.7,11,54.2,15.4,65.6 c3.5,11.8,17.8,18.3,29.2,13.2c5.8-2.1,9.7-7.4,11.3-13.2c-6.6-0.1-13.2,0-20.1-0.3c0-3.9,0-7.9,0-11.9c11.2,0,22.2,0,33.3,0 C69.9,63.4,68.3,73.9,62.2,81.6z M110.9,63.7c-3.4,0-6.6,0-10,0c0,3.4,0,6.6,0,10c-3.4,0-6.6,0-10,0c0-3.4,0-6.6,0-10 c-3.4,0-6.6,0-10,0c0-3.4,0-6.6,0-10c3.4,0,6.6,0,10,0c0-3.4,0-6.6,0.1-10c3.4,0,6.6,0,10,0c0,3.4,0,6.6,0,10c3.4,0,6.6,0,10,0 C110.9,56.9,110.9,60.3,110.9,63.7z" /></svg></span>
            </a>
          </div>
          <p className="u-align-left u-text u-text-body-alt-color u-text-3" />
        </div>
      </div>
    </div>
  </section>
  <footer className="u-align-center u-clearfix u-container-align-center u-footer u-grey-80 u-footer" id="sec-f14b"><div className="u-clearfix u-sheet u-sheet-1">
      <p className="u-small-text u-text u-text-variant u-text-1">copyright text </p>
    </div></footer>
  <section className="u-backlink u-clearfix u-grey-80">
    <p className="u-text">
      <span>This site was created with the </span>
      <a className="u-link" href="https://nicepage.com/" target="_blank" rel="nofollow">
        <span>Nicepage</span>
      </a>
    </p>
  </section>
</div> 
    );  
};


export default AboutUs;