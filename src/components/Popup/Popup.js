// Import CSS
// import "./Popup.scss"

import React, { useState }  from "react"

// import Navigation from "../Navigation/Navigation"
import Logo from "../../images/new-logo.svg"

const Popup = props => {
  

  const adres = props.data.socials.adres;
  const postcode = props.data.socials.postcode;
  const email = props.data.socials.email;
  const telefoon = props.data.socials.telefoon;

  const [openPopup, setOpenPopup] = useState(true)

  const togglePopup = () => {
    setOpenPopup(!openPopup)
  }

  const closePopup = () => {
    setOpenPopup(false);
  }

  // useEffect(() => {
  //   var tween = KUTE.to('#phone',
  //   {path: '#envelope'},
  //   {
  //     easing: 'easingCubicInOut', 
  //     yoyo: true, repeat: 300, duration: 2500,repeatDelay: 1000,
  //   }
  //   ).start();
  // });

  


  let classes = "open";
  
  if (openPopup) {
    classes = "open";
  } else {
    classes = "";
  }


  console.log(adres);

  return (
    <>
      <div className="popup">
   
        <div className={`popup__content bg-sandy  ${classes}`}>
          <img src={Logo} alt="Advice Logo"/>
          <span className="close" onClick={closePopup}><i class="fal fa-times"></i></span>
          <div className={`popup__content__inner`}>
            <h3 class="mb-3">Binnenkort live!</h3>

            
            <p class="mb-8">Wij zijn druk bezig met onze nieuwe website. Binnenkort vertellen we je hier meer over. Houd onze website en socials goed in de gaten!</p>

            <a href="/" class="btn btn-marketing"><span title="Ga naar home" class="title"></span>

<span class="arrow_circle">
  <span class="arrow">
    <svg id="arrow_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18.6 18">

  <path class="cls-1" d="M8.5,3.8L1.4,10.9l-1.4-1.4L9.5,0l9.2,9.2-1.4,1.4-6.8-6.8v14.2h-2V3.8Z"></path>
</svg>
<svg id="arrow_2" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18.6 18">

  <path class="cls-1" d="M8.5,3.8L1.4,10.9l-1.4-1.4L9.5,0l9.2,9.2-1.4,1.4-6.8-6.8v14.2h-2V3.8Z"></path>
</svg>
  </span>
</span>
                  </a>
          </div>
        </div>


        
      </div>
    </>
  )
}

export default Popup
