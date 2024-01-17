import React,{ Component } from "react"
// import PropsTypes from 'prop-types'
import { Link } from "react-router-dom"
export class Navbar extends Component{

  static propsTypes = {



  }
  render(){
    return(
      <div>
         <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/business">business</Link>
          </li>
          
            <Link className="nav-link active" aria-current="page" to="/general">general</Link>

            <Link className="nav-link active" aria-current="page" to="/entertainment">entertainment</Link>

          <li className="nav-item">
            {/* <link className="nav-link" to="/news">news</link> */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Link</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled">Disabled</Link>
          </li>
        </ul>
      </div>
    )
    
  }
}

export default Navbar

