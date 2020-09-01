<template>
    <div class="composer">
        <div v-if="contacts == ''">No Contacts to choose yet</div>
        <textarea v-else v-model="message" @keydown.enter="send" placeholder="Message..."></textarea>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: ''
            }
        },
        computed: {
          contacts(){
            return this.$store.getters.getContact
          },
        },
        methods: {
            send(e){
                e.preventDefault();

                if(this.message == ''){
                    return;
                }

                this.$emit('send', this.message);
                this.message = '';
            }
        },
    }
</script>

<style scoped>

</style>
