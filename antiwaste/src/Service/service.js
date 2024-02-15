import axios from 'axios';

export const Service = {
  ErrorHandler(err) {
    return err
  },

  async SignUp(newUser) {
    try {
      await axios
        .post(
          'http://localhost:5000/api/auth/register',
          {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            role: newUser.role,
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
        .then((res) => {
          localStorage.setItem('message', JSON.stringify(res.data.message));
        });
    } catch (e) {
      this.ErrorHandler(e);
    }
  },
  async Login(newUser) {
    try {
      await axios
        .post(
          'http://localhost:5000/api/auth/login',
          {
            email: newUser.email,
            password: newUser.password,
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res.data));
          
        });
    } catch (e) {
      this.ErrorHandler(e);
    }
  },
  Logout() {
    localStorage.removeItem('user');
  },
};
