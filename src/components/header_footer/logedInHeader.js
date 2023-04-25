import { useState } from "react";

export default function LogedHeader(){
  const [menu, setMenu]=useState(false);
    function logout() {
      localStorage.removeItem("token");
        window.location.assign("/");
       };
       function openMenu(){
        if(menu!=true){
          setMenu(true);
        }else{
          setMenu(false);
        }
       }
    return(
    <div>
    <header class="absolute inset-x-0 top-0 z-20">
          <nav class="flex items-center justify-between p-6 lg:px-8 bg-gradient-to-r from-indigo-200 via-gray-200 to-green-100" aria-label="Global">
            <div class="flex lg:flex-1">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <p class="text-lg text-green-600" style={{ fontSize: `2em` }}>LOGO</p>
              </a>
            </div>
            <div class="flex lg:hidden">
              <button type="button" onClick={()=>openMenu()} class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
              <a href="../" class="text-md font-semibold leading-6">Home</a>
      
              <a href="/countries" class="text-md font-semibold leading-6 text-gray-900">Countries</a>
      
              <a href="/users" class="text-md font-semibold leading-6 text-gray-900">Users</a>
      
              <a href="/profile" class="text-md font-semibold leading-6 text-gray-900">Profile</a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" onClick={()=>logout()} class="text-md font-semibold leading-6 text-red-600">Log out <span aria-hidden="true">&rarr;</span></a>
            </div>
          </nav>
          {menu && 
          <div class="lg:hidden" role="dialog" aria-modal="true">
            <div class="fixed inset-0 z-50"></div>
            <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <p class="text-lg text-green-600" style={{ fontSize: `2em` }}>LOGO</p>
                </a>
                <button type="button" onClick={()=>openMenu()} class="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                  <div class="space-y-2 py-6">
                    <a href="../" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
      
                    <a href="/countries" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Countries</a>
      
                    <a href="/users" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Users</a>
      
                    <a href="/profile" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Profile</a>
                  </div>
                  <div class="py-6">
                    <a href="#" onClick={()=>logout()} class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
}
        </header>
    </div>
    )
    }