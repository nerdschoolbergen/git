const people = [
  { firstname: 'Arne', lastname: 'Arnesen' },
  { firstname: 'Magnus', lastname: 'Magnusson' },
  { firstname: 'Siri', lastname: 'Sirisen' },
  { firstname: 'Stefan', lastname: 'Stefanson' },
]

export const greeting = (firstname: string, lastname: string) => {
  console.log(`Hello ${firstname} ${lastname}`);
}

export const greetTheGang = () => {
  people.forEach((person) => {
    greeting(person.firstname, person.lastname);
  });
}
