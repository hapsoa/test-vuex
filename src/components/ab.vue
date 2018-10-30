<template>
    <div id="ab">
        <button type="button" @click="sendStore">add</button>
        <button type="button" @click="aysncSendStore">delete</button>
    </div>
</template>

<script>
    export default {
        name: "ab",
        methods: {
            sendStore() {
                this.$store.commit('add', 5);
            },
            aysncSendStore() {
                this.$store.dispatch('asdf', 5  ,7);
            }
        }
    }
</script>

<style scoped>

</style>
