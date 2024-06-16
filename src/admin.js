class User {
  constructor(username, password) {
    this.username = username
    this.password = password
  }

  checkCredentials(username, password) {
    return this.username === username && this.password === password
  }
}
