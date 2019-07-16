import React from 'react'

function Preview(props) {
  return <React.Fragment>
    <section id="preview">
      <h2>{props.title}</h2>
      <img src={props.preview} alt="webpage screenshot"></img>
      <p>{props.description}</p>
      <i onClick={() => props.selectFavorite({preview: props.preview, url: props.url})} className="material-icons star fill">{props.favorite ? 'star' : 'star_border'}</i>
    </section>
  </React.Fragment>
}

export default Preview