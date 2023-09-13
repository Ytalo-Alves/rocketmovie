import Styled from 'styled-components'

export const Container = Styled.div`
width: 100%;
display: flex;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
align-items: center;
padding: 0 16px;
gap: 16px;
border-radius:10px;

input {
width: 100%;
height: 56px;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
color: ${({theme}) => theme.COLORS.WHITE};
border: none;
}

svg {
  color: ${({theme}) => theme.COLORS.GRAY_300};
}
`