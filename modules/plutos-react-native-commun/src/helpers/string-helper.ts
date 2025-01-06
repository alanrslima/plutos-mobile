export function randomUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, char => {
    const random = (Math.random() * 16) | 0; // Random number between 0 and 15
    const value = char === 'x' ? random : (random & 0x3) | 0x8; // Ensure `y` bits are set correctly
    return value.toString(16); // Convert to hexadecimal
  });
}
