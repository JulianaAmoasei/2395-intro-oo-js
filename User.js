class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome
    this.email = email
    this.nascimento = nascimento
    this.role = role || 'estudante'
    this.ativo = ativo
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`
  }
}

const novoUser = new User('Juliana', 'j@j.com', '2021-01-01')
console.log(novoUser)
console.log(novoUser.exibirInfos())

console.log(User.prototype.isPrototypeOf(novoUser)) //true