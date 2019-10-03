<template>
  <div class="menu-icon">
    <div />
    <div />
    <div />
  </div>
</template>

<script>
export default {
  name: 'MenuIcon'
}
</script>

<style lang="scss" scoped>
.menu-icon {
    cursor: pointer;
    >div {
        width: 23px;
        height: 4px;
        background-color: #FF084F;
        margin: 4px 0;
        transition: 0.4s;
        border-radius: 50px;
    }
    >div:first-child {
        -webkit-transform: scaleX(0.8) translate(3px, 0);
        transform: scaleX(0.8) translate(3px, 0);
    }
    >div:nth-child(2) {
        -webkit-transform: scaleX(0.6) translate(7px, 0);
        transform: scaleX(0.6) translate(7px, 0);
    }
}
</style>
