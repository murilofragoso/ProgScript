<template>
    <header class="header">
        <a class="toggle">
            <i class="fas fa-arrow-down"></i>
        </a>
        <h1 class="title">
            {{ title }}
        </h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
        hideToggle: Boolean
    }
}
</script>

<style>
    .header{
        grid-area: header;
        background: linear-gradient(to right, #56CCF2, #2F80ED);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>