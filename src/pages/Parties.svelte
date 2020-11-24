<script lang="ts">
  import TopBar from "../components/TopBar/TopBar.svelte";
  import PageController from "../components/Parties/PageController.svelte";
  import QuerySection from "../components/Parties/QuerySection.svelte";
</script>

<style>
  .parties-page {
    display: grid;

    /** NOTE: Not sure if this line does what I think it does yet. */
    grid-template-rows: 8vh 8vh 6vh minmax(76vh, auto);
    grid-auto-columns: auto;

    width: 100%;
    background-color: white;
    color: #434343;
  }
</style>

<div class="parties-page">
  <TopBar />
  <PageController />
  <QuerySection />
</div>
