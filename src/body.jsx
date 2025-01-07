import React from "react";
import "../public/LandingPage/css/style.css"
import { useState } from "react";
import { FaStar } from "react-icons/fa6";




function LandingPage() {
    return (
        <>
           <Hero></Hero>
           <Avantages/>
           <Etapes/>
           <Reviews></Reviews>
           <EcoPub/>
        </>
    );
}




function Hero() {
    return (
        <div className="hero">
            <div className="hero_g">
                <div className="hero_img">
                    <img src="/landingPage/assets/hero_main.svg" alt="Hero Main" />
                </div>
                <div className="hero_main">
                    <div className="hero_text">
                        <h1>Facile et économique.<br />La livraison qui vous relie à votre famille au Maroc</h1>
                        <p>Envoyez (presque) tout de la France vers le Maroc grâce à des trajets déjà prévus. Lcolia C’est pratique, abordable et bon pour la planète. Bienvenue chez LColia !</p>
                    </div>
                    <div className="btn_hero">
                        <button className="btn_hero1 btn_hover">
                            <a
                                href="https://lcolia.com/private/exp/announcement/new"
                                style={{ all: "unset", display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}
                            >
                                Expédier un colis
                            </a>
                        </button>
                        <button className="btn_hero2 btn_hover" style={{ backgroundColor: "#fff", color: "#2C2D5B" }}>
                            <a
                                href="https://lcolia.com/signup"
                                style={{ all: "unset", display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}
                            >
                                Rejoignez-nous
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hero_d">
                <img src="../public/landingPage/assets/hero_colis.svg" alt="Hero Colis" />
            </div>
            <div style={{height: "300px", backgroundColor:" #107aca", marginTop: "-20px"}}>

</div>
        </div>
    );
}

function Avantages() {
    return (
      <div className="avantages_p container-fluid">
        <div className="avantages_titre">
          <h1>Avantages</h1>
          <img
            src="../public/landingPage/assets/avantages_livraison.svg"
            alt="Avantages de livraison des colis au Maroc"
          />
        </div>
        <div className="avantages_body">
          <div className="avantage_eco">
            <div className="avantage_img">
              <img src="../public/landingPage/assets/dollar.svg" alt="Symbole économique" />
            </div>
            <h2>Economique</h2>
            <p>
              Réduisez vos frais d’envoi en profitant de trajets déjà planifiés.
              Une solution intelligente pour envoyer vos colis à moindre coût
              tout en respectant votre budget.
            </p>
          </div>
  
          <div className="avantage_rapide">
            <div className="avantage_img">
              <img src="../public/landingPage/assets/rapide.svg" alt="Icône rapide" />
            </div>
            <h2>Rapide</h2>
            <p>
              Bénéficiez d’un service d’envoi optimisé qui s’adapte à vos besoins.
              Grâce à des transporteurs disponibles et des itinéraires prévus, vos
              colis arrivent rapidement à destination.
            </p>
          </div>
  
          <div className="avantage_fiable">
            <div className="avantage_img">
              <img src="../public/landingPage/assets/check.svg" alt="Icône fiable" />
            </div>
            <h2>Fiable</h2>
            <p>
              Confiez vos biens à des transporteurs vérifiés et expérimentés. Avec
              un suivi rigoureux et un transport sécurisé, vos envois sont entre de
              bonnes mains jusqu’au Maroc.
            </p>
          </div>
        </div>
  
        <div
          style={{ textAlign: 'center', marginTop: '30px' }}
          className="btn_avantages btn_hero"
          id="btn_avantages"
        >
          <button
            className="btn_avantages_1 btn_hero1 btn_hover"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.062)',
              color: '#2C2D5B',
              height: '50px',
              border: '2px solid #232324',
            }}
          >
            <a
              href="https://lcolia.com/signin"
              style={{
                all: 'unset',
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Rejoignez-nous
            </a>
          </button>
          <button
            className="btn_avantages_2 btn_hero2 btn_hover"
            style={{
              backgroundColor: '#2C2D5B',
              color: 'white',
              height: '50px',
            }}
          >
            <a
              href="https://lcolia.com/signin"
              style={{
                all: 'unset',
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Expédier un colis
            </a>
          </button>
        </div>
      </div>
    );
  }


function Etapes (){
    return (
        <div className="step_principale container-fluid">


  <div className="step_title"> 
    <img src="../public/landingPage/assets/step_title.svg" className="img_title "/>
    <h1>Comment ca marche ?</h1>
  </div>
  <div className="step_1 step">
    <div className="step1_title  step_title">
      <img src="../public/landingPage/assets/step_1.svg"   />
      <h2>Publiez votre annonce</h2>
    </div>
    <div className="step1_texte  ">
      <p>Entrez les détails de votre envoi, tels que l'origine, la destination, le poids et la date. Notre application vous propose une liste de transporteurs disponibles correspondant à vos besoins.</p>
    </div>
  </div>
  <div className="vecteur_image">
    <img src="../public/landingPage/assets/vecteur_1.svg "/>
  </div>
  <div className="step_2 step">
    <div className="step2_title step_title">
      <img src="../public/landingPage/assets/step_2.svg "/>
      <h2>Comparez les propositions</h2>
    </div>
    <div className="step2_texte  ">
      <p>Consultez les profils des transporteurs, leurs évaluations et les tarifs proposés. Sélectionnez le transporteur qui répond le mieux à vos critères en quelques clics.</p>
    </div>
  </div>
  <div className="vecteur_image">
    <img src="../public/landingPage/assets/vecteur1.svg "/>
  </div>
  <div className="step_3 step">
    <div className="step3_title step_title">
      <img src="../public/landingPage/assets/step_3.svg" />
      <h2>Suivez votre colis</h2>
    </div>
    <div className="step3_texte ">
      <p>Après avoir confirmé votre réservation, suivez votre envoi via l'application. Recevez des notifications en temps réel et profitez d'une livraison sécurisée entre le Maroc et la France.</p>
    </div>
  </div>
  <div className="chauveuchement" style={{height: "100px"}}>

  </div>
</div>
    );
}




function EcoPub(){
    return(
        <>
         <div className="ecologie_principale">

<div className="ecologie_titre">
  <img src="../public/landingPage/assets/ecologie.svg" alt=""></img>
  <h2>Livraison Ecologique</h2>
</div>
<div className="ecologie_body">
  <div className="barre_verticale"> 

  </div>
  <div className="ecologie_paragraphes">
  <p> 🌱 Transport optimisé, planète préservée : En mutualisant les trajets, nous réduisons les émissions de CO₂ pour un transport plus responsable.</p><br/>
  <p>🚛 Des véhicules mieux remplis, moins de pollution : Chaque livraison contribue à diminuer les trajets à vide et à maximiser l'efficacité énergétique.</p><br/>
  <p>🌍 Choisissez le transport malin et écolo : Adoptez une solution qui allie rapidité, économie et respect de l'environnement.</p><br/>
  </div>

</div>
</div>


<div className="pub_principale">
<div className="pub_title " id="pub_title">
  <h1>Consultez les dernières annonces publiées</h1>
</div>
<div className="pub_body">
  
  <div className="pub_unit ">
    <img src="../public/landingPage/assets/grand_meuble.png"/>
    <div className="pub_unit_body">
      <h5>sacs</h5>
      <div className="pub_ville_g">
        <img src="../public/landingPage/assets/inter_ville.svg"/>
        <div className="pub_ville">
          <h6>marseille</h6>
          <h6>Paris</h6>
        </div>
      </div>
    </div>
    <div className="colis_taille">
      <h6>L</h6>
    </div>
    
  </div>


  <div className="pub_unit pub_laterale">
    <img src="../public/landingPage/assets/petit_meuble.png"/>
    <div className="pub_unit_body">
      <h5>sacs</h5>
      <div className="pub_ville_g">
        <img src="../public/landingPage/assets/inter_ville.svg"/>
        <div className="pub_ville">
          <h6>Agadir</h6>
          <h6>Paris</h6>
        </div>
      </div>
    </div>
    <div className="colis_taille">
      <h6>L</h6>
    </div>
    
  </div>
  <div className="pub_unit">
    <img src="../public/landingPage/assets/sacs_pub.png"/>
    <div className="pub_unit_body">
      <h5>chaise avec </h5>
      <div className="pub_ville_g">
        <img src="../public/landingPage/assets/inter_ville.svg"/>
        <div className="pub_ville">
          <h6>Châtillon-sur-Seine , 
            Ma</h6>
          <h6>Châtillon-sur-Seine ,FR</h6>
        </div>
      </div>
    </div>
    <div className="colis_taille">
      <h6>L</h6>
    </div>
    
  </div>
  <div className="pub_unit pub_laterale">
    <img src="../public/landingPage/assets/sacs_pub.png"/>
    <div className="pub_unit_body">
      <h5>sacs</h5>
      <div className="pub_ville_g">
        <img src="../public/landingPage/assets/inter_ville.svg"/>
        <div className="pub_ville">
          <h6>guadalakhara</h6>
          <h6>Paris</h6>
        </div>
      </div>
    </div>
    <div className="colis_taille">
      <h6>xxxl</h6>
    </div>
    
  </div>
  
  
</div>
<div className="btn_pub">
  <button > <a href="https://lcolia.com/search-announcements" style={{all: "unset", display: "flex", width: "100%",height: "100%",  alignItems:" center",justifyContent:" center"}}>Voir plus d'annonces</a></button>
</div>
</div>
        </>
    );
}



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
          <div style={{height:"300px"}}>
          <p>
            <i>
            {Paragraphe_Reviews[cart]}
              <br />
              <br />
              <span className="name_reviews">{name_reviews[cart]}</span>
            </i>
          </p>
          </div>
        </div>
      </div>) ; 
}

function Reviews_unit_title ({cart}) {
    return (
        <h3>
            {Title_Reviews[cart]} <br /><FaStar  className="StarReviews"/><FaStar  className="StarReviews"/><FaStar  className="StarReviews"/><FaStar className="StarReviews" /><FaStar className="StarReviews" />
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

   
    
    if(window.innerWidth<849) {
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
    } else if (window.innerWidth<1300 && window.innerWidth>850){
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
           <Reviews_unit key={(cart + 1)%4} cart={(cart + 1)%4}></Reviews_unit>
          <button className="btn-review btn-review-droite nextBtn" id="nextBtn" onClick={next}>
            <img src="../public/landingPage/assets/fleche_bleu_2.svg" alt="Flèche droite" />
          </button>
        </div>
        <div className="chauveuchement" style={{ height: '100px' }}></div>
      </div>
    );

      
    } else {
      return (
        <div className="review_principale container-fluid">
        <div className="reviews_title">
          <h1>Ce que nos clients disent de nous</h1>
        </div>
        <div className="reviews_body" >
          <button className="btn-review btn-review-gauche prevBtn" id="prevBtn"  onClick={previous}>
            <img src="../public/landingPage/assets/fleche_bleu_1.svg" alt="Flèche gauche" />
          </button>
        
           <Reviews_unit key={cart} cart={cart}></Reviews_unit>
           <Reviews_unit key={(cart + 1)%4} cart={(cart + 1)%4}></Reviews_unit>
           <Reviews_unit key={(cart + 2)%4} cart={(cart + 2)%4}></Reviews_unit>
    
          <button className="btn-review btn-review-droite nextBtn" id="nextBtn" onClick={next}>
            <img src="../public/landingPage/assets/fleche_bleu_2.svg" alt="Flèche droite" />
          </button>
        </div>
        <div className="chauveuchement" style={{ height: '100px' }}></div>
      </div>
    );

    
    }
    
  }


  



  
export default LandingPage;
