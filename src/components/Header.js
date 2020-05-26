import Link from 'next/link'

const Header = () => (
  <header id="header" className="siteHeader" aria-label="Credits">
    <Link href="/"><a>(-bs)</a></Link>
    <Link href="/faq"><a className="faq-link">FAQ</a></Link>
  </header>
)

export default Header
