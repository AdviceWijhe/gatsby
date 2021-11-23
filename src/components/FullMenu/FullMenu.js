import React from "react"
import Navigation from "../Navigation/Navigation"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { useTopMenuQuery } from "../../hooks/useTopMenuQuery"

// Import CSS
import "./FullMenu.scss"

const FullMenu = props => {
  var { wpMenu } = useMenuQuery()
  var { topMenu } = useTopMenuQuery()

  return (
    <section className={`fullMenu bg-primary ${props.toggle}`}>
      <div className="container">
        <Navigation
          menu={wpMenu.menuItems.nodes}
          menuName={wpMenu.name}
        ></Navigation>
        <Navigation
          menu={topMenu.menuItems.nodes}
          menuName={topMenu.name}
        ></Navigation>
      </div>
    </section>
  )
}

export default FullMenu
