// Import CSS
import "./FullMenu.scss"

import Navigation from "../Navigation/Navigation"
import React from "react"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { useTopMenuQuery } from "../../hooks/useTopMenuQuery"

const FullMenu = (props) => {
  var { wpMenu } = useMenuQuery()
  var { topMenu } = useTopMenuQuery()

  return (
    <section className={`fullMenu bg-primary ${props.toggle} py-0`}>
      <div className="container">
        <Navigation
          menu={wpMenu.menuItems.nodes}
          menuName={wpMenu.name}
          stateChanger={props.stateChanger}
        ></Navigation>
        <Navigation
          menu={topMenu.menuItems.nodes}
          menuName={topMenu.name}
          stateChanger={props.stateChanger}
        ></Navigation>
      </div>
    </section>
  )
}

export default FullMenu
