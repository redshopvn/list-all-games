import './App.css'
import AllGames from './Components/AllGames'
import FindGames from './Components/FindGames'
import Header from './Components/Header'
import TextContent from './Components/TextContent'
function App() {
  return (
    <>
      <Header />
      <TextContent count={2051}/>
      <FindGames />
      <AllGames />
    </>
  )
}

export default App
