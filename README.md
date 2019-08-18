# BademWallet
Open source wallet for using the Badem cryptocurrency:
<a href="https://wallet.badem.io">wallet.badem.io</a>
![BademWallet Screenshot](https://badem.io/bademwallet.png)
___

# Table of Contents
* [Application Structure](#application-structure)
* [Development Prerequisites](#development-prerequisites)
* [Development Guide](#development-guide)
* [Acknowledgements](#acknowledgements)

___

# Application Structure

The application is broken into a few separate pieces:

- [BademWallet](https://github.com/bademcurrency/bademwallet) - The main wallet application (UI + Seed Generation/Block Signing/Etc).
- [BademWallet-Server](https://github.com/bademcurrency/bademwallet-server) - Serves the Wallet UI and brokers public communication between the wallet and the Badem Node.
- [BademWallet-WS](https://github.com/bademcurrency/bademwallet-ws) - Websocket server that receives new blocks from the Badem node and sends them in real time to the wallet ui.


# Development Prerequisites
- Node Package Manager: [Install NPM](https://www.npmjs.com/get-npm)
- Angular CLI: `npm install -g @angular/cli`


# Development Guide
#### Clone repository and install dependencies
```bash
git clone https://github.com/bademcurrency/bademwallet
cd bademwallet
npm install
```

#### Run the wallet in dev mode
```bash
npm run wallet:dev
```

## Build Wallet (For Production)
Build a production version of the wallet for web:
```bash
npm run wallet:build
```
to host it locally, you may use
```bash
ng serve --host 0.0.0.0 --port 80 --disable-host-check
```
More info about "ng serve" commands: https://github.com/angular/angular-cli/wiki/serve

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Acknowledgements
Special thanks to the following!
- [numtel/nano-webgl-pow](https://github.com/numtel/nano-webgl-pow) - WebGL PoW Implementation
- [jaimehgb/RaiBlocksWebAssemblyPoW](https://github.com/jaimehgb/RaiBlocksWebAssemblyPoW) - CPU PoW Implementation
- [dcposch/blakejs](https://github.com/dcposch/blakejs) - Blake2b Implementation
- [dchest/tweetnacl-js](https://github.com/dchest/tweetnacl-js) - Cryptography Implementation

Special thanks to <a href="https://github.com/cronoh">cronoh</a> who created the <a href="https://github.com/cronoh/nanovault">NanoVault</a>. If you have found NanoVault useful and are feeling generous, you can donate at the following NANO address: `xrb_318syypnqcgdouy3p3ekckwmnmmyk5z3dpyq48phzndrmmspyqdqjymoo8hj`
