import "./app.element.css";

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
           <div class="bg-white px-6 py-32 lg:px-8">
  <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
    <p class="text-base font-semibold leading-7 text-indigo-600">Code Review</p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">EJS Displaying list of items:</h1>
        <img class="my-4 bg-gray-50 object-cover" src="assets/codereview.png" alt="">
<ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
        <li class="flex gap-x-3">
          <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
          <span>I would use BEM css design it gives everyone on the project a declarative syntax they can share, so they're on the same page.</span>
        </li>
        <li class="flex gap-x-3">
          <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
          <span>It's a good practice to include error handling when working with templates. For instance property name is undefined </span>
        </li>
        <li class="flex gap-x-3">
          <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
          <span>Include fall back text for when items are not found or the array is empty. Example text "No items found."</span>
        </li>
         <li class="flex gap-x-3">
          <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
          <span>Ensure that your generated HTML is accessible by using appropriate ARIA attributes and semantic HTML elements.</span>
        </li>
        <li class="flex gap-x-3">
          <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
          </svg>
          <span>Depending on the size of the items array, rendering a large number of list items can impact performance. If you anticipate working with a large dataset, consider a for...loop instead of forEach</span>
        </li>
      </ul>
      <p class="text-indigo-600 text-sm my-8 text-center">Overall, the code snippet you provided is well-written and easy to understand. </p>
  </div>
 </div>
      `;
  }
}

customElements.define("app-root", AppElement);
