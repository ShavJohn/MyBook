<template>
    <div class="feed" ref="feed">
        <ul v-if="contact">
            <li v-for="message in messages" :class="`message ${message.to == contact.id ? 'sent' : 'received'}`" :key="message.id">
                <div class="text">
                    {{ message.text }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            contact: {
                type: Object
            },
        },
        computed: {
          messages(){
            return this.$store.getters.message
          }
        },
        methods: {
            scrollToBottem(){
                setTimeout(() => {
                    this.$refs.feed.scrollTop = this.$refs.feed.scrollHeight - this.$refs.feed.clientHeight;
                }, 50);
            }
        },
        watch: {
            contact(contact){
                this.scrollToBottem();
            },
            messages(messages){
                this.scrollToBottem();
            }
        },
    }
</script>

<style scoped>

</style>
