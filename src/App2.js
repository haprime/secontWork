import React, { Component } from "react";
import './App.css';

import Movie from './Movie' //자식(Movie.js)연결

class App extends Component{

  state={}//state

  //5초 뒤에 새로운 영화 추가되기
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies:[
          {title:'닥터스트레인지', poster : 'http://image.cine21.com/resize/cine21/poster/2016/1014/15_12_11__5800773b773c6[X230,330].jpg'},
          ...this.state.movies
        ]
      })
    }, 2000);
  }//componentDidMount

  //랜더링 function
_renderMovies =()=>{
    const movies = this.state.movies.map((x,index) => {
        return <Movie title = {x.title} poster={x.poster} key={index}/> 
      });
      return movies;
}

  render(){
    return (
      <div className="App">
        {
            //this.state.movie가 있을 땐  _renderMovies  실행
            //state가 비어있는 상황일 땐 Loading...문구
            this.state.movies ? this._renderMovies() : 'Loading'
            
        }
      </div>
    ); 
  }//render
}//component

export default App;
//반드시 App 전체(default)를 export 해줘야 서버에 출력됨

