// Separate libraries, library components, project components, helper functions, styles with a linebreak
// Alpahbetize
import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import Loading from "./Loading";

import { API_URL } from "../../config";
import { handleResponse } from "../../helpers";

import "./Search.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      searchQuery: "",
      loading: false
    };
  }

  //Alphabetize functions
  // Replace binding context with arrow function
  handleChange = event => {
    // Handle fetching data in a separate function
    const fetchData = async (url, searchQuery) => {
      this.setState({ loading: true });
      //Replace promises with async/await syntax
      const response = await fetch(`${url}autocomplete?searchQuery=${searchQuery}`);
      const result = await handleResponse(response);
      this.setState({
        loading: false,
        searchResults: result
      });
    }

    const searchQuery = event.target.value;

    this.setState({ searchQuery });
    //If searchQuery isn't present, don't send request to server
    if (!searchQuery.trim()) {
      return '';
    } else {
      fetchData(API_URL, searchQuery);
    }
  }

  // Replace binding context with arrow functions
  handleRedirect = currencyId => {
    //Clear input value and close autocomplete container,
    //By clearing searchQuery state
    this.setState({
      searchQuery: "",
      searchResult: []
    });

    this.props.history.push(`/currency/${currencyId}`);
  }

  renderSearchResults() {
    const { searchResults, searchQuery, loading } = this.state;

    if (!searchQuery) {
      return "";
    }

    if (searchResults.length > 0) {
      return (
        <div className="Search-result-container">
          {
            // Destructuring the result object
            searchResults.map(({ id, name, symbol }) => (
              //first prop on a first line
              //aplhabetize props
              <div className="Search-result"
                key={ id }
                onClick={ () => this.handleRedirect(id) }
              >
                { name } ({ symbol })
              </div>
            ))
          }
        </div>
      );
    }

    if (!loading) {
      return (
        <div className="Search-result-container">
          <div className="Search-no-result" />
          No results found
        </div>
      );
    }
  }

  render() {
    const { loading, searchQuery } = this.state;
    return (
      //first prop on a first line
      //aplhabetize props
      <div className="Search">
        <span className="Search-icon" />
        <input className="Search-input"
          onChange={ this.handleChange }
          placeholder="Currency name"
          type="text"
          value={ searchQuery }
        />
        {
          loading &&
          <div className="Search-loading">
            <Loading height="12px"
              width="12px"
            />
          </div>
        }
        { this.renderSearchResults() }
      </div>
    );
  }
}

export default withRouter(Search);
