import {Container} from './styles'
import { Header } from '../../components/Header'
import { Buttontext } from '../../components/Buttontext'
import { FiArrowLeft} from "react-icons/fi";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {AiOutlineClose} from 'react-icons/ai';
import { Newitem } from '../../components/NewTag';
import { Link } from 'react-router-dom';

export function Createmovie(){
  return (
    <Container>
      <Header/>
      <main>
      <Link to='/'>
      <Buttontext title='Voltar' icon={FiArrowLeft}/>
      </Link>
      
      <h1>Novo Filme</h1>
      
      <div className='inputs'>
        <Input placeholder='Titulo' />
        <Input placeholder='Sua nota (de 0 a 5)' />
      </div>

      <textarea placeholder='Observações'/>

      <h2>Marcadores</h2>
      <div className='tags'>
      <Newitem placeholder="Ficção Cientifica" />
      <Newitem isNew placeholder="Novo marcador" />
      </div>

      <div className='buttons'>
      <Button className="delete" title='Excluir Filme'/>
      <Button title='Salvar Alterações'/>
      </div>
      </main>
    </Container>
  )
}