<template>
  <nav class="navbar navbar-expand">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/public/images/logo.png" alt="Logo Caroline Alves">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Serviços</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.navbar-brand {
  img {
    width: 100%;
    max-width: rem(96);
  }
}
</style>