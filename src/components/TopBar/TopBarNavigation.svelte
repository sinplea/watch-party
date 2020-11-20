<script lang="ts">
  import { push } from "svelte-spa-router";

  const WATCH_PAGE: string = "WATCH";
  const PARTIES_PAGE: string = "PARTIES";
  export let active: string = "";

  function routeToWatchPage(): void {
    if (active !== WATCH_PAGE) {
      active = WATCH_PAGE;

      push("#/watch");
    }
  }

  function routeToPartiesPage(): void {
    if (active !== PARTIES_PAGE) {
      active = PARTIES_PAGE;

      push("#/parties");
    }
  }
</script>

<style>
  .top-bar-nav {
    display: grid;
    height: 100%;
    width: 30%;

    align-items: center;
    justify-items: center;
    justify-self: end;
    margin-right: 6%;
    grid-template-columns: 1fr 1fr;

    font-family: "Mukta", sans-serif;
    font-weight: 600;
    color: white;

    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  .active {
    background-color: white;
    color: crimson;
  }

  .tab {
    cursor: pointer;
  }

  .watch-tab {
    grid-column: 1 / 2;
  }

  .parties-tab {
    grid-column: 2 / 3;
  }
</style>

<div class="top-bar-nav">
  <div
    on:click={routeToWatchPage}
    class="watch-tab tab {active === WATCH_PAGE ? 'active' : ''}">
    Watch
  </div>
  <div
    on:click={routeToPartiesPage}
    class="parties-tab tab {active === PARTIES_PAGE ? 'active' : ''}">
    Parties
  </div>
</div>
