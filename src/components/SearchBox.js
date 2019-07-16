import React from 'react'

function SearchBox(props) {

  return <React.Fragment>
    <div>
      <label htmlFor="search-box">Page URL:</label>
      &nbsp;
    <input id="search-box" type="text" onChange={props.handleUrlChange}></input>
      &nbsp;
    <button type="button" onClick={props.handlePreviewClick}>Preview</button>
    </div>
  </React.Fragment>
}

export default SearchBox