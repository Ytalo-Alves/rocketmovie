import Styled from 'styled-components'

export const Container = Styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-areas:
"header"
"content"
;

p {
  font-size:32px;
  font-weight:bold;
  margin-bottom:40px;
}

main {
  grid-area: content;
  overflow-y: auto;
}


.addMovie{
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Content = Styled.div`
padding: 50px 123px;
overflow-y: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
`