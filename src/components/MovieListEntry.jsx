import React from 'react'

class MovieEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    }
  this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    event.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {

    return (
      <div className="movieEntryContainer">
        <span>{this.props.movieItem.title}
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Watched' : 'Not Watched'}
        </button>
        </span>
      </div>
    );
  }
};

export default MovieEntry;