import "./app.element.scss";

export class AppElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="wrapper min-h-full">
  <header class="bg-[#132127] pb-24">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="relative flex items-center justify-center py-5 lg:justify-between">
        <!-- Logo -->
        <div class="absolute left-0 flex-shrink-0 lg:static">
          <a href="#">
            <span class="sr-only">PaySpace</span>
            <img class="hidden h-8 w-auto sm:block" src="https://www.payspace.com/wp-content/uploads/2020/05/payspace-logo-new.png" alt="PaySpace">
              <img class="h-8 w-auto sm:hidden" src="https://www.payspace.com/wp-content/uploads/2018/03/PS-FAVICON-NEW-2017.png" alt="PaySpace">
          </a>
        </div>

        <!-- Right section on desktop -->
        <div class="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
          <!-- Profile dropdown -->
          <div class="relative ml-4 flex-shrink-0">
            <div>
              <button type="button" class="relative flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png" alt="avatar">
              </button>
            </div>

            <!-- Dropdown menu -->
            <div id="openUserMenu" style="display: none;" class="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
            </div>
          </div>
        </div>

        <!-- Search -->
        <div class="min-w-0 flex-1 px-12 lg:hidden">
          <div class="mx-auto w-full max-w-xs">
            <label for="desktop-search" class="sr-only">Search</label>
            <div class="relative text-white focus-within:text-gray-600">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
              </div>
              <input id="desktop-search" class="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" name="search">
            </div>
          </div>
        </div>

        <!-- Menu button -->
        <div class="absolute right-0 flex-shrink-0 lg:hidden">
          <!-- Mobile menu button -->
          <button id="open-main-menu" type="button" class="relative inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" aria-expanded="false">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg id="svg-open" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg id="svg-close"  class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <!-- Navigation -->
      <div class="hidden border-t border-white border-opacity-20 py-5 lg:block">
        <div class="grid grid-cols-3 items-center gap-8">
          <div class="col-span-2">
            <nav class="flex space-x-4">
              <a href="#" class="text-white rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10" aria-current="page">Home</a>
              <a href="#" class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">Payspace</a>
              <a href="#" class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">Hire</a>
              <a href="#" class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">About Us</a>
              <a href="#" class="text-indigo-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10">Contact Us</a>
            </nav>
          </div>
          <div>
            <div class="mx-auto w-full max-w-md">
              <label for="mobile-search" class="sr-only">Search</label>
              <div class="relative text-white focus-within:text-gray-600">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input id="mobile-search" class="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" name="search">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div id="openMobileUserMenu" style="display: none;" class="lg:hidden">
      <div class="fixed inset-0 z-20 bg-black bg-opacity-25" aria-hidden="true"></div>
      <div class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition">
        <div class="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="pb-2 pt-3">
            <div class="flex items-center justify-between px-4">
              <div>
                <img class="h-8 w-auto" src="https://www.payspace.com/wp-content/uploads/2020/05/payspace-logo-new.png" alt="PaySpace">
              </div>
              <div class="-mr-2">
                <button id="close-main-menu" type="button" class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Close main menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Home</a>
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">PaySpace</a>
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Hire</a>
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">About Us</a>
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Contact Us</a>
            </div>
          </div>
          <div class="pb-2 pt-4">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png" alt="avatar">
              </div>
              <div class="ml-3 min-w-0 flex-1">
                <div class="truncate text-base font-medium text-gray-800">Brian Pooe</div>
                <div class="truncate text-sm font-medium text-gray-500">brianpooe@example.com</div>
              </div>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Settings</a>
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="wrapper__content -mt-24 pb-8">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="sr-only">Page title</h1>
      <!-- Main 3 column grid -->
      <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        <!-- Left column -->
        <div class="grid grid-cols-1 gap-4 lg:col-span-2">
          <section aria-labelledby="section-1-title">
            <h2 class="sr-only" id="section-1-title">Section title</h2>
            <div class="overflow-hidden rounded-lg bg-white shadow">
              <div class="p-6">
                <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim fugit itaque molestiae nobis odio quis reiciendis? Ad cum dignissimos eligendi et ipsam minima nulla omnis, possimus sunt, tempore ut!</span><span>A ad alias aliquid amet commodi cum eaque explicabo ipsum libero, numquam officiis quam reprehenderit sit ullam velit? Consequatur consequuntur fugit impedit ipsam itaque mollitia nemo quidem rem sapiente vero?</span><span>Ab animi aspernatur cum eveniet facere laborum libero maxime minus modi nemo, non pariatur quaerat rem repellat rerum sequi soluta, veniam! Asperiores debitis doloribus earum, magni natus quod recusandae saepe.</span><span>Amet aperiam aspernatur assumenda atque aut, beatae debitis distinctio dolorum ducimus est exercitationem fugiat hic illo iure mollitia obcaecati pariatur provident quae, quisquam recusandae repudiandae tempora tenetur velit vitae, voluptates!</span><span>A ab deserunt dicta doloribus dolorum ducimus eaque earum et maiores minima natus nostrum, numquam odit optio perferendis porro quae quas qui quis, quo recusandae repudiandae, temporibus ut voluptas voluptates.</span><span>Amet, at debitis doloribus ea eos esse fugiat inventore iste labore similique tempore ullam vitae voluptatem? Adipisci animi dolor eius iste omnis pariatur, perspiciatis quasi quia quidem repellendus, vel voluptatum?</p>
              </div>
            </div>
          </section>
        </div>

        <!-- Right column -->
        <div class="grid grid-cols-1 gap-4">
          <section aria-labelledby="section-2-title">
            <h2 class="sr-only" id="section-2-title">Section title</h2>
            <div class="overflow-hidden rounded-lg bg-white shadow">
              <div class="p-6">
               <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloremque ea impedit quae quaerat velit voluptate! Architecto incidunt nobis sunt vitae! Accusamus dolorem nam quasi qui repudiandae soluta suscipit, tempore!</span><span>Aut dolor, dolore error esse eum ex, expedita facere facilis molestias mollitia necessitatibus officia quaerat quibusdam suscipit tempora tenetur, ut. Ea officia temporibus totam. Assumenda error ipsa optio tenetur voluptatibus!. Assumenda error ipsa optio tenetur voluptatibus!. Assumenda error ipsa optio tenetur voluptatibus!</span></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
  <footer class="wrapper__footer">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left"><span class="block sm:inline">&copy; 2021 Brian Pooe, Inc.</span> <span class="block sm:inline">All rights reserved.</span></div>
    </div>
  </footer>
</div>
      `;

    const userMenuBtn: HTMLButtonElement = this.querySelector("#user-menu-button");

    const openMainMenuBtn: HTMLButtonElement = this.querySelector("#open-main-menu");
    const closeMainMenuBtn: HTMLButtonElement = this.querySelector("#close-main-menu");

    const openUserMenu: HTMLDivElement = this.querySelector("#openUserMenu");
    const openMobileUserMenu: HTMLDivElement = this.querySelector("#openMobileUserMenu");

    const toggleOpenUserMenu = () => {
      if (openUserMenu.style.display == "none") {
        openUserMenu.style.display = "block";
        return;
      }
      openUserMenu.style.display = "none";
    };

    const openMainMenu = () => {
      openMobileUserMenu.style.display = "block";
    };

    const closeMainMenu = () => {
      openMobileUserMenu.style.display = "none";
    };

    userMenuBtn?.addEventListener("click", toggleOpenUserMenu);

    openMainMenuBtn?.addEventListener("click", openMainMenu);
    closeMainMenuBtn?.addEventListener("click", closeMainMenu);
  }
}

customElements.define("app-root", AppElement);
