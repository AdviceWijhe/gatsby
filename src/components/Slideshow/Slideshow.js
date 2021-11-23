import React from "react"
// import Navigation from "../Navigation/Navigation"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import CaseItem from "./views/case"
import KernItem from "./views/kernwaarde"
import TeamItem from "./views/team"

// Import CSS
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Slideshow.scss"

const Slideshow = props => {
  console.log(props.layout)

  function getLayout(post) {
    if (props.layout === "CaseItem") {
      return <CaseItem item={post}></CaseItem>
    } else if (props.layout === "KernItem") {
      return <KernItem item={post}></KernItem>
    } else if (props.layout === "TeamItem") {
      return <TeamItem item={post}></TeamItem>
    }
  }

  var rand = Math.floor(Math.random() * 100)
  return (
    <section className={`slideshow ${props.layout}`}>
      <div className="">
        {props.title && (
          <h2 className="slideshow__title text-2xl px-11 my-8 font-bold">
            {props.title}
          </h2>
        )}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={props.spaceBetween}
          slidesPerView={props.spv}
          centeredSlides={true}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          loop={true}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className={`swiper-${rand}`}
          // breakpoints={{
          //   // when window width is <= 999px
          //   768: {
          //     slidesPerView: 2,
          //     spaceBetweenSlides: 50,
          //   },

          //   1366: {
          //     slidesPerView: 2.5,
          //     spaceBetweenSlides: 50,
          //   },
          // }}
        >
          {" "}
          {props.items &&
            props.items.map(post => {
              return <SwiperSlide key={post.id}>{getLayout(post)}</SwiperSlide>
            })}{" "}
        </Swiper>
        {props.layout === "KernItem" && (
          <div className="triangle triangle-arrow triangle-bottom">
            <i className="fal fa-long-arrow-down"></i>
          </div>
        )}
      </div>
    </section>
  )
}

export default Slideshow
