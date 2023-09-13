import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { FiPlus } from "react-icons/fi";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
     
        <Header />
      
      <main>
        <Content>
          <div className="add">
          <p>Meus Filmes</p>
          <Link to='/Createmovie'>
          <Button title="Adicionar filme" className="addMovie" icon={FiPlus}/>
          </Link>
          </div>
          <Card />
          <Card />
        </Content>
      </main>
    </Container>
  );
}
