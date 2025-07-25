import { createFakeContact } from '../utils/createFakeContact.js';

import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const existentContacts = await readContacts();
  let createdContacts = [];
  for (let i = 0; i < number; i++) {
    createdContacts.push(createFakeContact());
    console.log(`Created ${i + 1} contact`);
  }
  const allContacts = [...existentContacts, ...createdContacts];
  await writeContacts(allContacts);
};

generateContacts(20);
