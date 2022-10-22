

## Medusa Store Chrome Extension
[![simple-cover-template-3-1.jpg](https://i.postimg.cc/rwsvNdYN/simple-cover-template-3-1.jpg)](https://postimg.cc/XrMHVvWr)

## About

### Participants
Diganta Kr Banik - @developer-diganta

[Twitter](https://twitter.com/banik_diganta)

Discord - Diganta_07#0285

### Description

A configurable starter-template for a store-front chrome extension for any project using Medusa. It includes checking your orders and editing your account.

### Preview

![Demo](https://github.com/developer-diganta/medusa-store-chrome-extension/blob/main/MedusaDemo.gif)


## Set up Project

### Prerequisites
Before you start with the tutorial make sure you have

- [Node.js](https://nodejs.org/en/) v14 or greater installed on your machine
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Medusa Starter Pack with 3 main components - Backend, Store Front and Admin](https://docs.medusajs.com/usage/create-medusa-app)
- [Google Chrome Browser]()

### Install Project

1. Clone the repository:

```bash
git clone https://github.com/developer-diganta/medusa-store-chrome-extension
```

2. Go to the directory where you installed the medusa starter pack and from there go medusa.config file inside backend. There change the value for STORE_CORS as follows and save it:
```
const STORE_CORS = process.env.STORE_CORS || "chrome-extension://bpbeeekopgpgnlbecnpjpgdjmocaehmo,chrome-extension://bpbeeekopgpgnlbecnpjpgdjmocaehmo/index.html,http://localhost:8000,http://localhost:8001";
```
Note: If your chrome extension does not get connected to backend, change the id after chrome-extension in the above variable to the id of the extension your browser shows.

3. Now start the backend server by going to backend folder and using:
```
yarn start
```

4. If you want you can also start the store-front and admin as mentioned in docs or as follows:
 1. For store-front go to store-front folder and then inside package.json first edit the "dev" inside scripts as:
```
 "dev": "next dev -p 8001"
 ```
 2.Now run yarn run dev
 3. For admin, go to admin folder and run:
```
yarn start
```
 4. Now backend,store-front and admin are running on their respective ports.

5. Change directory to the cloned folder and install dependencies:

```bash
cd medusa-store-chrome-extension
yarn
```
6.  Go to env file and add ```PORT=8000```. Also add ```INLINE_RUNTIME_CHUNK=false``` to it. Start the app
```
yarn start
```
7. You should see a blank screen on port 8000. Now edit the address to localhost:8000/index.html. Incase it is running on a different port, be sure to add to the the env file in backend as in step 2.

8. Now to check the extension, run:
```
yarn run build
```
9.Now go to chrome and click on extensions from settings and go to manage extensions.

10. Enable developer mode on the top-right and then select load unpacked. Select the build folder which you recently build.

11. The extension should now be available.

## Resources
- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [Medusa Documentation](https://docs.medusajs.com/)
- [Extensions documentation](https://developer.chrome.com/docs/extensions/)
- [React](https://reactjs.org/)
