import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  onHandleChange = (e) => {
    let {dispatch} = this.props;
    dispatch({type:'UPDATE_USERNAME', username: e.target.value})

  }

  onUserSearch = () => {
    let {dispatch} = this.props;
    let {username} = this.props;
    fetch (`https://api.github.com/users/${username}`)
    .then(pants =>{
      return pants.json()
    })
    .then(res =>{
      dispatch ({type:'UPDATE_USERPROFILE', userprofile: res})
    })
    
  }
  render() {
   return (
     <div>
       <h1> {this.props.username}</h1>
       <input type="text"
       onChange={this.onHandleChange}
       value={this.props.user}/>
       <button onClick={this.onUserSearch}>Search</button>
       
       </div>
   );
}
}

const mapStatetoProps = (state) => {
  return {
    username: state.username,
    userprofile: state.userprofile,
    repos: state.repos
  }
}



export default connect (mapStatetoProps) (App) ;
