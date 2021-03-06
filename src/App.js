import React, { Component } from "react";
import './App.css';

import Movie from './Movie' //자식(Movie.js)연결

class App extends Component{

  state={
    movies:[
      {title : '원더우먼', poster : 'http://image.cine21.com/resize/cine21/poster/2017/0519/16_11_51__591e9ab7efb8e[X230,330].jpg'},
      {title : '캡틴마블', poster : 'http://image.cine21.com/resize/cine21/poster/2019/0225/14_10_18__5c7378ba87fb6[X230,330].jpg'},
      {title : '스파이더맨', poster : 'http://image.cine21.com/resize/cine21/poster/2014/0407/14_03_47__534231b3914f6[X230,330].jpg'},
      {title : '아이언맨', poster : 'http://image.cine21.com/resize/cine21/poster/2008/0320/M0010001_[X230,330].jpg'},
    ]
  }//state

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

  render(){
    return (
      <div className="App">
        {this.state.movies.map((x,index) => {
            return <Movie title = {x.title} poster={x.poster} key={index}/> 
          })
        }
      </div>

    ); 
  }//render
}//component

export default App;
//반드시 App 전체(default)를 export 해줘야 서버에 출력됨

