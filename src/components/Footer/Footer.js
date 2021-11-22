import React from "react"
import { Link } from "gatsby"
import { useFooterMenuQuery } from "../../hooks/useFooterMenuQuery"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Footer.scss"

const Footer = () => {
  var menu = useFooterMenuQuery()
  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-5">
              Samen aan de slag?
            </h3>
            <p>
              Heb je een project of een samenwerking in gedachten? Of wil jij
              aan de slag met je merk? Laat dan van je horen!
            </p>
          </div>
          <div className="bg-black text-white -mr-8 p-8 footer__contactInfo">
            <div className="triangle triangle-arrow">
              <i class="fal fa-long-arrow-down"></i>
            </div>
            <h3 className="text-2xl font-bold">
              Contact
              <br />
              gegevens
            </h3>
            <div className="footer__info my-7">
              <div className="flex justify-between">
                <span className="font-medium">
                  <span className="font-light">T</span> 0570 52 11 52
                </span>
                <span className="font-medium">
                  <span className="font-light">E</span> info@advice.nl
                </span>
              </div>
            </div>
            <div className="footer__menu">
              <ul>
                {menu.wpMenu.menuItems.nodes &&
                  menu.wpMenu.menuItems.nodes.map(post => {
                    return (
                      <li key={post.id}>
                        <Link to={post.url}>{post.label}</Link>
                      </li>
                    )
                  })}{" "}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center py-9 pr-14">
          <i class="fal fa-long-arrow-left text-3xl text-primary mr-10"></i>
          <p className="font-bold m-0">
            Op de hoogte blijven van ons bureau? Volg onze socials.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
