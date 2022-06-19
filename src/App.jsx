import AppLyrics from './components/AppLyrycs';
import { LyricsProvider } from './context/LyricsProvider';

function App() {
  
  return (
    <LyricsProvider>
      <AppLyrics/>
    </LyricsProvider>
  )
}

export default App
