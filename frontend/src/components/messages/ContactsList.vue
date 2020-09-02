<template>
    <div class="contacts-list">
        <div class="cl-worning" v-if="contacts == ''">{{ $t('cl-worning') }}</div>
        <ul v-else>
            <li v-for="(contact, index) in contacts" :key="contact.id" @click="selectContact(index, contact)" :class="{'selected' : index == selected}">
                <div class="avatar">
                    <img :src="contact.avatar">
                </div>
                <div class="contact">
                    <p class="name">{{ contact.name}}</p>
                    <p class="email">{{ contact.email}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: 0
            }
        },
        computed: {
          contacts(){
            return this.$store.getters.getContact
          },
            /*sortedContacts(){
                return _.sortBy(this.contacts, [(contact) => {
                    return contact.unread;
                }]).reverse();
            }*/
        },
        mounted() {
          this.$store.dispatch('getContact')
        },
        methods: {
            selectContact(index, contact){
                this.selected = index;

                this.$emit('selected', contact)
            }
        },
    }
</script>

<style scoped>

</style>
