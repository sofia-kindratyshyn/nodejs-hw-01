import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  const existentContacts = await readContacts();
  existentContacts.push(createFakeContact());
  return await writeContacts(existentContacts);
};

addOneContact();
