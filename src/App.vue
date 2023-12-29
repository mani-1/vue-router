<template>
  <header>
    <nav>
      <h1>Jobrouter</h1>
      <RouterLink to="/" exact>Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>