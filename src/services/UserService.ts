import IUserPost from '../interfaces/post'
import IUser from '../interfaces/user'
import api from './api'

interface IGetUsersRequest {
  sortBy: 'name' | 'username' | 'email'
  orderBy: 'ASC' | 'DESC'
  filterBy: string
}

class UserService {
  public async getUsers({
    sortBy,
    orderBy,
    filterBy,
  }: IGetUsersRequest): Promise<IUser[]> {
    try {
      let userList = await api.get('/users').then((response) => response.data)

      userList = userList.sort((a: IUser, b: IUser) =>
        orderBy === 'DESC'
          ? b[sortBy].localeCompare(a[sortBy])
          : a[sortBy].localeCompare(b[sortBy])
      )

      if (filterBy === '') {
        return userList
      }

      const lowerCaseFilter = filterBy.toLowerCase()

      return userList.filter(
        (user: IUser) =>
          user.name.toLowerCase().includes(lowerCaseFilter) ||
          user.username.toLowerCase().includes(lowerCaseFilter) ||
          user.email.toLowerCase().includes(lowerCaseFilter)
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
