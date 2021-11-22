import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import Flickity from "react-flickity-component"

const Hero = props => {
  const flickityOptions = {
    initialIndex: 1,
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: false,
    autoPlay: true,
    fade: true,
  }

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
        <Flickity
          className={"hero__slideshow"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {props.slideshow &&
            props.slideshow.map(post => {
              const title = post.title

              return (
                <div
                  key={title}
                  className="hero__slideshow__item carousel-cell"
                >
                  <div className="hero__slideshow__item--inner">
                    <h2 className="hero__slideshow__item--title text-2xl font-bold">
                      {title}
                    </h2>
                    <div className="hero__slideshow__item--excerpt font-light">
                      {parse(post.excerpt)}
                    </div>
                    <Link to={post.uri} className="block mt-7 font-light">
                      Lees meer
                    </Link>
                  </div>
                </div>
              )
            })}{" "}
        </Flickity>
        {props.content && (
          <div className="hero__content">{parse(props.content)}</div>
        )}{" "}
        {/* <Link to={"/contact"}>
          <Button
            className="flex items-center justify-center rounded-md bg-black text-white"
            type="submit"
          >
            Dit is een button
          </Button>
        </Link> */}
      </div>
    </div>
  )
}

export default Hero
