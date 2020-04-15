# npm-vigenere-cipher

npm-vigenere-cipher is a package to cipher and decipher a secret code using passphrase.

## Installation

Installation is done using the [npm install command](https://docs.npmjs.com/downloading-and-installing-packages-locally):

```bash
npm install npm-vigenere-cipher
```

## Usage

```python
const { cipher, decipher } = require('npm-vigenere-cipher');

const message = 'Secret Code.';
const passphrase = 'foobar';
const test = cipher(message, passphrase);
console.log(test);
  //expected output = xGEG4YTqQ44q
console.log(decipher(test, passphrase));
  //expected output = Secret Code
```

This package only support message and passphrase that contain alphabet, number, space, ".", and ","