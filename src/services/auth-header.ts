export default function authHeader() {
  const storedUser = localStorage.getItem('user');
  let user = JSON.parse(storedUser ? storedUser : "");

  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
