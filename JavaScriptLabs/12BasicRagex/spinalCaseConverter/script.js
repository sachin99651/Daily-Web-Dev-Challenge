function spinalCase(str) {

  const splitCamelCase = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return splitCamelCase
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}