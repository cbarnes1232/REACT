import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
      color: "white",
      fontSize: "1.3rem",
      textDecoration: "none",
      margin: "5px",
      lineHeight: 3,
      position: "absolute",
      right: "5px",
    
},
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
    display: 'flex'
  },
};

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Home</div>
    </div>
  );
}

export default Navbar;
