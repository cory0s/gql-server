import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getAuthorsQuery = gql`
  {
    authors{
      name
    }
  }
`

class AddBook extends Component {

    render(){
        return(
            <form id="add-book">
                <div className="field">
                    <label>Book name:</label>
                    <input type="text"/>
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text"/>
                </div>


                <div className="field">
                    <label>Author name:</label>
                    <select>
                        <option>Select author</option>
                    </select>
                </div>

                <button>Add Book</button>
            </form>
        )
    }
}

export default graphql(getAuthorsQuery)(AddBook);