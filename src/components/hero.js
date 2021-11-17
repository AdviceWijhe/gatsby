import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"
import { useHeroQuery } from "../hooks/useHeroQuery"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

const Hero = props => {
  const { wpPage } = useHeroQuery(props.pageID)

  var background = wpPage.homepage.blockHero.image.sourceUrl

  var sectionStyle = {
    backgroundImage: `url(${background})`,
  }
  
  console.log(props.image);

  return (
    <div className="hero">
      <div className="container mx-auto">
        <h4 className="text-xl md:text-3xl font-medium text-secondary mb-3">{props.subtitle}</h4>
        <h1 className="text-4xl md:text-7xl font-black mb-10">{props.title}</h1>
    
        <GatsbyImage
              image={props.image}
              alt="image"
              style={{ marginBottom: 50 }}
              className="hero__image"
            />

        {props.content && (
          <div>{parse(props.content)}</div>
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
