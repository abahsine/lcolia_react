import React from "react";
import "../public/landingPage/css/style.css"
import { useState } from "react";

const Title_Reviews = ["Efficace et pratique", "Service Rapide" , "Je recommande" , "Meilleure Service"]
const Paragraphe_Reviews = [" J'ai utilisé Lcolia pour envoyer un fauteuil et je suis très satisfait du service. Les transporteurs étaient fiables et rapides. J'ai reçu plusieurs devis et j'ai pu choisir celui qui me convenait le mieux. Le suivi en temps réel était un vrai plus.Je recommande vivement cette application !",
                            "J'ai fait appel à Lcolia pour transporter un petit meuble de Lyon à Agadir. Le service était impeccable, les transporteurs étaient ponctuels et très soigneux avec mes affaires. Grâce à l'application, j'ai trouvé une solution adaptée à mes besoins et à mon budget. Un service à la hauteur de mes attentes !",
                            "Pour mon déménagement de Marseille à Marrakech, Lcolia a été d'une grande aide. J'ai rapidement obtenu plusieurs devis, ce qui m'a permis de trouver une offre compétitive. Les transporteurs étaient organisés et professionnels, et tout est arrivé en parfait état. Le suivi en temps réel est un vrai plus ! Je recommande vivement.",
                            "J'ai envoyé un colis  de Paris à Casablanca, Lcolia m'a vraiment facilité la tâche. J'ai obtenu plusieurs propositions en un temps record, ce qui m'a permis de choisir une solution qui correspondait parfaitement à mon budget. Les livreurs étaient ponctuels et soignés, et ma commande est arrivée sans encombre. Le suivi en temps réel était également très pratique ! Je recommande sans hésiter."
]

const img_reviews = ["../public/landingPage/assets/sacs.png" , "../public/landingPage/assets/petit_meuble.png" ,"../public/landingPage/assets/grand_meuble.png" , "../public/landingPage/assets/review_4.svg" ]
const name_reviews = ["- Mohamed" , "- Youssef" ,"- Sarah" ,"- Yasmine"]




function Reviews_unit ({cart}) {
   
    
    return (
    <div className={`cart cart_${cart}`} id={`cart_${cart}`}>
        <img src= {img_reviews[cart]} alt="Sacs" />
        
        <div className="sub_cart">
          <div className="B_L">
            <div className="B_F"></div>
          </div>
          <Reviews_unit_title key={cart} cart={cart} />
          <br />
          <p>
            <i>
            {Paragraphe_Reviews[cart]}
              <br />
              <br />
              <span className="name_reviews">{name_reviews[cart]}</span>
            </i>
          </p>
        </div>
      </div>) ; 
}

function Reviews_unit_title ({cart}) {
    return (
        <h3>
            {Title_Reviews[cart]} <br />⭐⭐⭐⭐⭐
          </h3>
    ); 
}



function Reviews() {
    const [cart , setCart] = useState(0);
    const next = ()=> {
        setCart((cart + 1)%4);
    }
    const previous = ()=> {
        setCart((cart + 3)%4);
    }
    
    console.log(cart);
    return (
      <div className="review_principale container-fluid">
        <div className="reviews_title">
          <h1>Ce que nos clients disent de nous</h1>
        </div>
        <div className="reviews_body">
          <button className="btn-review btn-review-gauche prevBtn" id="prevBtn"  onClick={previous}>
            <img src="../public/landingPage/assets/fleche_bleu_1.svg" alt="Flèche gauche" />
          </button>
           <Reviews_unit key={cart} cart={cart}></Reviews_unit>
          <button className="btn-review btn-review-droite nextBtn" id="nextBtn" onClick={next}>
            <img src="../public/landingPage/assets/fleche_bleu_2.svg" alt="Flèche droite" />
          </button>
        </div>
        <div className="chauveuchement" style={{ height: '100px' }}></div>
      </div>
    );
  }

  export default Reviews; 
  
