import useLyrics from '../hooks/useLyrics';

const Lyric = () => {

    const { lyric, charging } = useLyrics();

  return (
    charging ? null :
    (<div className='letra'>
        {lyric}
    </div>)
  )
}

export default Lyric