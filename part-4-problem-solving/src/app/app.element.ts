import "./app.element.css";
import { longestPalindrome } from "./palindrome.util";

export class AppElement extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
        <div class="bg-white px-6 py-32 lg:px-8">
  <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
    <p class="text-base font-semibold leading-7 text-indigo-600">Longest Palindromic Substring</p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Algorithm logic:</h1>
    <p class="mt-6 text-xl leading-8">
    The algorithm works by first creating a table to store the longest palindromic substring for each substring of the input string. The table is initialized by setting the diagonal elements to true, since any substring of length one is a palindrome.
</p>
    <div class="mt-10 max-w-2xl">
      <p>
      Then, the algorithm iterates over the table, calculating the longest palindromic substring for each substring. For each substring, the algorithm checks if the first and last characters are the same. If they are, and the substring is of length two, then the substring is a palindrome. If they are, and the substring is longer than two characters, then the substring is a palindrome if and only if the substring without the first and last characters is a palindrome.
</p>
    <p class="py-4">
      Finally, the algorithm finds the longest palindromic substring in the table and returns it.
</p>
    </div>
    <p style="color: red">Check browser console to see results :)</p>
  </div>
 </div>
      `;

    // Example usage:
    console.log("Longest Palindromic Substring:", longestPalindrome("babad")); // "bab" or "aba"

  }
}

customElements.define("app-root", AppElement);
