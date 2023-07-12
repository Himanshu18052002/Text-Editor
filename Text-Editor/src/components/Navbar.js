import React from 'react'
/*import {Link} from 'react-router-dom'*/
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          {/*<li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
             </li>*/}
          
        </ul>
        <div className={`form-check mx-1 form-switch text-${props.mode === 'light'? 'dark' : 'light' }`}>
         <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable color Mode</label>
      </div>
      <div className={`form-check mx-1 form-switch text-${props.mode === 'light'? 'dark' : 'light' }`}>
         <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable color Mode</label>
      </div>
      <div className={`form-check mx-1 form-switch text-${props.mode === 'light'? 'dark' : 'light' }`}>
         <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable color Mode</label>
      </div>
      <div className={`form-check mx-1 form-switch text-${props.mode === 'light'? 'dark' : 'light' }`}>
         <input className="form-check-input" onClick={props.toggleMode3} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable color Mode</label>
      </div>
      
    </div>
    
        </div>
  </nav>
  )
}
