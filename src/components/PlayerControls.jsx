'use client'

import { PlayFill, SkipEndFill, SkipStartFill } from 'react-bootstrap-icons';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

const PlayerControls = () => {

    const music = useMusicPlayer();

    return (
        <div>
            <div>
                <p>{music.currentTrackName}</p>

            </div>
            <button onClick={() => music.playPreviousTrack}>
                <SkipStartFill />
            </button>
            <button onClick={() => music.togglePlay}>
                {music.isPlaying ? <PauseFill /> : <PlayFill />}
                <PlayFill />
            </button>
            <button onClick={() => music.playNextTrack}>
                <SkipEndFill />
            </button>
        </div>
    )
}

export default PlayerControls;