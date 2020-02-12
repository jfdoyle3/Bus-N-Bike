# Bus and Bike
### Find a route to a destination use Bus to get the furthest point on bus route
### and bike to destination

## Run Project:
yarn dev


MERN Stack:

Mongo DB:

#NPM Packages used:
###Express

### colors:
 https://www.npmjs.com/package/colors
 
###secure-env:
 https://www.npmjs.com/package/secure-env
Running:
Local:
node ./node_modules/secure-env/dist/es5/lib/cli.js .env -s mySecretPassword

Global:
npx secure-env .env -s mySecretPassword

Using:
const secureEnv = require('secure-env');
global.env = secureEnv({secret:'mySecretPassword'});

global.env.variable (ex. global.env.DB_URI)

Creating a Secure .env file:
secure-env --option <VALUE> <file-path-which-is-to-be-encrypted>

--secret(-s) mySecret	Specify the secret Key which would be later used to decrypt the file.
--out 	(-o) .env.enc   The encrypted file path that would be created                           
--algo 	(-a)  aes256 The encryption algorithm that is to be used to encrypt the env file. 	
--decrypt(-d) 	prints the decrypted text to stdout

custom ENV path
require('secure-env')({path:'/custom/path/to/your/env/vars'});

Using Algo (default encrypt)
require('secure-env')({enc_algo:'aes256'});

Using Password
require('secure-env')({secret:'mySecretPassword'});
