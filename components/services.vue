<template>
  <section class="services" id="servicos">
    <h1>Serviços</h1>
    <div class="services__content">
      <ul class="services__list">
        <li class="services__service">
          <h2>Extensão de Cílios</h2>
          <p>
            É um procedimento estético que visa a aumentar o volume de fios, sem a necessidade de utilizar maquiagem (ou
            cílios postiços). Além disso, ele proporciona, também, o preenchimento de falhas, intensificando o olhar.
          </p>
          <p>Procedimentos: </p>
          <ul>
            <li>Fio a Fio</li>
            <li>Volume Brasileiro</li>
            <li>Volume Egipcio</li>
            <li>Volume Híbrido</li>
            <li>Fox Eyes</li>
            <li>Volume Russo</li>
          </ul>
        </li>
        <li class="services__service">
          <h2>Sobrancelha</h2>
          <p>

            Transforme suas sobrancelhas com meu serviço especializado: design personalizado, limpeza detalhada e henna
            para realçar e preencher de forma autêntica, intensificando seu olhar natural. Conquiste um olhar confiante
            com um toque único.
          </p>
          <p>Procedimentos: </p>
          <ul>
            <li>Design</li>
            <li>Limpeza</li>
            <li>Henna</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
  background-color: $color-primary-light;
  padding: 48px 0;
  text-align: center;
  color: $color-black;

  h1 {
    font-size: rem(36);
    font-weight: 700;
    margin-bottom: 48px;
  }

  &__list {
    display: flex;
    justify-content: space-around;
  }

  &__service {
    width: 100%;
    padding: 0 24px;

    p {
      margin-top: 16px;
      font-size: rem(16);
      line-height: rem(24);
    }

    ul {
      margin-top: 16px;
      font-size: rem(16);
      line-height: rem(24);
    }
  }
}
</style>

