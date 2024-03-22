import React from 'react';
import "./helpPage.css";
import NavBar from "../../components/navBar/NavBar.jsx";
function HelpPage() {
  return (
    <>
    <NavBar showSearch="noShow"/>
    <div className='helpPageContainer'>
      <h3 className='helpPageTitle'>Meet The Team</h3>
      <div className='collaboratorContainer'>
        <p className='collaboratorName'>Collaborator Name</p>
        <div className='gitHubIcon'></div>
        <div className='linkedInIcon'></div>
      </div>
      <div className='collaboratorContainer'>
        <p className='collaboratorName'>Collaborator Name</p>
        <div className='gitHubIcon'></div>
        <div className='linkedInIcon'></div>
      </div>
      <div className='collaboratorContainer'>
        <p className='collaboratorName'>Collaborator Name</p>
        <div className='gitHubIcon'></div>
        <div className='linkedInIcon'></div>
      </div>
      <div className='collaboratorContainer'>
        <p className='collaboratorName'>Collaborator Name</p>
        <div className='gitHubIcon'></div>
        <div className='linkedInIcon'></div>
      </div>
      <div className='collaboratorContainer'>
        <p className='collaboratorName'>Collaborator Name</p>
        <div className='gitHubIcon'></div>
        <div className='linkedInIcon'></div>
      </div>
    </div>
    </>
  )
}
export default HelpPage