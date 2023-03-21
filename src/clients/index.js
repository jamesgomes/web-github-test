const API_URL = 'https://boti-github-test.herokuapp.com';
const API_TOKEN = 'grupoboticario';

const headers = {
  headers: new Headers({
    'Authorization': `Bearer ${API_TOKEN}`
  }),
}

const getRepositoriesByQuery = async (filter) => {
  console.log('🚀 ~ file: index.js:11 ~ getRepositoriesByQuery ~ filter:', filter)
  try {
    if (filter !== 'all') {
      const response = await fetch(`${API_URL}/repositories?language=${filter}`, headers);
      const data = await response.json();
      return data;
    }
    const response = await fetch(`${API_URL}/repositories`, headers);
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}

const getRepositoryById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/repositories/${id}`, headers);
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}

export default {
  getRepositoriesByQuery,
  getRepositoryById
}
