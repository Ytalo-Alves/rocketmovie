import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiCamera } from "react-icons/fi";
import { MdPassword } from "react-icons/md";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          <span>Voltar</span>
        </Link>
      </header>
      <Form>
        <Avatar>
          <img
            src="https://github.com/ytalo-alves.png"
            alt="Imagem do Usuario"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input type="text" placeholder="Ytalo Alves e Silva" icon={FiUser} />
        <Input
          type="text"
          placeholder="Ytaloalves10@hotmail.com"
          icon={FiMail}
        />
        <Input type="password" placeholder="Senha atual" icon={MdPassword} />
        <Input type="password" placeholder="Nova senha" icon={MdPassword} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
