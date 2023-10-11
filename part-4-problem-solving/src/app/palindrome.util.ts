/**
 * Finds the longest palindromic substring in a given string.
 *
 * @param {string} str The string to search for a palindrome in.
 * @returns {string} The longest palindromic substring found in the string, or an empty string if no palindrome is found.
 */
export const longestPalindrome = (str: string): string => {
  // If the string is empty or less than one character long, return an empty string.
  if (str.length < 1) {
    return "";
  }

  // Create a table to store the longest palindromic substring for each substring of the input string.
  const table: any[] = new Array(str.length);
  for (let i: number = 0; i < str.length; i++) {
    table[i] = new Array(str.length);
    for (let j = 0; j < str.length; j++) {
      table[i][j] = false;
    }
  }

  // Initialize the table.
  for (let i: number = 0; i < str.length; i++) {
    table[i][i] = true;
  }

  // Iterate over the table, calculating the longest palindromic substring for each substring.
  for (let i: number = 0; i < str.length; i++) {
    for (let j: number = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        if (j - i === 1) {
          table[i][j] = true;
        } else {
          table[i][j] = table[i + 1][j - 1];
        }
      }
    }
  }

  // Find the longest palindromic substring in the table.
  let longestPalindrome = "";
  for (let i: number = 0; i < str.length; i++) {
    for (let j: number = i; j < str.length; j++) {
      if (table[i][j] && (j - i + 1) > longestPalindrome.length) {
        longestPalindrome = str.substring(i, j + 1);
      }
    }
  }

  return longestPalindrome;
};
