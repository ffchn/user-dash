import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import IUser from '../../interfaces/user'
import UserService from '../../services/UserService'
import { Container, Card } from '../../styles/globals'

import { UsersContainer, UserListWrapper, UserItemWrapper } from './styles'

const Users: React.FC = () => {
  const [isFetchingUsers, setFetchingUsers] = useState<boolean>(false)
  const [userList, setUserList] = useState<IUser[]>([])

  const fetchUsers = async () => {
    setFetchingUsers(true)
    await UserService.getUsers()
      .then((response) => {
        setUserList(response)
      })
      .catch((err) => {
        console.error(err)
      })

    setFetchingUsers(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const UserItem = (props: { userData: IUser }) => {
    const history = useHistory()

    const { name, username, email, id } = props.userData

    const goToUserDetailPage = () => {
      history.push(`/users/${id}`)
    }

    return (
      <UserItemWrapper
        userImage='http://lorempixel.com/200/200/people/'
        onClick={goToUserDetailPage}
      >
        <div className='userImage' />
        <div className='userData'>
          <div className='userMainData'>
            <span className='userMainData__name'>{name}</span>
            <span className='userMainData__user'>{username}</span>
          </div>
          <a
            href={`mailto:${email}`}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            {email}
          </a>
        </div>
      </UserItemWrapper>
    )
  }

  return (
    <Container>
      <Card>
        <UsersContainer>
          <div className='header'>
            <h1>Users</h1>
            <div className='inputs'>
              <input type='text' />
              <input type='text' />
            </div>
          </div>
          {!isFetchingUsers ? (
            <UserListWrapper>
              {userList.length >= 1 ? (
                userList.map((user: IUser, index: number) => (
                  <UserItem userData={user} key={`user-${index}`} />
                ))
              ) : (
                <>No users found</>
              )}
            </UserListWrapper>
          ) : (
            <>
              <span className='fetchingIndicator'>Fetching data...</span>
            </>
          )}
        </UsersContainer>
      </Card>
    </Container>
  )
}

export default Users
