import Chance from "chance";

const chance = new Chance()
export const todosArray = []

for (let i=0; i < 10; i++) {
  todosArray.push({
    title: chance.word(),
    description: chance.paragraph({ sentences: 1 }),
    deadline: chance.integer({ min: 1, max: 30 }),
    completed: chance.bool()
  })
}

