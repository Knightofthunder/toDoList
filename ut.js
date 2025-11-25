

// ...existing code...
// Do not import index.js here. Read stored value instead.
export function processInputValue() {
  return sessionStorage.getItem('userEmail') || '';
}
// ...existing code...