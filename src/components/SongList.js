import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import NewSongForm from './NewSongForm';

//v4() nos devuelve una id aleatoria

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'almost home', id: 1},
        {title: 'memory gospel', id: 2},
        {title: 'this wild darkness', id: 3}
    ]);
    const [age, setAge] = useState(20); //Prueba

    const addSong = (title) => {
        setSongs([...songs, { title, id: v4() }]);
    }

    useEffect(() => {
        console.log('useEffect hook ran', songs);
    }, [songs]) //Actualiza solo cuando cambia songs

    useEffect(() => { //Prueba (puede haber tantos useEffect como queramos)
        console.log('useEffect hook ran', age);
    }, [age]) //Actualiza solo cuando cambia age

    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => {
                   return ( 
                    <li key={song.id}>{song.title}</li>
                   );
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)} >Add 1 to age: {age}</button> {/**Prueba */}
        </div>
     );
}
 
export default SongList;