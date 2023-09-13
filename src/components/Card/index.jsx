import { Container } from "./styles";
import {AiOutlineStar} from 'react-icons/ai'
import { Tags } from "../../components/Tags";
import { Rating } from "../Rating";


export function Card({icon:Icon, ...rest}) {
  return (
   
    <Container to='/MoviePreview'>
      
      <h1>Interestellar</h1>
        <Rating/>
      <p>
        Pragas nas colheitas fizeram a civilização humana regredir para uma
        sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
        NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
        Cooper, acredita que seu quarto está assombrado por um fantasma que
        tenta...
      </p>
      <Tags title="Ficção Cientifica"/>
      <Tags title="Drama"/>
      <Tags title="Familia"/>
    </Container>
  );
}
