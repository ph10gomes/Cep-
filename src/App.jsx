
import './App.css'
import Footer from './components/footer'
import { Header } from './components/header'

import Icon from './assets/img/caminhao (1).png'
function App() {
 

  return (
    <div className="container">
      <Header/>
      <main className="main">
        <form className='form'>
          <div className='icon'>
            <img src={Icon} alt='Icon' width="20%" ></img>
          </div>
          <div className='field'>
            <span className='label'>CEP</span>
            <input type='text' 
            placeholder='Digite o CEP'
            name = "CEP"
            className='input'></input>
          </div>
        </form>
      </main>
<Footer></Footer>
    </div>
  )
}

export default App
