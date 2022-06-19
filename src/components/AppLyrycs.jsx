import Form from "../components/Form";
import useLyrics from "../hooks/useLyrics";
import Alert from "./Alert";

const AppLyrycs = () => {
  const { alert } = useLyrics();

  return (
    <>
      <header>Song lyrics's finder</header>
      <Form />
      <main>
        {alert && <Alert>{alert}</Alert>}
      </main>
    </>
  );
};

export default AppLyrycs;
