mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        _id
        name
        email
      }
      token
    }
  }
  