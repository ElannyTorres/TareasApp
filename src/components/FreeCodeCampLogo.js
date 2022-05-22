import React from 'react';
import '../stylesheets/FreeCodeCampLogo.css';
import freeCodeCampLogo from '../img/download-removebg-preview.png';

function FreeCodeCampLogo() {
  return (
    <div className="freeCodeCamp-logo-contenedor">
      <img src={freeCodeCampLogo} alt="freecodecamp-logo" />
    </div>
  );
}

export default FreeCodeCampLogo;
