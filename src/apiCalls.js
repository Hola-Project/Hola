import axios from 'axios';

export const loginCall = async (userCredential, history, data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/login`,
      userCredential
    );
    data = res.data;
    localStorage.setItem('testObject', JSON.stringify(data));
    console.log(res.data);
    alert('Welcome');
    history.push('/messenger');
  } catch (err) {
    console.log(err);
    alert('wrong password');
  }
};
