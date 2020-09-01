<template>
    <div class="conversation">
        <h1>{{ contact ? contact.name : $t('selectConv')}}</h1>
        <MessagesFeed :contact="contact" :messages="messages"/>
        <MessageComposer @send="sendText"/>
    </div>
</template>

<script>
    import MessagesFeed from './MessagesFeed';
    import MessageComposer from './MessageComposer'
    import axios from 'axios'
    export default {
        props: {
            contact: {
                type: Object,
                default: null
            },
        },
        computed: {
          messages(){
            return this.$store.getters.message
          }
        },
        methods: {
            sendText(text){
                if(!this.contact){
                    return;
                }

                axios.post('user/convrsation/send', {
                    contact_id: this.contact.id,
                    text: text
                }).then((res) => {
                    this.$store.dispatch('getConversation', this.contact.id)
                })
            }
        },
        components: {
            MessagesFeed,
            MessageComposer
        },
    }
</script>

<style scoped>

</style>
