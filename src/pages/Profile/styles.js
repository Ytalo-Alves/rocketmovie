import Styled from 'styled-components'

export const Container = Styled.div`
width: 100%;
height: 100%;



header {
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_CARD};
  height: 144px;
  padding: 64px 128px;
  display: flex;
  align-items: center;
 
  
  color: ${({theme}) => theme.COLORS.PINK};
  text-decoration: none;
  

  cursor: pointer;
  
  svg {
  font-size: 30px;
}

a {
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({theme}) => theme.COLORS.PINK};
}

}
`

export const Form = Styled.form`
width: 340px;
height: 100%;
margin: 30px auto 0;
display: flex;
flex-direction: column;
gap: 8px;

> div:nth-child(2){
  svg {
    color: white;
  }
  ::placeholder{
    color: white;
  }
}

> div:nth-child(3){
  svg {
    color: white;
  }
  ::placeholder{
    color: white;
  }
}

> div:nth-child(3){
  margin-bottom: 24px;
}

> div:nth-child(5){
  margin-bottom: 24px;
}

`


export const Avatar = Styled.div`
position: relative;
margin: -100px auto 64px;



> img {
  width: 186px;
  border-radius: 50%;
}

> label {
position:absolute;
bottom:7px;
right:7px;
background-color: ${({theme}) => theme.COLORS.PINK};
border-radius: 50%;
width: 48px;
height: 48px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
}

input {
  display: none;
}

svg {
  font-size: 20px;
  color: black;
  font-weight: bold;
}
`

