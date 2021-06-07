import IUserPost from '../interfaces/post'
import IUser from '../interfaces/user'
import api from './api'

interface IGetUsersRequest {
  sortBy: 'name' | 'username' | 'email'
  filterBy: string
}

class UserService {
  public async getUsers({
    sortBy,
    filterBy,
  }: IGetUsersRequest): Promise<IUser[]> {
    try {
      let userList = await api.get('/users').then((response) => response.data)

      userList = userList.sort((a: IUser, b: IUser) =>
        a[sortBy].localeCompare(b[sortBy])
      )

      if (filterBy === '') {
        return userList
      }

      return userList.filter(
        (user: IUser) =>
          user.name.toLowerCase().includes(filterBy) ||
          user.username.toLowerCase().includes(filterBy) ||
          user.email.toLowerCase().includes(filterBy)
      )
    } catch (err) {
      return err.response
    }
  }

  public async getUserData(userId: string): Promise<IUser> {
    try {
      return await api.get(`/users/${userId}`).then((response) => response.data)
    } catch (err) {
      return err.response
    }
  }

  public async getUserPosts(userId: string): Promise<IUserPost[]> {
    try {
      return await api
        .get(`/users/${userId}/posts`)
        .then((response) => response.data)
    } catch (err) {
      return err.response
    }
  }
}

export default new UserService()
