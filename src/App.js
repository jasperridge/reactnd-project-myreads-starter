import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Shelf from './Shelf'
import SearchBooks from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <Shelf books={this.state.books} />}
        />
        <Route exact path="/search" render={() => <SearchBooks />} />
      </div>
    )
  }
}

export default BooksApp
