function jsonValueKey(jsonString, key) {
  const obj = JSON.parse(jsonString);
  return obj[key];
}


const json = '{"name":"michel","adresse":"chez michel et michel","city":"Montpellier"}';

console.log(jsonValueKey(json, "city"));