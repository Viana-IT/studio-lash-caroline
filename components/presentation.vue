<template>
  <div class="presentation"></div>
  <a href="#servicos" class="presentation__button">Serviços</a>
</template>

<style lang="scss">
.presentation {
  width: 100%;
  height: 100vh;
  background-image: url('/images/presentation.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    content: '';
    display: flex;
    width: 100%;
    height: 100vh;
    background-image: url('/images/logo-presentation.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    transform: scale(0.6);
    animation: logo-presentation 1.2s ease;

    @keyframes logo-presentation {
      0% {
        transform: scale(0);
      }

      100% {
        transform: scale(0.6);
      }
    }

    @media (max-width: 768px) {
      background-image: url('/images/simbolo-presentation.png');
    }
  }

  &__button {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 2rem;
    background-color: $color-primary;
    color: $color-white;
    font-size: rem(20);
    font-weight: 300;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
    text-transform: uppercase;

    &:hover {
      background-color: $color-secondary;
    }
  }

}
</style>
