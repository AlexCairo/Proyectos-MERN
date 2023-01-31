const encryptPassword = require('encrypt-password')

const APP_KEY = 'uXdjA42RhEGyPKpIZZFEb3oIZL5ze77O';
const encryptedPassword1 = encryptPassword('admin123', 'signatrue');
const encryptedPassword2 = encryptPassword('admin123', APP_KEY);
console.log('Password encriptado con APP_KEY : ',encryptedPassword1);
console.log('Password encriptado con signatrue : ',encryptedPassword2);
