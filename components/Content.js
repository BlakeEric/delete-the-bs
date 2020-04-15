const Content = (props) => (
  <div className="searchResults">
      {props.content.image && <img src={props.content.image} />}
      <h1 className="title">{props.content.title}</h1>
      <h3 className="subTitle">{props.content.description}</h3>
      <p className="pageContent" dangerouslySetInnerHTML={{ __html: props.content.text.replace(/\n/g, '<br />')}} />
      <button className="button-light endcontent-currentUrl-resetButton" onClick={props.reset}>&larr; Start Over</button>
  </div>
)

export default Content
