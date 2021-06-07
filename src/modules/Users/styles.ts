import styled, { css } from 'styled-components'

interface IUserItem {
  userImage: string
}

export const UsersContainer = styled.div`
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      &:first-child {
        margin-right: 16px;
      }
    }
  }
`

export const UserListWrapper = styled.ul``

export const UserItemWrapper = styled.li<IUserItem>`
  ${({ userImage }) => css`
    display: grid;
    width: 100%;
    align-items: center;
    padding: 16px;
    grid-template-columns: 56px 1fr;
    grid-column-gap: 24px;
    cursor: pointer;
    transition: .5s ease;
    border-bottom: 1px solid lightgray;

    .userImage {
      background-size: cover;
      background-position: center;
      background-image: url('${userImage}');
      height: 56px;
      width: 56px;
      border-radius: 100%;
    }

    .userData {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .userMainData {
        display: flex;
        flex-direction: column;

        .userMainData__name {
          font-weight: bold;
          font-size: 1.2rem;
        }
      }
      
    }

    &:hover{
      background-color:#ededed;
    }
  `}
`
