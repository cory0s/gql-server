import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries.js';


class BookList extends Component{
  displayBooks(){
    let loading = this.props.data.loading;
    if(loading){
      return(<div>Loading Books...</div>)
    } else {
      return this.props.data.books.map(book => {
        return(<li key={book._id}>{book.name}</li>)
      })
    }
  }
    render(){
      console.log(this.props);
        return(
          <div>
            <ul id="book-list">
              {this.displayBooks()}
            </ul>
          </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);