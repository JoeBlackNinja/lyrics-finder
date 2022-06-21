import axios from "axios";
import { useState, createContext } from "react";

const LyricsContext = createContext();

const LyricsProvider = ({children}) => {

    const [alert,setAlert] = useState(); 
    const [lyric,setLyric] = useState();
    const [charging,setCharging] = useState(false);

    const searchingLyric = async (searching) => {
        setCharging(true);
        try{
            const url = `https://api.lyrics.ovh/v1/${searching.artist}/${searching.song}`;
            const lyric_ = await axios(url);
            /* setLyric(lyric_.data); */
            console.log(lyric_.data.lyrics);
            setLyric(lyric_.data.lyrics);
            setAlert('')

        } catch(error){
            console.log(error);
            setAlert(`Sorry...we can't find this song... check the typing`);
        }
        setCharging(false);
    }

    return (
        <LyricsContext.Provider
            value={{
                alert,
                setAlert,
                searchingLyric,
                lyric,
                charging
            }}
        >
            {children}
        </LyricsContext.Provider>
    )
}

export { LyricsProvider };

export default LyricsContext;