import './styles.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section>
          <h3 className='footer__title'>Author</h3>
          <a className='footer__link' href="https://github.com/muhammad-ahmed02">GitHub Profile</a>
        </section>
        <section>
          <h3 className='footer__title'>Github</h3>
          <a className='footer__link' href="https://github.com/muhammad-ahmed02/GUI">GitHub Repo</a>
        </section>
        <section>
          <h3 className='footer__title'>Contribute</h3>
          <a className='footer__link' href="https://github.com/muhammad-ahmed02/GUI/blob/main/CONTRIBUTING.md">Contribute link</a>
        </section>
      </div>
    </footer>
  )
}

export default Footer