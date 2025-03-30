const people = [
  { firstname: 'Magnus', lastname: 'Magnusson' },
  { firstname: 'Stefan', lastname: 'Stefanson' },
]

export const greeting = (firstname: string, lastname: string) => {
  console.log(`Hei hei ${firstname} ${lastname}`);
}

export const greetTheGang = () => {
  people.forEach((person) => {
    greeting(person.firstname, person.lastname);
  });
}
