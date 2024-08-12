import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div>
              <Link to="/" className='navbar-brand'>
                    Employee Management System
              </Link>
            </div>
        </nav>
      </header>
    </div>
  )
}

