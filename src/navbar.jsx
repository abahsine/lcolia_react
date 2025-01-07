import React from "react";
import "./navbar.css"
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Name = "Bahsine"

function Navbar() {
    return (
        <Nav_teste></Nav_teste>
    );
}


function Nav_teste () {
    return (<div className="principale">
        <div className="nav_test"></div>
        <div className="Accueil_main"> 
            <div className="Accueil_secondaire">
                <h2>Bonjour {Name}</h2>
                <div className="Accueil_recap" >
                 <Recap_div href={"#"} titre={"Mes livraisons"} valeur={7}></Recap_div>
                 <Recap_div href={"#"} titre={""} valeur={17} className="Recap_laterale"></Recap_div>
                 <Recap_div href={"#"} titre={"Livrées"} valeur={78} ></Recap_div>
                 <Recap_div href={"#"} titre={"Livres"} valeur={15} className="Recap_laterale"></Recap_div>
                 
                </div>
                <div className="Accueil_notif"> 

                    <div className="Accueil_notif_titre">
                        <h3>Activités Récentes</h3>
                        <a href="#" style={{fontSize:"20px", color:"#000"}} >Voir tous
                        
                    </a>
                    </div>

                <div  className="notif_body">
                   <Notification titre={"Colis n° 1548557"} content={"Vous pouvez venir recuperer  votre  colis "} link={"/llklsdjhsk"} ></Notification>
                   <Notification titre={"Colis n° 1548557"} content={"Vous pouvez venir recuperer  votre  colis "} link={"/llklsdjhsk"} ></Notification>
                   <Notification titre={"Colis n° 1548557"} content={"Vous pouvez venir recuperer  votre  colis "} link={"/llklsdjhsk"} ></Notification>
                   <Notification titre={"Colis n° 1548557"} content={"Vous pouvez venir recuperer  votre  colis "} link={"/llklsdjhsk"} ></Notification>
                </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
}

function Recap_div ({titre, valeur,href}){
    return (
        <a href={href}>
        <div className="Accueil_recap_child">
            <h3>{valeur}</h3>
            <h5>{titre}</h5>
        </div>
           </a>
    );
}
function Notification({titre , content , link,laterale}) {
    return (
        <div className={"Accueil_notif_child "}>

        <a href="https://google.com">
        <div className="notif_unit">
            <h3>{titre}</h3>
            <p>{content}</p>
        </div>
        <h3 className="voirPlus" id="voir_plus">Voir plus <FaArrowCircleRight /></h3>
       </a>
    </div>
    );
}
export default Navbar ;