import React from 'react'

import CookieConsent, {Cookies} from "react-cookie-consent";
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'

import './CookieBanner.scss'


const CookieBanner = () => {
  const location = useLocation()
  return(
    <>
      <CookieConsent
                location="bottom"
                buttonText="Accepteren"
                declineButtonText="Weigeren"
                cookieName="gatsby-gdpr-google-tagmanager"
                enableDeclineButton flipButtons
                onAccept={
                  () => {Cookies.set("gatsby-gdpr-google-tagmanager", true );
                Cookies.set("gatsby-gdpr-hotjar", true );
                  initializeAndTrack(location);
                }
                  
                }
                >
      Deze website maakt gebruik van cookies om het gebruik te verbeteren.
      </CookieConsent>
    </>
  )
}

export default CookieBanner