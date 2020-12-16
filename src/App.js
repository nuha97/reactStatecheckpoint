import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  // const styleObject = {
  //       margin:"150px 350px",
  //       fontSize:"20px",
  //       border:"1px solid blue" ,
  //       padding: "50px",
  //       fontFamily:"Roboto,san-serif"
  //   }

  constructor(){
    super();
    this.state = {
      Person:{
      fullName : 'Press the Button to show Profile Data!',
      bio : '',
      imgSrc : '',
      profession : ''
    },
      showState : false,
      seconds : 1
    }
    console.log('the beggening of component life cycle')
  }
  /*------------- Component Life Cycle -----------*/
  static getDerivedStateFromProps(props,state){
    console.log('component life cycle get Derived state from props')
    return null
  }
  componentDidMount()
  {
    //console.log('component life cycle did Mount')
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }
  shouldComponentUpdate()
  {
    console.log('component life cycle should update')
    return true;
  }

  getSnapshotBeforeUpdate()
  {
    console.log('component life cycle get snapshot before update')
  }

  componentDidUpdate()
  {
    console.log('component life cycle did Update')
  }
  //------------------------------------------------
  changeState()
  {
    this.setState({
      showState:true
    })
  }
  showProfileData()
  {
    this.changeState()
    this.setState({
    Person:{
      fullName : 'Nuha Ahmed',
      bio : 'here is my bio',
      imgSrc : logo,
      profession : 'jounior Programmer'
    }
    })
  }
  
  render(){
  return (
    <div style={{ margin:"150px 350px",fontSize:"20px",border:"1px solid blue" ,padding: "50px",
    fontFamily:"Roboto,san-serif" , textAlign:"center"}}>
    <img  src={this.state.Person.imgSrc} width={200} height={200} alt="Profile Image" />
    <h1>{this.state.Person.fullName}</h1>
    <h2>{this.state.Person.profession}</h2>
    <p><em>{this.state.Person.bio}</em></p>
    <h4>Mounting Timer : {this.state.seconds}</h4>
    <button onClick={()=>this.showProfileData()} 
    style={{ padding:"20px 40px",fontSize:"20px",cursor:"pointer"}}>Show Profile Data</button>
    </div>
  );
  }
}

export default App;
