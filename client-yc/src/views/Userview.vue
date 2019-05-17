<template>
    <div>
        <p>Name :: {{fetchedUserInfo.id}}</p>
        <p>Karma :: {{fetchedUserInfo.karma}}</p>
        <p>Created :: {{fetchedUserInfo.created}}</p>
        <p>About :: {{fetchedUserInfo.about}}</p>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters([
              'fetchedUserInfo'
            ])
        },
        created() {
          this.$store.dispatch('FETCH_USERINFO', this.$route.params.id)
        }
    }
</script>

<style>

</style>