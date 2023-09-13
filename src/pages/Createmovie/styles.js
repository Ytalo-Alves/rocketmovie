import Styled from 'styled-components'

export const Container = Styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-areas:
"header"
"content";

main {
  grid-area:content;
  overflow-y: auto;
  padding: 40px 123px;

  h1 {
  margin-top: 24px;
}
  h2 {
    margin-top:40px;
    margin-bottom:40px;
    color: ${({theme}) => theme.COLORS.GRAY_200};
  }
  .tags{
  display: flex;
  align-items: center;
  background-color: black;
  padding: 22px 16px 16px;
  border-radius: 10px;
  gap: 10px;
}
  
}

.inputs {
  display: flex;
  gap: 40px;
  margin-top:40px;
}

textarea {
  margin-top: 40px;
  width: 100%;
  height: 274px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  border: none;
  padding: 19px 16px;
  color: ${({theme}) => theme.COLORS.WHITE};
  resize: none;
}

.buttons {
  display: flex;
  margin-top: 40px;
  gap: 40px;

  .delete {
    background:black;
    color: ${({theme}) => theme.COLORS.PINK};
  }

}
`