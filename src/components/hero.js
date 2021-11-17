import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"
import { useHeroQuery } from "../hooks/useHeroQuery"
import parse from "html-react-parser"

const Hero = props => {
  const { wpPage } = useHeroQuery(props.pageID)

  var background = wpPage.homepage.blockHero.image.sourceUrl

  var sectionStyle = {
    backgroundImage: `url(${background})`,
  }

  return (
    <div className="hero">
      <div className="hero__images" style={sectionStyle}></div>
      <div className="container mx-auto">
        <h1 className="text-7xl">{wpPage.homepage.blockHero.title}</h1>
        {wpPage.homepage.blockHero.content && (
          <div>{parse(wpPage.homepage.blockHero.content)}</div>
        )}{" "}
        <Link to={"/contact"}>
          <Button
            className="flex items-center justify-center rounded-md bg-black text-white"
            type="submit"
          >
            Dit is een button
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
