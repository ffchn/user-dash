import IUserPost from '../interfaces/post'

import api from './api'

class PostService {
  public async getPostsByUser(userId: string): Promise<IUserPost[]> {
    try {
      return await api
        .get(`/posts?userId=${userId}`)
        .then((response) => response.data)
    } catch (err) {
      return err.response
    }
  }
}

export default new PostService()
