import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {

  // Constructor method is called before anything else when the component is initiated & it is the natural place to setup the initial state and other initial values
  constructor(props){
    super(props);
    console.log("I am from constructor of Header class component and is called before anything else!");
  }

  // Renders output HTML to the DOM
render(){
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


// This gets called after the component is rendered i.e. already placed in DOM
  conponentDidMount(){
    console.log("I am from conponentDidMount of Header class component which gets called once the render method gets finished and the HTML is placed in DOM!");
  }

// This gets called after the component is updated in the DOM
  componentDidUpdate(){
    console.log("I am componentDidUpdate of Header class component & gets called after the component is updated in the DOM!");
  }

// This is called when the component is about to be removed from the DOM
  componentWillUnmount(){
    console.log("The component named Header is about to be unmounted!");
  }
}

