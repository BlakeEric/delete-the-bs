// Move this to stati css file

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

    section, header, footer, div, aside {
      overflow: auto;
    }

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
    .pageInner {
      max-width: 800px;
      display: block;
      font-family: Georgia, Cambria, "Times New Roman", Times, serif;
      max-width: 700px;
      margin: auto;
      line-height: 1.5;
      min-height: 70vh;
      display: flex;
      justify-content: center;
      flex-direction: column;
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
      font-size: 20px;
      line-height: 1.6;
    }
    .currentUrl-wrap {
      overflow: visible;
      margin: 2rem 0 1rem 0;
      position: relative;
    }
    .currentUrl-resetButton {
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
    }
    #searchWrapper {
      position: relative;
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
    }
    #searchWrapper button:disabled {
      border: 1px solid rgb(153,153,153);
      background: white;
      color: lightgray;
    }
  `}</style>
)

export default AppStyles
