import React, { Component } from "react";

export class NewsItem extends Component {

  render(){
    let {title, image_url, news_url}= this.props;
    return(
    <div className="my-3">
          <div className="card" >
        <img src={image_url} className="card-img-top" alt="..."/>
        <div className="card-body"> 
          <h5 className="card-title">{title}</h5>
            {/* <p className="card-text">{describe}</p> */}
            <a href={news_url} target="_blank" className="btn btn-sm btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>

    )
      }
    }

export default NewsItem