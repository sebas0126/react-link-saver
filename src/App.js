import React from 'react';
import './App.css';

// Components
import SearchBox from './components/SearchBox';
import Preview from './components/Preview';
import FavoriteCard from './components/FavoriteCard'

// Services
import { getPreview } from './services/urlImage'
import { getData } from './services/urlData';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      url: null,
      favorites: [],
      website: {
        preview: '',
        title: '',
        description: ''
      }
    };
    this.handlePreviewClick = this.handlePreviewClick.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
  }

  handleUrlChange(e) {
    const url = e.target.value;
    this.setState({
      url
    })
  }

  handlePreviewClick(e) {
    const preview = getPreview(this.state.url)
    const data = getData(this.state.url)
    Promise.all([preview, data]).then(data => {
      const { title, description } = data[1];
      this.setState({
        website: {
          preview: data[0],
          title: title,
          description: description
        }
      })
    })
  }

  handleStarClick(e){
    this.setState({
      favorites: [...this.state.favorites, e]
    })
  }

  render() {
    return <React.Fragment>
      <header>
        <section id="search">
          <SearchBox handleUrlChange={this.handleUrlChange} handlePreviewClick={this.handlePreviewClick} />
        </section>
      </header>
      <main>
        {this.state.website.preview ? <Preview {...this.state.website} selectFavorite={this.handleStarClick} /> : null}
        <FavoriteCard {...this.state.website} />
      </main>
    </React.Fragment>
  }
}

export default App;
