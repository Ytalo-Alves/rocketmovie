import Styled from 'styled-components'


export const Container = Styled.div`
grid-area: header;
width: 100%;
height: 116px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 24px 120px;
border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_400 };

H1 {
  color: ${({theme}) => theme.COLORS.PINK};
  font-size:24px;
}


> div:nth-child(2){
  width: 700px;
}

a {
  text-decoration: none;
  color: ${({theme}) => theme.COLORS.PINK};
  display: flex;
  justify-content: flex-end;
  
}


`

export const Profile = Styled.div`

display: flex;
align-items: center;
gap: 10px;

 

 img {
  border-radius: 50%;
  width: 64px;
  height: 64px;
}


`