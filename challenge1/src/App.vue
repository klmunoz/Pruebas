<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Reto #1</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
nav {
    width: 15%;
    display: flex;
    justify-content: space-between;
}

  nav > a {
    text-decoration: none;
  }
</style>
