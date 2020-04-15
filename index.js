const createTable = () => {
  let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 123456789';
  let table = [];
  for (let i = 0; i < 62; i++) {
    let temp = [];
    for (let j = 0; j < 62; j++) {
      temp.push(abjad[j + i]);
    }
    table.push(temp);
  }
  return table;
}

const makePassphrase = (message, passphrase) => {
  let key = '';
  let index = 0;
  let i = 0;
  while (i < message.length) {
    key += passphrase[index];
    if (index === passphrase.length - 1) {
      index = 0;
    } else {
      index++;
    }
    i++
  }
  return key;
}

const checkAbjad = (message, passphrase) => {
  const abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 123456789';
  for (let i = 0; i < message.length; i++) {
    let flag = false;
    for (let j = 0; j < abjad.length; j++) {
      if (message[i] === abjad[j]) {
        flag = true;
      }
    }
    if (!flag) {
      throw new Error('Please Input Alphabet and Number Only');
    }
  }
  for (let i = 0; i < passphrase.length; i++) {
    let flag = false;
    for (let j = 0; j < abjad.length; j++) {
      if (passphrase[i] === abjad[j]) {
        flag = true;
      }
    }
    if (!flag) {
      throw new Error('Please Input Alphabet and Number Only');
    }
  }
};

const cipher = (message, passphrase) => {
  checkAbjad(message, passphrase);
  let table = createTable();
  let key = makePassphrase(message, passphrase);
  let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 123456789';
  let encryptedMessage = '';
  for (let i = 0; i < message.length; i++) {
    let indexI
    let indexJ
    for (let j = 0; j < abjad.length; j++) {
      if (message[i] === abjad[j]) {
        indexI = j;
        break;
      }
    }
    for (let j = 0; j < abjad.length; j++) {
      if (key[i] === abjad[j]) {
        indexJ = j;
        break;
      }
    }
    encryptedMessage += table[indexI][indexJ];
  }
  return encryptedMessage;
};

const decipher = (message, passphrase) => {
  let table = createTable();
  let key = makePassphrase(message, passphrase);
  let abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 123456789';
  let decryptedMessage = '';
  for (let i = 0; i < message.length; i++) {
    let indexJ = abjad.indexOf(key[i]);
    for (let j = 0; j < table.length; j++) {
      if (table[j][indexJ] === message[i]) {
        decryptedMessage += table[j][0];
        break;
      }
    }
  }
  return decryptedMessage;
};

module.exports = { cipher, decipher };