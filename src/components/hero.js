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

  console.log(props.slideshow)

  return (
    <div className="hero">
      <div className="container mx-auto">
        <h4 className="text-xl md:text-3xl font-medium text-secondary mb-3">
          {props.subtitle}
        </h4>
        <h1 className="text-4xl md:text-7xl font-black mb-10">{props.title}</h1>
        <GatsbyImage
          image={props.image}
          alt="image"
          style={{ marginBottom: 50 }}
          className="hero__image"
        />
        <div className="hero__slideshow">
          {props.slideshow &&
            props.slideshow.map(post => {
              const title = post.title

              return (
                <div className="hero__slideshow__item">
                  <div className="her__slideshow__item--inner">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    {parse(post.excerpt)}
                  </div>
                </div>
              )
            })}{" "}
        </div>
        {props.content && <div>{parse(props.content)}</div>}{" "}
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
