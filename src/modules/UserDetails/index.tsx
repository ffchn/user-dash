import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import IUserPost from '../../interfaces/post'
import IUser from '../../interfaces/user'
import PostService from '../../services/PostService'
import UserService from '../../services/UserService'
import { Card, Container } from '../../styles/globals'
import { UserDetailsContainer, UserInfoGrid } from './styles'

const UserDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>()
  const [isFetchingData, setFetchingData] = useState<boolean>(false)
  const [userData, setUserData] = useState<IUser>()

  const { name, username, email, phone, website, address, company } =
    userData || {}

  const { suite, street, city, zipcode } = address || {}
  const { name: companyName, bs: companyBs, catchPhrase } = company || {}

  const fetchUserData = async (userId: string) => {
    setFetchingData(true)

    await UserService.getUserData(userId)
      .then((response) => {
        setUserData(response)
      })
      .catch((err) => {
        console.error(err)
      })

    setFetchingData(false)
  }

  useEffect(() => {
    if (userId) {
      fetchUserData(userId)
    }
  }, [userId])

  useEffect(() => {
    console.log(userData)
  }, [userData])

  const UserPosts = () => {
    const [userPostData, setUserPostData] = useState<IUserPost[]>([])

    const fetchUserPosts = async (userId: string) => {
      await PostService.getPostsByUser(userId)
        .then((response) => {
          setUserPostData(response)
        })
        .catch((err) => {
          console.error(err)
        })
    }

    useEffect(() => {
      if (userId) {
        fetchUserPosts(userId)
      }
    }, [userId])

    return (
      <UserInfoGrid>
        {userPostData.map((post: IUserPost) => (
          <div className='infoItem'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </UserInfoGrid>
    )
  }

  return (
    <Container>
      <Card>
        {!isFetchingData ? (
          <>
            {!!userData && userData.id ? (
              <UserDetailsContainer>
                <h1>
                  <a href='/'>Users</a> {'>'} {name || ''}
                </h1>

                <UserInfoGrid>
                  <div className='infoItem'>
                    <h2>Contact Info</h2>
                    <p>Username: {username || ''}</p>
                    <p>
                      Phone: {phone && <a href={`tel:${phone}`}>{phone}</a>}
                    </p>
                    <p>
                      Website:{' '}
                      {website && (
                        <a
                          href={`http://${website}`}
                          target='__blank'
                          rel='noopener noreferer'
                        >
                          {website}
                        </a>
                      )}
                    </p>
                  </div>
                  <div className='infoItem'>
                    <h2>Address</h2>
                    {address && (
                      <>
                        <p>
                          {suite} {street},
                        </p>
                        <p>
                          {city} - {zipcode}
                        </p>
                      </>
                    )}
                  </div>
                  <div className='infoItem'>
                    <h2>Company</h2>
                    {company && (
                      <>
                        <p>{companyName},</p>
                        <p>{companyBs}</p>
                        <p>
                          <em>"{catchPhrase}"</em>
                        </p>
                      </>
                    )}
                  </div>
                </UserInfoGrid>
                <h1>Posts by {name} </h1>
                <UserPosts />
              </UserDetailsContainer>
            ) : (
              <>
                <h1>No user found with the id {userId}</h1>
                <a href='/'>Go back to User list</a>
              </>
            )}
          </>
        ) : (
          <>
            <span>Fetching user data...</span>
          </>
        )}
      </Card>
    </Container>
  )
}

export default UserDetails
