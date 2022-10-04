import { Link } from "react-router-dom"

import './styles.css'
import Footer from "../../components/Footer/Footer"
import { Button } from "@mui/material"

const Home = () => {
  return (
    <>
      <main className="home">
        <header className="home__header">
          <h1 className="home__title">Muhammad GUI</h1>
          <div className="home__details">
            <p>This Reusable GUI is based on an idea to create templates in react for people to use them later in there projects.</p>
            <p>The Reuable GUI is the concept to reduse the development time in react projects. Here we would create some common pages which are mostly used in every other Website.</p>
          </div>
          <div className="home__ctas">
            <Button component='a' className="home__cta" href="https://github.com/muhammad-ahmed02/GUI">GitHub</Button>
            <a className="home__cta" href="https://github.com/muhammad-ahmed02/GUI">Contribute</a>
          </div>
        </header>

        <section className="home__components">
          <h2>Components</h2>
          <ul className="home__list">
            <li>
              <Link to='/login'>
                Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                Register
              </Link>
            </li>
            <li>
              <Link to='/newsletter'>
                Newsletter
              </Link>
            </li>
            <li>
              <Link to='/contact-us-section'>
                Contact us section
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home