import { render } from "@testing-library/react";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes  from "prop-types";

export class News  extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 7
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number 
  }

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }

  }
  

  async componentDidMount(){
    
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d38c5b1136e345db8716fcc0a1eb634f&page=1&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedata = await data.json()
  this.setState({articles: parsedata.articles,totalResult: parsedata.totalResult})
}

handlePreviousClick= async ()=>{
  console.log("previous")
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d38c5b1136e345db8716fcc0a1eb634f&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedata = await data.json()
  this.setState({
    page: this.state.page -1,
    articles: parsedata.articles
  })


}

handleNextClick= async()=>{
  console.log("Next")
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d38c5b1136e345db8716fcc0a1eb634f&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
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