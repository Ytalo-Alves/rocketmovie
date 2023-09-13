import Styled from 'styled-components'

export const Container = Styled.button`
width: 100%;
height: 56px;
background-color: ${({theme}) => theme.COLORS.PINK};
border-radius: 10px;
border: none;
`