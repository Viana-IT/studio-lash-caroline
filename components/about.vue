<template>
  <section class="about" id="sobre">
    <h1>Sobre Mim</h1>
    <div class="about__content">
      <div class="about__description">
        <p>
          Bem-vindo Cilhudas e não Cilhudas, sou Caroline, apaixonada por realçar a beleza natural por meio da extensão de
          cílios e sobrancelhas.
          Com 27 anos, gerencio meu próprio estúdio, o Studio Lash Caroline, onde equilibro minha vida pessoa e minha
          paixão por esse ramo com a vida ao
          lado do meu maravilhoso marido, Daniel Oliveira, e de nosso filho Felipe de 9 anos.
        </p>
        <p>
          Minha jornada é uma expressão do meu amor pela arte da beleza. Na extensão de cílios e sobrancelhas, aplico
          minha criatividade para elevar a autoestima dos clientes. Este espaço online exibe meu trabalho, projetos
          passados e novidades, todos carregados de dedicação. Se você está em busca de realçar sua beleza única, estou
          aqui para auxiliar!
        </p>
        <p>
          Agradeço por explorar meu site. Para agendamentos ou conhecer mais sobre meus serviços, não hesite em entrar em
          contato. Siga-me nas redes sociais para dicas sobre beleza e autocuidado. Mal posso esperar para conhecê-la
          pessoalmente em breve!
        </p>
      </div>

      <div class="about__image">
        <img src="images/caroline.jpg" alt="">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  padding: 48px 0;
  text-align: center;

  h1 {
    font-size: rem(36);
    font-weight: 700;
    margin-bottom: 48px;
  }

  &__content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(32);
  }

  &__description {
    width: 100%;

    p {
      margin: 0 auto 16px auto;
      width: 100%;
      line-height: 24px;
      padding-inline: 16px;
    }

  }

  &__image {
    width: 100%;

    img {
      width: 100%;
      max-width: 420px;
      border-radius: 50%;
      margin: 0 auto;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>

