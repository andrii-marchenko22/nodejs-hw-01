import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Помилка при читанні контактів:', error.message);
    return null;
  }
};

export default readContacts;
