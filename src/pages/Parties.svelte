<script lang="ts">
  import TopBar from "../components/TopBar/TopBar.svelte";
  import PageController from "../components/Parties/PageController.svelte";
  import QuerySection from "../components/Parties/QuerySection.svelte";
</script>

<style>
  .parties-page {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 8vh 8vh 8vh 76vh;

    width: 100%;
    background-color: white;
    color: #434343;
  }
</style>

<div class="parties-page">
  <TopBar gridColEnd={6} />
  <PageController />
  <QuerySection />
</div>
