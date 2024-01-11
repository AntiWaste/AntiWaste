import axios from 'axios';

export const Service = {
  async SignUp(newUser) {
    try {
      await axios
        .post(
          'http://localhost:5000/api/auth/register',
          {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            phone: newUser.phone,
            role: newUser.role,
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
        .then((res) => {
          console.log(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  },
  async Login(newUser) {
    try {
      await axios
        .post(
          'http://localhost:5000/api/auth/login',
          {
            username: newUser.username,
            password: newUser.password,
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
        .then((res) => {
          console.log(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  },
};
