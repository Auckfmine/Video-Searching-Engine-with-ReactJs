import React from "react";
import "../styles/SearchBar.css";
class SearchBar extends React.Component {
  state = {
    SearchTerm: "",
  };

  onInputChange = (event) => {
    this.setState({
      SearchTerm: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.SearchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="ui label">Search Videos</label>
            <input
              type="text"
              placeholder="Video Search"
              value={this.state.SearchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
