const Person = function(firstAndLast) {
  let fullName = firstAndLast
  this.getFirstName = () => fullName.split(' ')[0]
  this.getLastName = () => fullName.split(' ')[1]
  this.setFirstName = name => (fullName = `${name} ${this.getLastName()}`)
  this.setLastName = name => (fullName = `${this.getFirstName()} ${name}`)
  this.setFullName = newName => (fullName = newName)
  this.getFullName = () => fullName
}

const bob = new Person('Bob Ross')
bob.setLastName('Curry')
console.log(bob.getFullName())
