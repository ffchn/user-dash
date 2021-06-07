import styled from 'styled-components'

export const UserDetailsContainer = styled.div`
  h1 {
    a {
      font-size: 2rem;
    }
  }
`

export const UserInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 32px;
  margin-bottom: 32px;

  .infoItem {
    border: 2px solid darkgray;
    padding: 16px;
    min-height: 200px;

    h2 {
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 16px;
    }
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
    .infoItem{
      padding: 0;

      border: none;
      min-height: auto;

      &.post{
        border-bottom: 1px solid darkgray;
        padding-bottom: 16px;
      }
    }
  }
`
