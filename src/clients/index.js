const API_URL = 'https://boti-github-test.herokuapp.com';
const API_TOKEN = 'grupoboticario';

const headers = {
  headers: new Headers({
    'Authorization': `Bearer ${API_TOKEN}`
  }),
}

const getAllRepositories = async () => {
  try {
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
  getAllRepositories,
  getRepositoryById
}
