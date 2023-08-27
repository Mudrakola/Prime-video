import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {eachMovie} = props
  const {thumbnailUrl, videoUrl} = eachMovie
  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} className="pop-content" alt="thumbnail" />
        }
      >
        {close => (
          <div className="button-container">
            <button
              data-testid="closeButton"
              type="button"
              className="trigger-button but"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div>
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
