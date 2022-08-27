import React from 'react'
import ReactPlayer from 'react-player'

// Lazy load the YouTube player
export default function VideoPlayer({ url, caption }) {
  return (
    <div>
      <div className="relative mx-auto h-96 w-52">
        <ReactPlayer
          className="absolute top-0 left-0"
          url={url}
          height="100%"
          width="100%"
          muted={true}
          controls={true}
          volume={0}
          playing={true}
        />
      </div>
      {caption && <p className="mx-auto mt-8 w-52 text-center text-sm">{caption}</p>}
    </div>
  )
}
