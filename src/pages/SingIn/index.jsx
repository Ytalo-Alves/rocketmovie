import { Container,Form, Background } from "./styles"
import {FiMail} from 'react-icons/fi'
import {RiLockPasswordLine} from 'react-icons/ri'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Buttontext } from "../../components/Buttontext"
import { Link } from "react-router-dom"

export function SingIn(){
  return (
    <Container>
      <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>
      <h2>Faça seu login</h2>
      <div>
      <Input placeholder="E-mail" icon={FiMail}/>
      </div>
      <Input placeholder="Senha" icon={RiLockPasswordLine}/>
      <Button title="Entrar">
        
      </Button>
  
      <Link to="/register">
      Criar conta
      </Link>
      
      </Form>
      <Background/>
      
    </Container>
  )
}