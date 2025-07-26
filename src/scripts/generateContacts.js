import createFakeContact from '../utils/createFakeContact.js';
import writeContacts from '../utils/writeContacts.js';
import readContacts from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const allContacts = await readContacts();

    for (let i = 0; i < number; i++) {
      const newContacts = await createFakeContact();
      allContacts.push(newContacts);
    }
    await writeContacts(allContacts);
    console.log(
      `✅ Згенеровано ${number} нових контактів та додано до існуючого масиву`,
    );
  } catch (error) {
    console.log(`Сталася помилка при генерації контактів:`, error.message);
    return null;
  }
};

generateContacts(5);
