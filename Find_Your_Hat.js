const prompt = require('prompt-sync')({sigint: true});
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field, x, y)
  {
    if (field === null) {
      this.field = []
    } else {
      this.field = field
    }
    this.x = x
    this.y = y
  }
  generateField(height, width, holePercentage) {
    this.field = []
    for (let i = 0; i < height; i++) {
      const row = []
      for (let j = 0; j < width; j++) {
        const cell = Math.random() < holePercentage ? hole : fieldCharacter
        row.push(cell)
      }
      this.field.push(row)
    }
    const hatX = Math.floor(Math.random() * height)
    const hatY = Math.floor(Math.random() * width)
    this.field[hatX][hatY] = hat
    this.field[0][0] = pathCharacter;
  }
  actualizeMap() {
    if (this.field[this.x][this.y] === '░') {
      this.field[this.x][this.y] = '*'
    } else {
      if (this.field[this.x][this.y] === '^') {
        console.log(`Congrats, you found your way!`)
        process.exit(0)
      }
    }
  }
  move(dx, dy) {
    const newX = this.x + dx
    const newY = this.y + dy
    if (
      newX < 0 ||
      newY < 0 ||
      newX >= this.field.length ||
      newY >= this.field[0].length ||
      this.field[newX][newY] === hole
    ) {
      console.log(`Game over!`)
      process.exit(0)
    } else {
      this.x = newX
      this.y = newY
      this.actualizeMap()
    }
  }
  print() {
    let direction = prompt('Which way? (r/l/u/d)')
    direction = direction.toLowerCase()
    if (direction === 'r') {
      this.move(0, 1)
    } else if (direction === 'l') {
      this.move(0, -1)
    } else if (direction === 'u') {
      this.move(1, 0)
    } else if (direction === 'd') {
      this.move(1, 0)
    } else {
      console.log(`Invalid direction!`)
    }
  }
}

const myField = new Field(null, 0, 0)
myField.generateField(5, 5, 0.2);

while (true) {
  for (let i = 0; i < myField.field.length; i++){
    for (let j = 0; j < myField.field[0].length; j++){
      process.stdout.write(myField.field[i][j])
    }
    console.log()
  }
  myField.print()
}