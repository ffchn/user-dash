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
    margin-bottom: 32px;

    h1 {
      margin: 0;
    }

    .inputs {
      display: flex;
      flex-direction: row;
      align-items: center;

      .input {
        display: flex;
        flex-direction: column;

        label {
          margin-bottom: 4px;
          font-weight: bold;
        }
        input,
        select {
          height: 32px;
        }

        &:not(:last-child) {
          margin-right: 16px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .header {
      flex-direction: column;
      align-items: flex-start;

      .inputs {
        margin-top: 8px;
        width: 100%;
        display: flex;
        flex-direction: column;

        .input {
          width: 100%;

          &:first-child {
            margin-right: 0;
            margin-bottom: 8px;
          }
        }
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
    transition: 0.5s ease;
    border-bottom: 1px solid lightgray;

    &:nth-child(odd) {
      background-color: #f0f0f0;
    }

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

    &:hover {
      background-color: #e1e1e1;
    }

    @media screen and (max-width: 480px) {
      display: flex;

      .userData {
        flex-direction: column;
        align-items: flex-start;
      }
      .userImage {
        display: none;
      }
    }
  `}
`
