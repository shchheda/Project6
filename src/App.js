import React from 'react'
import { Link } from 'react-router-dom';
{/* import { Route } from 'react-router-dom'; */}
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
    favoriteOn: false
  }

{/*//Method called by React when the method is created and rendered*/}
componentDidMount () {
   BooksAPI.getAll().then((books) => {
       this.setState({ books: books })
   })
 }

  {/*}// state = {
  //     showSearchPage: false
  // }

// state = {
//   favOn: false
// } */}

shelfChanger=(book, shelf)=> {
  BooksAPI.update(book, shelf);

  BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
  })
}


  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              exact path="/"
              render={() => (
                <MainPage
                  books={this.state.books}
                  shelfChanger={this.shelfChanger}
                />
              )}
            />

            <Route
              exact path="/search"
              render={() => (
                <SearchPage
                  shelfChanger={this.shelfChanger}
                  books={this.state.books}
                />
              )}
            />
          <Switch>
        <Router>
            <div className = "open-search">
              <Link to = '/search'>Add book</Link>
            </div>
      </div>
    )
  }
}

export default BooksApp
