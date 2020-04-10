import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig = {} } = getConfig() || {};
const baseUrl = publicRuntimeConfig.baseUrl || process.env.BASE_URL;

const Header = () => (
  <header id="header" className="siteHeader" aria-label="Credits">
    <a href={`${baseUrl}`}>(-bs)</a>
    <Link href={`${baseUrl}/faq`}><a className="faq-link">FAQ</a></Link>
  </header>
)

export default Header
