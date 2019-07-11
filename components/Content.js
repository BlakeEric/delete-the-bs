// This component will show the default content on page load,
// and after a user submits the form show either the formatted content,
// or an error (with a fun message :))

const Content = (props) => (
  <main role="main" id="main">

      {props.content ?
        <div>
          <div className="currentUrl-wrap">
            <span className="currentUrl">{props.url}</span>
            <button className="currentUrl-resetButton" onClick={props.reset}>Clear url</button>
          </div>
          <img src={props.content.image} />
          <h1 className="title">{props.content.title}</h1>
          <h3 className="subTitle">{props.content.description}</h3>
          <p className="pageContent" dangerouslySetInnerHTML={{ __html: props.content.text.replace(/\n/g, '<br />')}} />
          <button className="endcontent-currentUrl-resetButton" onClick={props.reset}>&larr; Start Over</button>
        </div>
      :
        <div>
          <h1 className="title">Real Simple Web</h1>
          <h3 className="subTitle">
            View the content of any website distraction-free
            (without ads, trackers, or any other bullshit).
          </h3>
        </div>
      }

  </main>
)

export default Content
