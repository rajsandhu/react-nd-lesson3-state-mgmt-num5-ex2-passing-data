import React, { Component } from 'react'

class MovieList extends Component {
  render() {
    return (
      <div>
        <i>below, hardcoded html text I want to replicate in style:</i>

        <h2>Forrest Gump</h2>
        <p>Liked By:</p>
        <ul>
          <li>Nicholas Lain</li>
        </ul>

        <h2>Get Out</h2>
        <p>Liked By:</p>
        <ul>
          <li>John Doe</li>
          <li>Autumn Green</li>
        </ul>

        <h2>Autumn Green</h2>
        <p>None of the current users liked this movie</p>
      </div>
      )
  }
}

export default MovieList