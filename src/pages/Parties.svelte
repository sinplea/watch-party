<script lang="ts">
  import TopBar from "../components/TopBar/TopBar.svelte";
</script>

<style>
  .parties-page {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 8vh 12vh 80vh;

    width: 100%;
    background-color: white;
    color: #434343;
  }
</style>

<div class="parties-page">
  <TopBar gridColEnd={5} />
</div>
