const users = [
  {
    email: "superAdmin@gmail.com",
    password: "superAdmin",
    isAdmin: true,
    isSuperAdmin: true,
  },
  {
    email: "admin@gmail.com",
    password: "admin",
    isAdmin: true,
    isSuperAdmin: false,
  },
];

localStorage.setItem("users", JSON.stringify(users));

export default users;
