import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const existentContacts = await readContacts();
  await writeContacts(existentContacts.slice(0, existentContacts.length - 1));
};

removeLastContact();
