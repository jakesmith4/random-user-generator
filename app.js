import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const btn = get('.btn');

const showUser = async () => {
  // Get User From API
  // getUser().then((data) => console.log(data));
  const person = await getUser();
  displayUser(person);

  // Display User
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
