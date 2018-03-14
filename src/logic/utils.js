function buildOutputObject(print, isError, addCarrot) {
  return {
    print: print,
    isError: isError,
    addCarrot: addCarrot
  };
}

function generateGibberish() {
  const chars =
    '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ¬!"£$%^&*()_+-=[]{};:@\'~#,<.>/?`¬/*';
  let gibberish = [];
  for (let counter = 0; counter <= 20; counter++) {
    const rand = Math.floor(Math.random() * chars.length + 0);
    gibberish.push(chars[rand]);
  }
  return gibberish;
}

export { buildOutputObject, generateGibberish };
