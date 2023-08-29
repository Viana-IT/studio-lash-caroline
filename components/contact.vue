<template>
  <section class="contact" id="contato">
    <h1>Entre em Contato</h1>
    <div class="contact__content">
      <form class="contact__form" @submit.prevent="">

        <div class="contact__form_group">
          <label for="name">Nome:</label>
          <input type="text" id="name">
        </div>

        <div class="contact__form_group">
          <label for="name">Telefone: </label>
          <input type="text" id="name">
        </div>

        <div class="contact__form_group">
          <label for="name">Assunto: </label>
          <input type="text" id="name">
        </div>

        <div class="contact__form_group">
          <label for="name">Mensagem: </label>
          <textarea id="message" rows="4" cols="33"></textarea>
        </div>

      </form>

      <div class="contact__info">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6454312003143!2d-46.87045972788143!3d-23.545251914147972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0107128ef603%3A0xce9d147937596714!2sR.%20Montevid%C3%A9u%2C%2060%20-%20Ch%C3%A1caras%20do%20Peroba%2C%20Barueri%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1692991214827!5m2!1spt-BR!2sbr"
          width="600" height="450" allowfullscreen="true" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  background-color: $color-secondary-light;
  padding: 48px 0;
  text-align: center;

  h1 {
    font-size: rem(36);
    font-weight: 700;
    margin-bottom: 48px;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: rem(32);
  }

  &__form {
    width: 100%;
    max-width: rem(640);
  }

  &__form_group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-bottom: 24px;

    label {
      font-size: rem(16);
      font-weight: 700;
      text-align: left;
    }

    input,
    textarea {
      padding: 8px;
      width: 100%;
      max-width: rem(300);
      transition: border 0.3s ease-in-out;

      &:focus {
        outline: none;
        border: $color-primary 2px solid;
      }


    }
  }

  &__info {
    width: 100%;

    iframe {
      border: none;
      width: 100%;
    }
  }
}
</style>

