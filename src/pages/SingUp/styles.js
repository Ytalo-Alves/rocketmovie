import Styled from 'styled-components'
import backgroundimg from '../../assets/background.png'

export const Container = Styled.div`
height:100vh;
display:flex;
align-items:stretch;

`

export const Form = Styled.form`
padding: 0 134px;
display:flex;
flex-direction:column;
justify-content:center;
text-align: center;

> div {
  margin-bottom: 8px;
}

h1 {
  color: ${({theme}) => theme.COLORS.PINK};
  font-size: 48px;
  
}

h2 {
  margin-bottom:48px;
  
}

p {
  margin-bottom: 48px;
  font-size:14px;
  
}

> .btnvoltar {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  margin-top: 24px;
  margin-bottom: 42px;
}


`

export const Background = Styled.div`
flex: 1;
background: url(${backgroundimg}) no-repeat center center;
background-size: cover;
opacity: 0.2; 
`