<script lang="ts">
  import TopBarSearch from "./TopBarSearch.svelte";
  import TopBarNavigation from "./TopBarNavigation.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function emitChangeRoom(e: CustomEvent): void {
    dispatch("changeRoom", e.detail);
  }

  function emitToggleSideBar(e: CustomEvent): void {
    dispatch("toggleSideBar");
  }
</script>

<style>
  .top-bar-wrapper {
    display: grid;
    grid-template-rows: 100%;
    width: 100%;
    height: 100%;
    background-color: #eb3636;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 25%));
  }

  .logo {
    grid-column: 1 / 2;
    align-self: center;
    justify-self: center;

    margin-left: 2%;

    font-family: "Mukta", sans-serif;
    font-weight: 700;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    .logo {
      font-size: 0.9em;
      text-align: center;
    }

    .top-bar-wrapper {
      grid-template-columns: 20% 60% 20%;
    }
  }

  @media (min-width: 768px) {
    .logo {
      font-size: 1.25em;
    }

    .top-bar-wrapper {
      grid-template-columns: 20% 60% 20%;
    }
  }

  @media (min-width: 1366px) {
    .logo {
      font-size: 1.8em;
    }

    .top-bar-wrapper {
      grid-template-columns: 20% 50% 30%;
    }
  }
</style>

<div class="top-bar-wrapper">
  <div class="logo">Watch Party</div>
  <TopBarSearch />
  <TopBarNavigation />
</div>
