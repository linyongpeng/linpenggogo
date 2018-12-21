<template>
    <transition>
        <slot></slot>
    </transition>  
</template>

<script>
export default {
  name: 'Animation',
}
</script>

<style lang="less" scoped>
    .v-enter-to, .v-leave {
        opacity: 1;
    }
    .v-enter,.v-leave-to{
        opacity: 0;
    }
    .v-enter-active, .v-leave-active {
      transition:1s;
    }
</style>
