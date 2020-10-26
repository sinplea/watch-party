<script lang="ts">
    import TopBarSearch from './TopBarSearch.svelte';
    import TopBarOptionButton from './TopBarOptionButton.svelte';
</script>

<div class="top-bar-wrapper">
    <div class="logo">Watch Party</div>
    <TopBarSearch></TopBarSearch>
    <TopBarOptionButton></TopBarOptionButton>
</div>

<style>
    .top-bar-wrapper {
        display: grid;
        grid-template-columns: 10% 70% 20%;
        width: 100%;
        height: 100px;
        background-color: #EB3636;
    }

    .logo {
        grid-column-start: 1;
        grid-column-end: 2;
        align-self: center;
        padding-left: 20px;
        justify-self: center;
        font-family: 'Mukta', sans-serif;
        font-size: 15px;
        font-weight: 700;
        color: #ffffff;
    }
</style>