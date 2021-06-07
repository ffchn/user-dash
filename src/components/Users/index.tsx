import React, { ChangeEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import useDebounce from '../../hooks/useDebounce'
import IUser from '../../interfaces/user'
import UserService from '../../services/UserService'
import { Container, Card } from '../../styles/globals'

import { UsersContainer, UserListWrapper, UserItemWrapper } from './styles'

const Users: React.FC = () => {
  const [isFetchingUsers, setFetchingUsers] = useState<boolean>(false)
  const [userList, setUserList] = useState<IUser[]>([])
  const [sortBy, setSortBy] = useState<'name' | 'username' | 'email'>('name')
  const [orderBy, setOrderBy] = useState<'ASC' | 'DESC'>('ASC')

  const [filterBy, setFilterBy] = useState<string>('')
  const debouncedFilterBy = useDebounce(filterBy)

  const fetchUsers = async () => {
    setFetchingUsers(true)
    await UserService.getUsers({ sortBy, filterBy: debouncedFilterBy, orderBy })
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
  }, [sortBy, debouncedFilterBy, orderBy])

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

  const handleChangeSortBy = (e: any) => {
    setSortBy(e.target.value)
  }
  const handleChangeSortByOrder = (e: any) => {
    setOrderBy(e.target.value)
  }
  const handleChangeFilterBy = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterBy(e.target.value)
  }

  return (
    <Container>
      <Card>
        <UsersContainer>
          <div className='header'>
            <h1>Users</h1>
            <div className='inputs'>
              <div className='input'>
                <label htmlFor='filterByInput'>Filter by:</label>
                <input
                  id='filterByInput'
                  type='text'
                  onChange={handleChangeFilterBy}
                />
              </div>
              <div className='input'>
                <label htmlFor='sortBySelector'>Sort by: </label>
                <select id='sortBySelector' onChange={handleChangeSortBy}>
                  <option value='name'>Name</option>
                  <option value='username'>Username</option>
                  <option value='email'>E-mail</option>
                </select>
              </div>
              <div className='input'>
                <label htmlFor='sortByOrder'>Order: </label>
                <select id='sortByOrder' onChange={handleChangeSortByOrder}>
                  <option value='ASC'>ASC</option>
                  <option value='DESC'>DESC</option>
                </select>
              </div>
            </div>
          </div>
          {!isFetchingUsers ? (
            <UserListWrapper>
              {userList.length >= 1 ? (
                userList.map((user: IUser, index: number) => (
                  <UserItem userData={user} key={`user-${index}`} />
                ))
              ) : (
                <span>
                  No users found{filterBy !== '' ? ` with '${filterBy}'` : ''}
                </span>
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
