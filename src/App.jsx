import React from 'react';
import{useState} from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css' ;
import Dropdown from 'react-bootstrap/Dropdown';



const connectUser = false;
const type_user = "transporter";
const Name_user = "bahsine";
const picUser = "../public/PicPerso.jpg";
const width_screen = window.innerWidth;
const header_LPage = true ; 

function Profil() {
  const userName = connectUser ? Name_user : "Se connecter";
  const userPic = connectUser ? picUser : "../public/userConnect.png";
  const menuItems = connectUser ? (
    <>
      <Dropdown.Item className='dropdowon-item ' href="#/action-1">Se deconnecter</Dropdown.Item>
      <Dropdown.Item className='dropdown-item' href="#/action-2">Mes annonces</Dropdown.Item>
      <Dropdown.Item className='dropdowon-item' href="#/action-3">Notification</Dropdown.Item>
    </>
  ) : (
    <>
      <Dropdown.Item className='dropdowon-item' href="#/action-1">Se connecter</Dropdown.Item>
      <Dropdown.Item className='dropdown-item' href="#/action-2">S'inscrire</Dropdown.Item>
    </>
  );

  if(width_screen>= 650) {
     return (
    <div className={header_LPage === true ? "profil landingPage_header" : "profil"}>
      <img src={userPic} alt="" />
      <Dropdown className="dropdown ">
        <Dropdown.Toggle id="dropdown-basic" className={header_LPage === true ? "Se_connecter landingPage_header_seconnecter" : "Se_connecter" }>
          {userName}
        </Dropdown.Toggle>
        <Dropdown.Menu className='Dropdown-menu'>
          {menuItems}
        </Dropdown.Menu>
      </Dropdown>
    </div>);
  }else {
   
    return (
    <div className="profil">
      
      <Dropdown className="dropdown dropdown-mobile">
      <Dropdown.Toggle id="dropdown-basic" className={header_LPage=true ? "Se_connecter dropdown-mobile landingPage_header_seconnecter" : "Se_connecter dropdown-mobile"}>
          <img src={userPic} alt="" />
        </Dropdown.Toggle>
        <Dropdown.Menu className='Dropdown-menu dropdown-mobile'>
          {menuItems}
        </Dropdown.Menu>
      </Dropdown>
    </div>);
  }
 
  
}

function Buttons (){


  
  if(width_screen>= 650) {
    return (<div className='buttons'>
      <ul>
          <a className='button1' href='lcolia.com'>Publier votre annonce </a>
          <a href='lcolia.com' className='button2' >Voir les annonces </a>
   
      </ul>

  </div>
);
   
 }else if(type_user=== "transporter") {
  return (<div className='buttons'>
  <ul>
  <a href='lcolia.com' className='button2' >Voir les annonces </a>
  </ul>
  
</div>);
 } else {
  return (<div className='buttons'>
    <ul>
    <a className='button1' href='lcolia.com'>Publier votre annonce </a>
    </ul>
    
  </div>);

 }

}



const App = () => {
  return (
    <>
    <div className={header_LPage === true ? 'navbarReact landingPage_header ' : 'navbarReact'} expand="sm" > 
        <Navbar.Brand href="#" className={header_LPage=== true ? 'logo landingPage_header': 'logo'}>
          Lcolia
        </Navbar.Brand>
     <Buttons></Buttons>
        <Navbar.Text className='nav_profil'>
          <Profil ></Profil>
        </Navbar.Text>
    </div>
  
    </>
  );
};


export default App;
