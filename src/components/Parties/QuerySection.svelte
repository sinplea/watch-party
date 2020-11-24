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
  let response: Array<RoomHTMLElementData> = mockData;

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
  .query-section-top {
    grid-row: 3 / 4;

    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 0.1fr 0.075fr;

    column-gap: 0.5em;
    margin: 0 60% 0 2.08%;
  }

  .query-section-bottom {
    grid-row: 4 / 5;
  }
</style>

<div class="query-section-top">
  <SearchInput on:searchInputUpdated={updateQuery} />
  <SearchDropdown on:filterUpdated={updateFilter} />
  <SearchButton on:searchButtonClicked={search} />
</div>

<div class="query-section-bottom">
  <QueryResults results={response} />
</div>
