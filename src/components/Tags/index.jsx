import {Container} from './styles'

export function Tags({title,icon:Icon,...rest}){
  return(
    <Container {...rest}>
      <span>
      {title}
      {Icon && <Icon size={20} />}
      </span>
    </Container>
  )
}