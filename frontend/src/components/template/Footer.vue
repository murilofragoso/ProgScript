<template>
  <footer class="footer">
      <span>Desenvolvido <strong>5º ADS Noturno</strong>© 2020</span>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer{
        grid-area: footer;
        background-color: #DDD;
        color: #333;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 30px;
    }
</style>