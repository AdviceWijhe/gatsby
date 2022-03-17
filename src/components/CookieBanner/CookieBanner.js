import React from 'react'
import CookieConsent, {Cookies} from "react-cookie-consent";
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import cookieImage from "../../images/cookie_rotated.png"

import './CookieBanner.scss'


const CookieBanner = () => {
  const location = useLocation()
  return(
    <>
      <CookieConsent
                location="bottom"
                buttonText="Accepteren"
                declineButtonText="Weigeren"
                disableStyles="true"
                cookieName="gatsby-gdpr-google-tagmanager"
                enableDeclineButton flipButtons
                onAccept={
                  () => {Cookies.set("gatsby-gdpr-google-tagmanager", true );
                Cookies.set("gatsby-gdpr-hotjar", true );
                  initializeAndTrack(location);
                }
                  
                }
                >
                  <img src={cookieImage} alt="cookie" />
      <h4>Cookie Control</h4>
<p>Wij proberen natuurlijk ook impact te
creëren met een supersnelle website en goed
werkende diensten! Daarom maken wij gebruik van
cookies. Het plaatsen van die dikmakers doen we
natuurlijk niet zonder jouw toestemming! Mocht je
nou meer willen weten zonder blindelings op `Accepteren` te
klikken (die laatste snappen wij ook hoor…), lees dan
hier onze Privacyverklaring.</p>
      </CookieConsent>
    </>
  )
}

export default CookieBanner