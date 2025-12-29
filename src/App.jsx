import AppRouter from './routes/AppRouter.jsx';
import { ThemeProvider } from './context/ThemeContext';
import { MagicProvider } from './context/MagicContext';
function App() {
  return (
    <>
      <ThemeProvider>
        <MagicProvider>
          <AppRouter />
        </MagicProvider>
      </ThemeProvider>
    </>
  )
}

export default App;
