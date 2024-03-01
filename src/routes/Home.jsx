import { useState } from 'react'
import PlayerControls from '../components/PlayerControls'
import TrackList from '../components/TrackList'
import sinisterMusic from '../assets/sinister.mp3'
import stompingMusic from '../assets/stomp.mp3'
import UnderwaterMusic from '../assets/underwater.mp3'
import { MusicContext } from '../contexts/MusicContext'

const Home = () => {

    const [state, setState] = useState({
        audioPlayer: new Audio(),
        tracks: [
            {
                name: 'Sinister Music',
                file: sinisterMusic

            },
            {
                name: 'Stomping Music',
                file: stompingMusic

            },
            {
                name: 'Underwater Music',
                file: UnderwaterMusic

            }
        ],
        currentTrackIndex: 0,
        isPlaying: false,
    })

    return (
        <div>
            <MusicContext.Provider value={[state, setState]}>

                <PlayerControls />
                <TrackList />

            </MusicContext.Provider>
        </div>
    )
}

export default Home;