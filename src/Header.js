// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo">
//         <img src="/path-to-your-logo.png" alt="Logo" />
//       </div>
//       <nav className="nav-links">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#services">Services</a>
//         <a href="#contact">Contact</a>
//       </nav>
//     </div>
//   );
// };

// export default Header;


import React from 'react';

const Header = () => {
    return (
        <div style={{position: 'fixed',top: 0,left: 0,width: '100%',height: '60px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: '#fff',padding: '0 20px',zIndex: 1000,boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
            <div>
                <img src="logo.png" alt="Logo" style={{ height: '40px' }} />
            </div>
            <div style={{ display: 'flex', gap: '10px',marginRight:"100px" }}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default Header;
