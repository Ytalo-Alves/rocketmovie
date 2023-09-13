import Styled from 'styled-components'

export const Container = Styled.button`
color: ${({theme}) => theme.COLORS.PINK};
background:none;
border:none;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
`