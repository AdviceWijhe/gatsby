import React from "react"
import { Link } from "gatsby"
import { useFooterMenuQuery } from "../../hooks/useFooterMenuQuery"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Footer.scss"

const Footer = (props) => {
  var menu = useFooterMenuQuery()
  var options = props.options

  function getFooterColor() {
    var footerColor = '';
    if(options != null) {
      footerColor = options.backgroundColorTop;
    }

    return footerColor
  }
  return (
    <section className={`footer`}>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className={`py-8 sm:px-5  lg:py-10 lg:pr-20 lg:pl-10 lg:border-t lg:border-b border-black ${getFooterColor()}`}>
          <h3 className="text-2xl lg:text-4xl font-bold text-primary mb-5">
            Samen aan de slag?
          </h3>
          <p>
            Heb je een project of een samenwerking in gedachten? Of wil jij aan
            de slag met je merk? Laat dan van je horen!
          </p>
        </div>
        <div className="bg-black text-white p-8 lg:px-20 footer__contactInfo">
          <div className="triangle triangle-arrow">
            <img src={`/icons/Pijltje_white_Lang.svg`} className="arrow" alt="Pijl wit lang" />
          </div>
          <h3 className="text-2xl lg:text-4xl font-bold">
            Contact
            <br className="lg:hidden" />
            gegevens
          </h3>
          <div className="footer__info my-7">
            <div className="flex flex-col lg:flex-row justify-between">
              <span className="font-medium md:w-1/2">
                <a href="tel:0570521152" className={`text-white`}><span className="font-light">T</span> 0570 52 11 52</a>
              </span>
              <span className="font-medium md:w-1/2">
                <a  className={`text-white`} href="mailto:contact@advice.nl"><span className="font-light">E</span> contact@advice.nl</a>
              </span>
            </div>
          </div>
          <div className="footer__menu">
            <ul className={`grid lg:grid-cols-2`}>
              {menu.wpMenu.menuItems.nodes &&
                menu.wpMenu.menuItems.nodes.map(post => {
                  return (
                    <li key={post.id}>
                      <Link className={`text-white`} to={post.url}>{post.label}</Link>
                    </li>
                  )
                })}{" "}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center py-9 pr-20">
        <img src={`/icons/Pijltje_red_Lang.svg`} className="arrow arrow-small mr-5" alt="Pijl wit lang" />
        <p className="font-bold m-0">
          Op de hoogte blijven van ons bureau? Volg onze socials.
        </p>
      </div>
    </section>
  )
}

export default Footer
