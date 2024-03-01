'use client'

import { PlayFill, SkipEndFill, SkipStartFill } from 'react-bootstrap-icons';

const PlayerControls = () => {

    //TODO: ADD useMusicPlayer hook


    return (
        <div>
            <div>
                <p>HERE WILL BE CURRENT APP NAME</p>

            </div>
            <button>
                <SkipStartFill />
            </button>
            <button>
                <PlayFill />
            </button>
            <button>
                <SkipEndFill />
            </button>
        </div>
    )
}

export default PlayerControls;