import React from 'react'

function FavoriteCard(props) {
  return <article className="favorite">
    <img src={props.preview} alt="" />
    <a>{props.url}</a>
  </article>
}

export default FavoriteCard