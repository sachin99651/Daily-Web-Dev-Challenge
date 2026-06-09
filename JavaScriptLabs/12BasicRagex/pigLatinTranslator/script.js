function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(str[0])) {
    return str + 'way';
  }

  const consonantClusterMatch = str.match(/^[^aeiou]+/);
  const consonantCluster = consonantClusterMatch ? consonantClusterMatch[0] : '';

  if (consonantCluster === str) {
    return str + 'ay';
  }

  return str.slice(consonantCluster.length) + consonantCluster + 'ay';
}