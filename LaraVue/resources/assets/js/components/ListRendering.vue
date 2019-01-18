<template>
    <div class="wrapper">
        <ul>
            <li v-for="(item, index) in foods">
                {{item.name}} - {{index}}
            </li>
        </ul>
        <ul>
            <li v-for="(prop, key, index) in user">
                {{prop}} : {{key}} - {{index}}
            </li>
        </ul>
        <ul>
            <li v-for="n in 10">
                {{n}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListRendering",

        data() {
            return {
                foods: [
                    {name: "đồ ăn 1"},
                    {name: "đồ ăn 2"},
                    {name: "đồ ăn 3"}
                ],
                user: {
                    name: "dunglu",
                    age: "23"
                }
            }
        }
    }
</script>

<style scoped>

</style>