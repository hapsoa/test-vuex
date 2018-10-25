<template>
    <div id="ab">
        <button type="button" @click="sendStore">add</button>
    </div>
</template>

<script>
    export default {
        name: "ab",
        methods: {
            sendStore() {
                this.$store.commit('add', 5);
            }
        }
    }
</script>

<style scoped>

</style>
