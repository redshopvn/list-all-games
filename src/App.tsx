import './App.css'
import AllGames from './Components/AllGames'
import FindGames from './Components/FindGames'
import Header from './Components/Header'
import NewGames from './Components/NewGames'
import TextContent from './Components/TextContent'
function App() {
  return (
    <>
      <Header />
      <TextContent count={2086} />
      <FindGames />
      <NewGames />
      <AllGames />
    </>
  )
}

export default App
