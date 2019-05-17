<template>
    <div>
        <p v-for="ask in fetchedAsks">
            <a :href="ask.url">{{ask.title}}</a>
            <small> {{ask.time_ago}} by
                <router-link :to="'/user/' + ask.user">{{ask.user}}</router-link>
            </small>
        </p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {

        computed: {
          ...mapGetters([
            'fetchedAsks'
          ])
        },
        created() {
          this.$store.dispatch('FETCH_ASKS');
        }
    }
</script>

<style>

</style>