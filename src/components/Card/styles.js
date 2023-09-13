import Styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = Styled(Link)`
width:100%;
height:223px;
background: ${({theme}) => theme.COLORS.BACKGROUND_CARD};
padding: 32px;
border-radius: 10px;
margin-bottom: 40px;
color : ${({theme}) => theme.COLORS.WHITE};


p {
  font-size:16px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
  margin-top:15px;
  margin-bottom: 15px;
}
`