import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';
import createFakeContact from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    const allContacts = await readContacts();

    const newContacts = await createFakeContact();
    allContacts.push(newContacts);

    await writeContacts(allContacts);
    console.log(`✅ Згенеровано 1 контакт та додадано до існуючого масиву`);
  } catch (error) {
    console.log(`Сталася помилка при генерації контакту`, error.message);
    return null;
  }
};

addOneContact();
