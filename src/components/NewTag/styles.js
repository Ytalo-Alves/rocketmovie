import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
align-items: center;

background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
color: ${({theme}) => theme.COLORS.GRAY_300};

border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

margin-bottom: 8px;
border-radius: 10px;
padding-right: 16px;

button {
  border: none;
  background: none;
}


input {
  height: 40px;
  padding: 0px 10px;
  margin-right: -70px;
  color: ${({theme}) => theme.COLORS.WHITE};
  background: transparent;
  border: none;
}

&::placeholder {
  color: ${({theme}) => theme.COLORS.GRAY_300}
}

svg {
  color: ${({theme , isNew}) => isNew ? theme.COLORS.PINK : 'red'};
  font-size:20px;
  display: flex;
  align-items: center;
}



`