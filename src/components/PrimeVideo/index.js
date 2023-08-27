import MoviesSlider from '../MoviesSlider'

import './index.css'

const movies = {
  action: 'ACTION',
  comedy: 'COMEDY',
}

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovie = moviesList.filter(
    eachMovie => eachMovie.categoryId === movies.action,
  )
  const comedyMovie = moviesList.filter(
    eachMovie => eachMovie.categoryId === movies.comedy,
  )

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="banner-image"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovie} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovie} />
      </div>
    </div>
  )
}

export default PrimeVideo
