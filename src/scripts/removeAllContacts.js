import writeContacts from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
  } catch (error) {
    console.error(
      'Сталася помилка під час видалення всіх контактів:',
      error.message,
    );
    return null;
  }
};

removeAllContacts();
