import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useState } from "react"
import { FaBars } from "react-icons/fa"

import { Container } from "./container"
import { Logo } from "./logo"

import "./header.css"

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const headerEl = useRef()
  if (typeof window !== `undefined`) {
    let prevScrollPosition = window.pageYOffset
    window.addEventListener("scroll", () => {
      const curScrollPosition = window.pageYOffset
      const difference = prevScrollPosition - curScrollPosition
      const { current } = headerEl
      setMobileNav(false)
      if (curScrollPosition > 100) {
        current.classList.add("compaq")
      } else {
        current.classList.remove("compaq")
      }
      if (difference < 0) {
        current.classList.add("hide")
      } else {
        current.classList.remove("hide")
      }
      prevScrollPosition = curScrollPosition
    })
  }

  const handleScroll = e => {
    e.preventDefault()
    const hash = e.target.hash
    const el = document.querySelector(hash)
    const offsetTop = el.offsetTop
    setMobileNav(false)
    if (typeof window !== `undefined`) {
      window.scrollTo({
        top: offsetTop,
        left: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <header ref={headerEl}>
      <Container padding="25px 25px">
        <div className="header">
          <div className="logo">
            <h1>
              <Link to="/" style={{color: "#00cf5d"}}
>
                <Logo />
              </Link>
            </h1>
          </div>
          <div onClick={() => setMobileNav(!mobileNav)} className="mobile-nav">
            <FaBars />
          </div>
          <ul className={`menubar ${mobileNav ? "mobilenav-activate" : ""}`}>
            <li>
              <a onClick={handleScroll} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={handleScroll} href="#skill">
                Skills
              </a>
            </li>
            <li>
              <a onClick={handleScroll} href="#portfolio">
                Projects
              </a>
            </li>
            <li>
              <a onClick={handleScroll} href="#contact">
                Contact
              </a>
            </li>
            <li>
              {/* <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://hashnode.com/@Balkishan"
              >
                Blog
              </a> */}
            </li>
            <li>
              <a
                className="btn-download"
                target="__blank"
                rel="noopener noreferrer"
                // href="https://github.com/mm-asraf/portfoliocheck/raw/master/zonayed.me-master/src/data/file/resume.pdf"
                href="https://drive.google.com/file/d/1xD7eq2IxvbC2lPJcoxPyrZa-utOOcv1L/view?usp=sharing"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
