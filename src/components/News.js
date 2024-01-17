import { render } from "@testing-library/react";
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News  extends Component {


  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false
    }

  }

  async componentDidMount(){
    
  let url = "https://newsapi.org/v2/everything?q=apple&from=2024-01-15&to=2024-01-15&sortBy=popularity&apiKey=d38c5b1136e345db8716fcc0a1eb634f&page=1";
  let data = await fetch(url);
  let parsedata = await data.json()
  this.setState({articles: parsedata.articles})
}

handlePreviousClick= async ()=>{
  console.log("previous")
  let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=d38c5b1136e345db8716fcc0a1eb634f&page=${this.state.page -1}&pageSize=10`;
  let data = await fetch(url);
  let parsedata = await data.json()
  this.setState({
    page: this.state.page -1,
    articles: parsedata.articles
  })


}

handleNextClick= async()=>{
  console.log("Next")
  let url = `https://newsapi.org/v2/everything?q=apple&from=2024-01-15&to=2024-01-15&sortBy=popularity&apiKey=d38c5b1136e345db8716fcc0a1eb634f&page=${this.state.page +1}&pageSize=10`;
  let data = await fetch(url);
  let parsedata = await data.json()
  this.setState({
    page: this.state.page +1,
    articles: parsedata.articles
  })


}


  render() {
    return (
      <div className="container my-3">
        <div className = 'row'>
          {this.state.articles && this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title:""} image_url={element.urlToImage?element.urlToImage:""} news_url= {element.url?element.url:""}/>
        </div>
        })}
       </div>
       <div className= "container d-flex justify-content-between">

       <button type="button" class="btn btn-primary"onClick={this.handlePreviousClick}>Back</button>
       <button type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next</button>

       </div>
      </div>
    )
  }
}
export default News