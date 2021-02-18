class UserService {
  users = localStorage.getItem("users");
  isLogged = false;
  isAdmin = false;
  isSuperAdmin = false;

  login({ email, password }) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        let user = {};
        if (this.users !== null) {
          user = JSON.parse(this.users).find((user) => {
            return user.email === email;
          });

          if (user === undefined) {
            rej({
              err: "User not found",
            });
          } else {
            if (user.password === password) {
              user = {
                email: user.email,
                password: user.password,
                isAdmin: user.isAdmin,
                isSuperAdmin: user.isSuperAdmin,
                isLogged: true
              }
              this.isLogged = true
              localStorage.setItem("activeUser", JSON.stringify(user));
              res(user);
            } else {
              rej("Wrong password");
            }
          }
        } else {
          rej("No users in database");
        }
      }, 1000);
    });
  }

  getMe() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (this.isLogged) {
          res({
            name: "User",
          });
        } else {
          rej({
            err: "You're not logged",
          });
        }
      }, 1000);
    });
  }

  logout() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.isLogged = false;
        res(true);
      }, 1000);
    });
  }
}

const userService = new UserService();

export default userService;
