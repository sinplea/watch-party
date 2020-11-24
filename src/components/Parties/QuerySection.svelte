<script lang="ts">
  import SearchInput from "./QueryControls/SearchInput.svelte";
  import SearchButton from "./QueryControls/SearchButton.svelte";
  import SearchDropdown from "./QueryControls/SearchDropdown.svelte";
  import QueryResults from "./QueryResults/QueryResults.svelte";
  import MockData from "../../lib/MockResponses/RoomHTMLElement";
  import { fill } from "lodash";
  import type { RoomHTMLElementData } from "../../lib/Interfaces/RoomInterfaces";

  const mockData = fill(Array(10), MockData);

  let query: string;
  let filter: string;
  let response: Array<RoomHTMLElementData> = [mockData];

  // TODO:
  function search(): Array<RoomHTMLElementData> {
    return [];
  }

  function updateQuery(e: CustomEvent): void {
    query = e.detail.query;
  }

  function updateFilter(e: CustomEvent): void {
    filter = e.detail.filter;
  }
</script>

<style>
  .query-section {
    grid-row: 3 / 4;
  }
</style>

<div class="query-section">
  <div class="top">
    <SearchInput on:searchInputUpdated={updateQuery} />
    <SearchButton on:searchButtonClicked={search} />
    <SearchDropdown on:filterUpdated={updateFilter} />
  </div>

  <div class="bottom">
    <QueryResults results={response} />
  </div>
</div>
