<script lang="ts">
  import SearchInput from "./QueryControls/SearchInput.svelte";
  import SearchButton from "./QueryControls/SearchButton.svelte";
  import SearchDropdown from "./QueryControls/SearchDropdown.svelte";
  import QueryResults from "./QueryResults/QueryResults.svelte";
</script>

<style>
  .query-section {
  }
</style>

<div class="query-section">
  <div class="top">
    <SearchInput />
    <SearchButton />
    <SearchDropdown />
  </div>

  <div class="bottom">
    <QueryResults />
  </div>
</div>
