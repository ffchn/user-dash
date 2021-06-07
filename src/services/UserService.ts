import IUser from '../interfaces/user'
import api from './api'

class UserService {
  public async getUsers(): Promise<IUser[]> {
    try {
      return await api.get('/users').then((response) => response.data)
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
}

export default new UserService()
