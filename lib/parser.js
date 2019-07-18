function parseToObject(string) {
  const result = {};
  string
    .toString()
    .split('\r\n')
    .forEach(line => {
      let match;
      if ((match = line.match(/^(\w+)=(.*)$/))) {
        result[match[1]] = match[2];
      } else if (!line.match(/^\s*(#.*)?$/)) {
        throw new Error(`Line "${line}" is not Valid`);
      }
    });
  return result;
}

// function parseFromObject(obj) {}

module.exports = {
  // parseFromObject,
  parseToObject
};
