import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery = gql`
  {
    books{
      name
    }
  }
`

class BookList extends Component{
  displayBooks(){
    let loading = this.props.data.loading;
    if(loading){
      return(<div>Loading Books...</div>)
    } else {
      return this.props.data.books.map(book => {
        return(<li key={book.id}>{book.name}</li>)
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