import{useForm} from 'react-hook-form'
import './App.css'
import Footer from './components/footer'
import { Header } from './components/header'

import Icon from './assets/img/caminhao (1).png'
function App() {
 
const { register,setValue,setFocus} = useForm()

function checkCep(e){
  const cep = e.target.value;
  console.log(cep)

  if(cep.length !==8){
  return;
}
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then((response)=> response.json())
  .then((data)=>{
    setValue('cidade',data.localidade)
    setValue('state',data.uf)
    setValue('rua',data.logradouro)
    setValue('bairro',data.bairro)
    if(data.logradouro){
      setFocus('number')
    }else{
      setFocus('rua')
    }
  })
}

  return (
    <div className="container">
      <Header/>
      <main className="main">
        <form className='form'>
          <div className='icon'>
            <img src={Icon} alt='Icon' width="10%" ></img>
          </div>
          <div className='field'>
            <span className='label'>CEP</span>
            <input type='text' 
            placeholder='Digite o CEP'
            name = "CEP"
            {...register('cep')}
            onBlur={checkCep}
            className='input'>

            </input>
          </div>

          <div className='field'>
            <span className='label'>Rua</span>
            <input type='text' 
            //placeholder='Digite o Rua'
            name = "rua"
            {...register('rua')}
            className='input'></input>
          </div>

          <div className='field'>
            <span className='label'>Número</span>
            <input type='text' 
            //placeholder='Digite o Número'
            name = "number"
            {...register('number')}
            className='input'></input>
          </div>

          <div className='field'>
            <span className='label'>Bairro</span>
            <input type='text' 
            //placeholder='Digite o Bairro'
            name = "bairro"
            {...register('bairro')}
            className='input'></input>
          </div>

          <div className='field'>
            <span className='label'>Cidade</span>
            <input type='text' 
            //placeholder='Digite o Cidade'
            name = "cidade"
            {...register('cidade')}
            className='input'></input>
          </div>

          <div className='field'>
            <span className='label'>Estado</span>
            <input type='text' 
            //placeholder='Digite o Estado'
            name = "state"
            {...register('state')}
            className='input'></input>
          </div>
        </form>
      </main>
<Footer></Footer>
    </div>
  )
}

export default App
