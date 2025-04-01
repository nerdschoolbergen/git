const elements = [
  { firstname: 'Arne', lastname: 'Arnesen' },
  { firstname: 'Magnus', lastname: 'Magnusson' },
  { firstname: 'Siri', lastname: 'Sirisen' },
  { firstname: 'Stefan', lastname: 'Stefanson' },
  { firstname: 'Geir', lastname: 'Geirsen' },
  { firstname: 'Guri', lastname: 'Gurisen' },
]

let createTable = () => {
  const peopleTable = elements.map(({ firstname, lastname}) => {
    return [firstname, lastname]
  });
  console.table(peopleTable, ["Fornavn", "Etternavn"]);
}
