"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {

    const [isOpen, setIsOpen] = useState(true)
    
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button className="text-color-primary float-right bg-color-secondary px-3 mb-1" onClick={handleVideoPlayer}>X</button>
                <YouTube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                />
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
            <button className="fixed bottom-5 right-5 w-36 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl rounded" onClick={handleVideoPlayer}>Tonton Trailer</button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenPlayer />
}

export default VideoPlayer