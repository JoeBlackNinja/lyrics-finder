import Form from "../components/Form";
import useLyrics from "../hooks/useLyrics";
import Alert from "./Alert";
import Lyric from "./Lyric";
import Spinner from '../components/Spinner';

const AppLyrycs = () => {
  const { alert, lyric, charging } = useLyrics();

  return (
    <>
      <header>Song lyrics's finder</header>
      <Form />
      <main>
        {alert ? <Alert>{alert}</Alert>: 
        lyric && !charging ? <Lyric/> :
        charging ? <Spinner/>: 
        <p className="text-center">
          Find lyrics of your favorite artist
        </p>
        }
      </main>
    </>
  );
};

export default AppLyrycs;
