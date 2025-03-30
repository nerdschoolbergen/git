const elements = [
  { firstname: 'Arne', lastname: 'Arnesen' },
  { firstname: 'Magnus', lastname: 'Magnusson' },
  { firstname: 'Guri', lastname: 'Gurisen' },
]

let createTable = () => {
  const peopleTable = elements.map(({ firstname, lastname}) => {
    return [firstname, lastname]
  });
  console.table(peopleTable, ["First name", "Last name"]);
}
