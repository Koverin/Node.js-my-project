const fs = require("fs/promises");

const contactsPath = require("./db/contacts.json");
console.log(contactsPath);

const readContacts = async () => {
  const data = await fs.readFile("./db/contacts.json");
  console.log(data);
};

readContacts();

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
