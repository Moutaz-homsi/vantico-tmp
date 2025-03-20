function toCamelCase(name, flag = true) {
  let newname = name;
  newname = newname
    .toLowerCase()
    .replace(/-./g, (match) => match.charAt(1).toUpperCase());

  if (flag) newname = newname.replace(/^[a-z]/, (match) => match.toUpperCase());
  return newname;
}

// console.log(toCamelCase('hatem')) // Hatem
// console.log(toCamelCase('hatem-ahmed')) // HatemAhmed
// console.log(toCamelCase('hatem-ahmed',false)) // hatemAhmed

module.exports = { toCamelCase };
