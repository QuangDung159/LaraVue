<template>
    <div class="wrapper">
        This is my text
        <div>
            <div>
                Name: {{ person.name }}
            </div>
            <div>
                Nick name: {{ person.nickname }}
            </div>
            <div>
                <button @click="changeName()">Change Name</button>
            </div>
            <div>
                <button @click="changeNickname()">Change Nick Name</button>
            </div>
            <div>
                <button @click="changeNicknameProperly()">Change NIck name properly</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LifeCycle",
        data() {
            return {
                message: "Hello World",
                person: {
                    name: "dulu"
                }
            }
        },

        // beforeCreate() {
        //     console.log(this.message);
        // },
        //
        // created() {
        //     console.log(this.message);
        //     console.log(document.getElementById(wrapper).innerHTML);
        // },

        methods: {
            changeName() {
                this.person.name = "DungLu";
            },

            changeNickname() {
                this.person.nickname = Math.random().toString(36).substring(7);
                this.$forceUpdate();
            },

            changeNicknameProperly() {
                Vue.set(this.person, "nickname", "dulu");
            }
        }
    }
</script>

<style scoped>

</style>