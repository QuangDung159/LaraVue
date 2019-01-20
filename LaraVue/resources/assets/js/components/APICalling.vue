<!--<template>-->
<!--<div class="wrapper">-->
<!--<div class="api-calling">-->
<!--<div class="error" v-if="errors.length">-->
<!--<span v-for="error of errors">-->
<!--{{error}}-->
<!--</span>-->
<!--</div>-->
<!--<div class="create-form">-->
<!--<div class="product-name-input">-->
<!--<input type="text" v-model="product.name" name="name">-->
<!--</div>-->
<!--<div class="product-name-input">-->
<!--<input type="text" v-model.number="product.price" name="price">-->
<!--</div>-->
<!--<div class="button-create">-->
<!--<button @click="createProduct">-->
<!--Create-->
<!--</button>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: "APICalling",-->

<!--data() {-->
<!--return {-->
<!--product: {-->
<!--name: "",-->
<!--price: 0-->
<!--},-->
<!--errors: []-->
<!--}-->
<!--},-->

<!--methods: {-->
<!--createProduct() {-->
<!--// Tạo post request đến route /products-->
<!--// với 2 tham số là name và price-->
<!--axios.post("/products", {-->
<!--name: this.product.name,-->
<!--price: this.product.price-->
<!--})-->
<!--.then(response => {-->
<!--console.log(response.data.result);-->
<!--})-->
<!--.catch(error => {-->
<!--this.errors = []-->
<!--if (error.response.data.errors.name) {-->
<!--this.errors.push(error.response.data.errors.name);-->
<!--}-->
<!--if (error.response.data.errors.price) {-->
<!--this.errors.push(error.response.data.errors.price)-->
<!--}-->
<!--})-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
    <div class="api-calling">
        <div class="error" v-if="errors.length">
           <span v-for="err in errors">
               {{ err }}
           </span>
            <hr>
        </div>
        <div class="create-form">
            <div class="product-name-input">
                <input type="text" v-model="product.name" name="name">
            </div>
            <div class="product-name-input">
                <input type="text" v-model.number="product.price" name="price">
            </div>
            <div class="button-create">
                <button @click="createProduct">Create</button>
            </div>
        </div>
        <hr>
        <div class="list-product">
            <h2>List Product</h2>
            <div class="product-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Data Created</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in list_product">
                    <td>{{product.id}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.created_at}}</td>
                </tr>
                </tbody>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from "moment";

    export default {
        data() {
            return {
                product: {
                    name: '',
                    price: 0
                },
                errors: [],
                list_product: []
            }
        },
        methods: {
            createProduct() {
                axios.post('/products', {name: this.product.name, price: this.product.price})
                    .then(response => {
                        console.log(response.data.result);
                        this.list_product.push({
                                id: this.list_product.length + 1,
                                name: this.product.name,
                                price: this.product.price,
                                created_at: moment().format("YYYY-MM-DD HH:mm:ss")
                            }
                        )
                    })
                    .catch(error => {
                        this.errors = [];
                        if (error.response.data.errors.name) {
                            this.errors.push(error.response.data.errors.name);
                        }
                        if (error.response.data.errors.price) {
                            this.errors.push(error.response.data.errors.name)
                        }
                    })
            },

            getListProduct() {
                axios.get("/products")
                    .then(response => {
                        this.list_product = response.data
                    })
                    .catch(error => {
                        this.errors = [];
                        if (error.response.data.errors.name) {
                            this.errors.push(error.response.data.errors.name);
                        }
                        if (error.response.data.errors.price) {
                            this.errors.push(error.response.data.errors.name)
                        }
                    })
            },
        },
        created() {
            this.getListProduct();
        }
    }
</script>

<style lang="scss" scoped>
    .error {
        span {
            color: red;
        }
    }
</style>