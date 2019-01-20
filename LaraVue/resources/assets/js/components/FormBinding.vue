<template>
    <div class="wrapper">
        <div class="form-input-binding">
            <div class="input-form">
                <input type="text" v-model="message" name="">
            </div>
            <div class="text">
                {{message}}
            </div>
        </div>
        <hr>
        <div class="input-form">
            <input type="checkbox" v-model="message1" name="">Check
        </div>
        <div class="form-input-binding">
            <div class="text">
                {{message1}}
            </div>
        </div>
        <hr>
        <div class="input-form">
            <input type="radio" v-model="mess2" value="one">
            <input type="radio" v-model="mess2" value="two">
        </div>
        <div class="form-input-binding">
            <div class="text">
                {{mess2}}
            </div>
        </div>
        <hr>
        <div class="input-form">
            <select v-model="mess3">
                <option disabled="">Choose One</option>
                <option :value="values.one">One</option>
                <option :value="values.two">Two</option>
            </select>
        </div>
        <div class="form-input-binding">
            <div class="text">
                {{mess3}}
            </div>
        </div>
        <hr>
        <div class="form-input-binding">
            <div class="input-form">
                <input type="text" v-model.lazy="mess4" name="">
            </div>
            <div class="text">
                {{mess4}}
            </div>
        </div>
        <hr>
        <div class="form-input-binding">
            <div class="input-form">
                <!-- cast to number -->
                <input type="number" v-model.number="mess5" name="">
            </div>
            <div class="text">
                {{mess5}}
            </div>
        </div>
        <hr>
        <div class="event-handling">
            <form @submit.prevent>
                <button type="submit" @click="sayHello()">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FormBinding",
        data() {
            return {
                message: "",
                message1: false,
                mess2: "two",
                mess3: "one",
                values: {
                    one: "one",
                    two: "two"
                },
                mess4: "",
                mess5: ""
            }
        },

        methods: {
            sayHello() {
                alert("Hello");
            }
        }
    }
</script>

<style scoped>

</style>