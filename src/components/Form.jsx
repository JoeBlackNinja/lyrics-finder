import { useState } from "react";  
import useLyrics from "../hooks/useLyrics";

const Form = () => {

    const { setAlert, searchingLyric } = useLyrics();

    const [searching,setSearching] = useState({
        artist:'',
        song:''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.values(searching).includes('')){
            setAlert('Type artist and song names')
            return
        }
        searchingLyric(searching);
    }

  return (
    <form onSubmit={handleSubmit}>
      <legend>Searching for artist and song</legend>

      <div className="form-grid">
        <div>
          <label>Singer / Artist</label>
          <input 
            type="text" 
            name="artist" 
            placeholder="Artist name"
            value={searching.artist}
            onChange={ e => setSearching({
                ...searching,
                [e.target.name] : e.target.value
            }) }/>
        </div>
        <div>
          <label>Song</label>
          <input 
            type="text" 
            name="song" 
            placeholder="Artist name" 
            value={searching.song}
            onChange={ e => setSearching({
                ...searching,
                [e.target.name] : e.target.value
            }) }/>
        </div>
        <input
            type='submit'
            value='search'
        />
      </div>
    </form>
  );
};

export default Form;
