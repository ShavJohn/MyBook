<template>
    <div class="chat-app">
        <Conversation :contact="selectContact" :messages="messages" @new="saveNewMassage"/>
        <ContactsList :contacts="contacts" @selected="startConversationWith"/>
    </div>
</template>

<script>
    import Conversation from './Conversation';
    import ContactsList from './ContactsList';
    export default {
        components: {
            Conversation,
            ContactsList
        },
        data() {
            return {
                selectContact: null,
                messages: [],
                //contacts: [],
            }
        },
        computed: {
          contacts(){
            return this.$store.getters.getContact
          },
        },
        mounted() {
          this.$store.dispatch('getContact')
            /*Echo.private(`messages.${this.user.id}`).listen('NewMessage', (e) => {
                this.handelIncoming(e.message);
            })*/
        },
        methods: {
            startConversationWith(contact){
               // this.updateUnreadCount(contact, true);

                this.$store.dispatch('getConversation', contact.id).then((res) => {
                    this.selectContact = contact;
                })
            },
            saveNewMassage(message){
                this.messages.push(message);
                console.log(this.messages)
            },
            handelIncoming(message){
                if(this.selectContact && message.from == this.selectContact.id){
                    this.saveNewMassage(message);
                    return;
                }
                //this.updateUnreadCount(message.from_contact, false);
            },
            /*updateUnreadCount(contact, reset){
                this.contacts = this.contacts.map((single) => {
                    if(single.id !== contact.id){
                        return single;
                    }

                    if(reset)
                        single.unread = 0;
                    else
                        single.unread += 1;

                    return single;

                })
            }*/
        },
    }
</script>
<style lang="scss" scoped>

</style>
