import React from 'react';

const Ouvrage = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '80px', // Ensures it sits below the navbar
        marginLeft: '250px', // Aligns to the right of the sidebar
        width: '70%', // Expands width to fit well in the page
        height: '60vh', // Adjust height for central alignment
        fontSize: '3rem', // Increases font size
        fontWeight: 'bold',
        color: '#4A5568', // Adjust color if desired
        textAlign: 'center'
      }}
    >
      Ouvrage
    </div>
  );
};

export default Ouvrage;
