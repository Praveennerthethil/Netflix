import React,{useState,useEffect} from 'react';
import './RowPost.css';
import axios from '../../axios';
import {API_KEY} from '../../constants/Constants'
import {imageUrl} from '../../constants/Constants'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [action, setAction] = useState([])
    useEffect(() => {
       axios.get(props.url).then((response)=>{
        console.log(response.data)
        setMovies(response.data.results)
        setAction(response.data.results)
       })
    }, [])
    return (
        <div className='row'>
            <h2 className={props.isSmall ? 'smallTitle' : 'title'}>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                
                <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                
                )}
            </div>
            
        </div>
    )
}

export default RowPost
