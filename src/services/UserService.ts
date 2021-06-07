import api from './api'

class UserService {
  public async getUsers() {
    try {
      return await api.get('/users').then((response) => response.data)
    } catch (err) {
      return err.response
    }
  }
}

export default new UserService()
