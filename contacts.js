const NUM_CONTACTS = 300;

const firstNames = ["Abby", "Bob", "Charles", "David", "Ernie", "Fabio", "George", "Joe", "Bob", "Carl", "Reynold","Debbie", "Marge", "Claire", "Melissa", "Natalie", "Olga", "Rachelle", "Sam", "Zebediah"]
const lastNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Random number generator (between min and max)
const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

// generate a name
const generateName = () => `${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)]}.`

const generatePhone = () => `1-${rand(999, 100)}-${rand(999, 100)}-${rand(9999, 1000)}`

const createContact = () => ({name: generateName(), phone: generatePhone()})

export const compareNames = (contact1, contact2) => contact1.name > contact2.name

const addKeys = (val, key) => ({key, ...val})

export default Array.from({length: NUM_CONTACTS}, createContact).map(addKeys)