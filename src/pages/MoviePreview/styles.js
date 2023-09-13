import Styled from 'styled-components'

export const Container = Styled.div`
width:100%;
height:100vh;

main {
  overflow-y: auto;
  padding: 40px 123px;

  img {
    width: 20px;
    border-radius: 50%;
  }

}

.created_at {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top:26px;
    margin-bottom:48px;
  }

  .profile {
    display:flex;
    align-items: center;
    gap: 8px;
  }

  .created {
    display:flex;
    align-items: center;
    gap: 8px;
    > svg {
      font-size:20px;
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }

  p{
      margin-top: 48px;
      text-align: justify;
    }


.description {
  display: flex;
  align-items: center;
  gap: 19px;
  margin-top: 24px;

  > div {
    font-size:20px;
    gap: 10px;
    color: ${({theme}) => theme.COLORS.PINK};
  }
}
`