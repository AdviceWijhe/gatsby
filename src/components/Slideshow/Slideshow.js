import React from "react"
// import Navigation from "../Navigation/Navigation"
import Flickity from "flickity"
import CaseItem from "./views/case"

// Import CSS
import "./Slideshow.scss"

const Slideshow = props => {
  class Carousel extends React.Component {
    componentDidMount = () => {
      Flickity.createMethods.push("_createPrevNextCells")
      Flickity.prototype._createPrevNextCells = function () {
        this.on("select", this.setPrevNextCells)
      }

      Flickity.prototype.setPrevNextCells = function () {
        // remove classes
        changeSlideClasses(this.previousSlide, "remove", "is-previous")
        changeSlideClasses(this.nextSlide, "remove", "is-next")
        // set slides
        this.previousSlide = this.slides[this.selectedIndex - 1]
        this.nextSlide = this.slides[this.selectedIndex + 1]
        // add classes
        changeSlideClasses(this.previousSlide, "add", "is-previous")
        changeSlideClasses(this.nextSlide, "add", "is-next")
      }

      function changeSlideClasses(slide, method, className) {
        if (!slide) {
          return
        }
        slide.getCellElements().forEach(function (cellElem) {
          cellElem.classList[method](className)
        })
      }

      var elem = document.querySelector(".carousel")
      new Flickity(elem, {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        contain: true,
      })
    }

    render() {
      return (
        <div class="carousel">
          {props.items.map(post => {
            return <CaseItem key={post.id} item={post} />
          })}{" "}
        </div>
      )
    }
  }

  return (
    <section className="slideshow">
      <div className="md:container">
        <Carousel />
      </div>
    </section>
  )
}

export default Slideshow
