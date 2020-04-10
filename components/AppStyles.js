const AppStyles = () => (
  <style jsx global>{`

    *, *:before, *:after {
      -webkit-box-sizing: border-box !important;
      -moz-box-sizing: border-box !important;
      -ms-box-sizing: border-box !important;
      box-sizing: border-box !important;
    }

    html {
      font-size: 18px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      font-weight: 400;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      max-width: 100vw;
    }

    hr {
      display: block;
      clear: both;
    }

    img {
      max-width: 100%;
    }

    h1, h2, h3 {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      font-weight: 700;
    }

    /* section, header, footer, div, aside {
      overflow: auto;
    } */

    .global-insetContent  {
      max-width: 700px;
      padding-left: .5rem;
      padding-right: .5rem;
      display: block;
      margin: auto;
    }
    .global-hidden {
      display: none;
    }

    hr.global-divider {
      border: none;
      border-top: 1px solid #e5e5e5;
    }
    hr.global-divider.global-divider-inset {
      max-width: 964px;
      margin: auto;
    }
    hr.global-divider.global-divider-inset {
      width: auto;
      margin-right: .5rem;
      margin-left: .5rem;
    }
    @media screen and (min-width: 600px) {
      hr.global-divider.global-divider-inset {
        margin-right: 1rem;
        margin-left: 1rem;
      }
    }
    @media screen and (min-width: 1001px) {
      hr.global-divider.global-divider-inset {
        max-width: 964px;
        margin: auto;
      }
    }
    a {
      color: #1779ba;
    }
    a:hover,
    a:active {
      color: navy;
    }
    figure {
      margin: 0;
    }

    .siteHeader {
      overflow: auto;
      padding-left: .5rem;
      padding-right: .5rem;
      max-width: 1000px;
      display: block;
      margin: auto;
    }
    .siteHeader a {
      color: black;
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
      display: inline-block;
      margin-top: 1rem;
      text-decoration: none;
    }
    .siteHeader a.faq-link {
      margin-left: 2rem;
      font-size: 80%;
      color: gray;
      text-decoration: underline;
    }
    .siteHeader a:focus,
    .siteHeader a:hover {
      color: gray;
    }
    @media screen and (min-width: 600px) {
      .siteHeader {
        padding-right: 1rem;
        padding-left: 1rem;
      }
    }

    .pageInner {
      max-width: 800px;
      display: block;
      max-width: 700px;
      margin: auto;
      padding: 2rem 0;
      line-height: 1.5;
      min-height: 80vh;
    }

    .pageContent {
      font-size: 20px;
      line-height: 1.6;
    }

    .title {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      font-size: 54px;
      margin-bottom: 0;
      margin-top: 1rem;
      line-height: 1.125;
    }

    .subTitle {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      font-weight: 400;
      color: gray;
      margin-top: 1rem;
      font-size: 24px;
      line-height: 1.6;
    }

    .currentUrl-wrap {
      overflow: visible;
      margin: 2rem 0 1rem 0;
      position: relative;
    }

    /* .currentUrl-resetButton {
      position: absolute;
      top: 3px;
      right: -3px;
    }

    .currentUrl {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      display: block;
      word-break: keep-all;
      overflow: hidden;
      color: rgb(118, 118, 118);
    } */
    #searchWrapper {
      position: relative;
      overflow: auto;
    }
    #searchWrapper input {
      display: inline-block;
      float: left;
      width: 80%;
      height: 36px;
      border: 1px solid rgb(153,153,153);
      border-right: none;
      padding-left: .5rem;
      padding-right: .5rem;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    }
    #searchWrapper button {
      display: inline-block;
      float: left;
      width: 20%;
      height: 36px;
      box-shadow: none;
      border: 1px solid #1779ba;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      color: white;
      background: #1779ba;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      cursor: pointer;
    }
    #searchWrapper button:hover,
    #searchWrapper button:focus {
      background-color: #3592d0;
    }
    #searchWrapper button:disabled {
      border: 1px solid rgb(153,153,153);
      background: white;
      color: lightgray;
      cursor: not-allowed;
    }
    .pageInner-header {
      transition: margin 0.3s ease;
    }
    .pageInner-header .pageInner-titleWrap {
      opacity: 1;
      height: auto;
      max-height: 500px;
      overflow: hidden !important;
      transition: all 0.3s ease;
    }
    .pageInner-header.top {
      margin-top: 0;
    }
    .pageInner-header.top .pageInner-titleWrap {
      opacity: 0;
      max-height: 0;
    }

    .loadingText {
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      overflow: auto;
    }

    .loadingText h2 {
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
      text-align: center;
    }
    .loadingText h2:after {
      display: inline-block;
      position: absolute;
      animation: dotty steps(1,end) 1s infinite;
      content: '';
    }

    @keyframes dotty {
        0%   { content: ''; }
        25%  { content: '.'; }
        50%  { content: '..'; }
        75%  { content: '...'; }
        100% { content: ''; }
    }

    .errorMessage {
      margin: 2rem 0 1rem 0;
      overflow: auto;
    }

    button.button-light {
      border: 1px solid gray;
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
      color: gray;
      background: none;
      font-size: 14px;
      padding: .25rem .5rem;
      border-radius: 3px;
      cursor: pointer;
    }

    button.button-light:focus,
    button.button-light:hover {
      color: black;
      border-color: black;
    }
    main {
      padding-top: 1rem;
    }
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
  `}</style>
)

export default AppStyles
