import axios from 'axios';

export default class RepoService {
  static async getReposByQuery(tempSearch) {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${tempSearch}&sort=stars&order=desc&per_page=10`
    );
    return response;
  }
}
