import React, { useState } from 'react';
import GetRandomJoke from './axios.service';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { IconButton } from '@mui/material';

const Exercise21 = () => {

    const [joke, setJoke] = useState('');
    let [unlikes, setUnlike] = useState(0)
    let [likes, setLike] = useState(0)

    const GenerateNewJoke = () => {
        GetRandomJoke()
            .then((response) => {
                setJoke(response.data.value)
            })
            .catch((error) => {
                alert(`algo no funciono, ${error}`)
            })
    }

    return (
        <div>
            <div>
                <IconButton onClick={GenerateNewJoke}>Generate new joke</IconButton>
                <p>{joke}</p>
            </div>
            <div style={{display: 'grid',  gridTemplateColumns: '1fr 1fr'}}>
                <ThumbDownIcon style={{margin: '20px'}} onClick={ () => setUnlike(unlikes += 1)}></ThumbDownIcon>
                <p>Unlikes: {unlikes}</p>
                
                <ThumbUpIcon style={{margin: '20px'}} onClick={ () => setLike(likes += 1)}></ThumbUpIcon>
                <p>Likes: {likes}</p>
            </div>

        </div>
    );
}

export default Exercise21;
