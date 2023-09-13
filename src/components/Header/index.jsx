import {Container, Profile} from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'

export function Header(){
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo titulo"/>
      
      <Profile>
      <div>
        <span>Ytalo Alves</span>
        <a href="/">sair</a>
      </div>
      <Link to="/Profile">
      <img src="https://github.com/Ytalo-Alves.png" alt="imagem do Usuario" />
      </Link>
      </Profile>
    </Container>
  )
}