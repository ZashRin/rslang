export function saveUserData(content) {
  const { token, refreshToken, userId, name } = content;
  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('userId', userId);
  localStorage.setItem('name', name);
  localStorage.setItem('auth', true);
}

export function getToken() {
  return localStorage.getItem('token');
}

export function getRefreshToken() {
  return localStorage.getItem('refreshToken');
}

export function getUserId() {
  return localStorage.getItem('userId');
}

export function getName() {
  return localStorage.getItem('name');
}

export function getAuth() {
  return localStorage.getItem('auth');
}

export function clearStorage() {
  localStorage.clear();
}
