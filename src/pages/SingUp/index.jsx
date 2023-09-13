import { Container,Form, Background } from "./styles"
import {FiMail} from 'react-icons/fi'
import {RiLockPasswordLine} from 'react-icons/ri'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Buttontext } from "../../components/Buttontext"
import {CgProfile} from 'react-icons/cg'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from "react-router-dom"

export function SingUp(){
  return (
    <Container>
      <Background/>
      <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>
      <h2>Crie sua conta</h2>
      <div>
      <Input placeholder="Nome" icon={CgProfile}/>
      </div>
      <div>
      <Input placeholder="E-mail" icon={FiMail}/>
      </div>
      <Input placeholder="Senha" icon={RiLockPasswordLine}/>
      <Button title="Cadastrar"/>

      
      <div class="btnvoltar">
      <Link to="/">
      <Buttontext title='Voltar para login' icon={AiOutlineArrowLeft}/>
      </Link>
      </div>

      </Form>
    </Container>
  )
}