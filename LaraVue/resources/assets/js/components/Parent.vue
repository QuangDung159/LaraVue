<template>
    <div class="wrapper">
        <div class="welcome-text">
            This is parent
        </div>
        <Child></Child>
    </div>
</template>

<script>
    import Child from "./Child";

    export default {
        name: "Parent",
        components: {Child}
    }
</script>

<style scoped>
    .welcome-text {
        color: red;
    }
</style>