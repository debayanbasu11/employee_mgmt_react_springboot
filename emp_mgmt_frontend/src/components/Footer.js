import React from 'react'

export const Footer = ({footerAlert}) => {
  return (
    <div>
      <footer className='footer'>
        <span data-testid="footer-text" >All Rights Reserved 2024 @Debayan Basu</span>
        &nbsp;<button data-testid="footer-btn" className="btn btn-primary" onClick={footerAlert}>Click Me</button>
      </footer>
    </div>
  )
}
