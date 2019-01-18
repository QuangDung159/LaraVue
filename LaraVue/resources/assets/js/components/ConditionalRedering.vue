<template>
    <div class="wrapper">
        <!-- If v-if == false -> trigger v-else -->
        <div class="block-1" v-if="isActive">
            this is block 1
        </div>
        <div class="block-2" v-else>
            this is block 2
        </div>
        <div class="block-3">
            this is block 3
        </div>
        <button @click="toggleActive()">Toggle</button>
    </div>
</template>

<script>
    export default {
        name: "ConditionalRedering",

        data() {
            return {
                isActive: true
            }
        },

        methods: {
            toggleActive() {
                if (this.isActive == true) {
                    this.isActive = false;
                } else {
                    this.isActive = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>