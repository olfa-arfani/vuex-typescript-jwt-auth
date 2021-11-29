# Vue/Vuex Typescript example: JWT Authentication


## Note:
Open `src/services/auth-header.js` and modify `return` statement for appropriate back-end.

```js
export default function authHeader() {
  const storedUser = localStorage.getItem('user');
  let user = JSON.parse(storedUser ? storedUser : "");

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
