<template>
  <div class="navbar sticky top-0 z-50 backdrop-blur-xl outline-slate-900">
    <div class="navbar-start">
      <!-- Mobile view -->
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <!-- Dropdown SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <!-- Dropdown -->
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <!-- Mobile menu buttons -->
          <li><a @click="scrollToElement('hero__element')">About Me</a></li>
          <li><a @click="scrollToElement('skills__element')">Skills</a></li>
          <li><a @click="scrollToElement('projects__element')">Projects</a></li>
        </ul>
      </div>
      <!-- Cross-platform logo -->
      <div class="tooltip tooltip-bottom" data-tip="Christian Llupo">
        <a class="btn btn-ghost normal-case text-xl">jebediah47</a>
      </div>
    </div>
    <!-- Desktop view -->
    <div class="navbar-center hidden lg:flex">
      <!-- Horizontal menu -->
      <ul class="menu menu-horizontal p-0">
        <!-- Desktop menu buttons -->
        <li><a @click="scrollToElement('hero__element')">About Me</a></li>
        <li><a @click="scrollToElement('skills__element')">Skills</a></li>
        <li><a @click="scrollToElement('projects__element')">Projects</a></li>
      </ul>
    </div>
    <!-- Button on the end of the navbar -->
    <div class="navbar-end">
      <a class="btn btn-outline btn-success">Contact Me</a>
    </div>
  </div>
</template>
