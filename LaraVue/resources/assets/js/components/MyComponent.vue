<template>
    <div class="wrapper">
        <div class="my-component">{{message}}</div>
        <!--<div class="my-component">{{sayHello()}}</div>-->
        <div>
            <button @click="sayHello">Click Me</button>
        </div>
        <div>
            <button @click="changedMess">Click Me</button>
            <button @click="changedText">Change Text</button>
            <button @click="changedType">Change Type</button>
        </div>
        <div>
            {{reverseMessage}}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "Text",
                message1: "dunglu",
                mess: {
                    type: "greeting",
                    text: "How are you?"
                }
            }
        },

        methods: {
            sayHello() {
                alert("Hello World");
                this.message = "You clicked";
                return "this function return value";
            },

            changedMess() {
                this.mess.text = "New mess"
            },

            changedText() {
                this.mess.text = "changed text"
            },

            changedType() {
                this.mess.type = "change type"
            }
        },

        computed: {
            reverseMessage() {
                return this.message.split('').reverse().join('');
            },

            getType() {
                return this.mess.type;
            },

            // Action changedText change mess.text -> trigger getText()
            getText() {
                return this.mess.text;
            }
        },

        watch: {
            message() {
                console.log(this.message);
            },

            reverseMessage() {
                console.log(this.reverseMessage);
            },

            mess: {
                handler: function () {
                    console.log("Changed")
                },
                deep: true
            },

            getType() {
                console.log("type changed");
            },

            // Computed getText changed -> trigger watch
            getText() {
                console.log("text changed");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .my-component {
        color: red;
    }
</style>