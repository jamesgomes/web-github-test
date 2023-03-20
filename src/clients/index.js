const API_URL = 'https://boti-github-test.herokuapp.com';


const getAllRepositories = async () => {
  try {
    const response = await fetch(`${API_URL}/repositories`, {
      headers: new Headers({
        'Authorization': 'Bearer senha '
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}

const getRepositoryById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/repositories/${id}`, {
      headers: new Headers({
        'Authorization': 'Bearer senha'
      }),
    });
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
