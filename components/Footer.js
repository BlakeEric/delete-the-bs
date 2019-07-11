import css from 'styled-jsx/css'

const Footer = () => (
  <footer id="footer" className="siteFooter" role="contentinfo" aria-label="Credits">
    <hr className="global-divider"/>
    <p>
      <span>&copy; Blake Lundquist 2019</span>
      <a href="https://gitlab.com/BlakeEric/portfolio" rel="nofollow" target="_blank" >View source code for this website</a>
    </p>
    <style jsx>{styles}</style>
  </footer>
)

export default Footer


const styles = css`
  .siteFooter {
    overflow: auto;
    padding-left: .5rem;
    padding-right: .5rem;
    color: rgb(153, 153, 153);
    font-size: 16px;
    max-width: 1000px;
    display: block;
    margin: auto;
  }
  .siteFooter p {
    overflow: auto;
  }
  .siteFooter span {
    float: left;
  }
  .siteFooter a {
    font-size: .875rem;
    color: rgb(153, 153, 153);
    clear: both;
    float: left;
    display: inline-block;
    margin-top: .5rem;
  }
  @media screen and (min-width: 600px) {
    .siteFooter a {
      margin-top: 0;
      clear: none;
      float: right;
    }
  }
  @media screen and (min-width: 600px) {
    .siteFooter {
      padding-right: 1rem;
      padding-left: 1rem;
    }
  }

`
