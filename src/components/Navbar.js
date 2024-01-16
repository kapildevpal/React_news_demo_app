import React,{ Component } from "react"
// import PropsTypes from 'prop-types'

export class Navbar extends Component{

  static propsTypes = {



  }
  render(){
    return(
      <div>
         <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Active</a>
          </li>
          <li className="nav-item">
            {/* <link className="nav-link" href="/news">news</link> */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    )
    
  }
}

export default Navbar

