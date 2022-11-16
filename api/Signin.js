const login = [
  { id: 3, userId: 'kim', password: 1234 },
  { id: 2, userId: 'park', password: 1234 },
  { id: 1, userId: 'jang', password: 1234 },
];

const Signin = server => {
  server.get('/signin', (req, res) => {
    res.send(login);
  });

  server.post('/signin', (req, res) => {
    res.send(login);
  });
};

module.exports = {
  Signin,
};
