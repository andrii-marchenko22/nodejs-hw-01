import writeContacts from '../utils/writeContacts.js';
import readContacts from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
    } else {
      console.log('Контакти не знайдено');
    }
  } catch (error) {
    console.log(
      `Сталася помилка при видаленні останнього контакту:`,
      error.message,
    );
    return null;
  }
};

removeLastContact();
