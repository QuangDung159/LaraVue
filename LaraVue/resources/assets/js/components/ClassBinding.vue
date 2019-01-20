<template>
    <div class="wrapper">
        <div class="binding-html">
            <div class="text-title" :class="{active : isActive, bold : isBold}">
                This is text
            </div>
            <div>
                <button @click="isActive = !isActive">Active Text</button>
            </div>
            <div>
                <button @click="isBold = !isBold">Bold Text</button>
            </div>
            <div class="text-title" :class="classObject">
                This is text
            </div>
            <div>
                <button @click="classObject.active = !classObject.active">Active Text</button>
            </div>
            <div>
                <button @click="classObject.bold = !classObject.bold">Bold Text</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClassBinding",
        data() {
            return {
                isActive: false,
                isBold: false,
                classObject: {
                    active: true,
                    bold: true
                }
            }
        }
    }
</script>

<style scoped>
    .active {
        color: red;
    }

    .bold {
        font-weight: bold;
    }
</style>