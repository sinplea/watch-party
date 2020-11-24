<script lang="ts">
  import JoinInput from "./MainControls/JoinInput.svelte";
  import JoinButton from "./MainControls/JoinButton.svelte";
  import VisibilityToggle from "./MainControls/VisibilityToggle.svelte";
  import TopicInput from "./MainControls/TopicInput.svelte";
  import CreateButton from "./MainControls/CreateButton.svelte";

  let topicQuery: string;
  let roomQuery: string;
  let visibility: string;

  function updateRoomQuery(e: CustomEvent): void {
    roomQuery = e.detail.room;
  }

  function updateTopicQuery(e: CustomEvent): void {
    topicQuery = e.detail.topic;
  }

  function updateVisibility(e: CustomEvent): void {
    visibility = e.detail.visibility;
  }

  // TODO:
  function join(e: CustomEvent): void {}

  // TODO:
  function create(e: CustomEvent): void {}
</script>

<style>
  .page-controller {
    display: grid;

    align-items: center;
    justify-items: center;
    grid-template-columns: auto 2.5fr 0.4fr 2fr 0.4fr 0.4fr;
    grid-template-rows: 100%;

    grid-row: 2 / 3;

    /** 18px on 1920 display*/
    column-gap: 1.125em;

    /** 40px margin left & right on 1920 display*/
    margin: 0 2.08%;
  }

  .page-title {
    grid-column: 1 / 2;

    font-family: "Mukta", sans-serif;
    font-size: 1.5em;
    font-weight: 400;
  }
</style>

<div class="page-controller">
  <div class="page-title">Parties</div>
  <JoinInput on:joinInputUpdated={updateRoomQuery} />
  <JoinButton on:joinButtonPressed={join} />
  <TopicInput on:topicInputUpdated={updateTopicQuery} />
  <VisibilityToggle on:visibilityToggled={updateVisibility} />
  <CreateButton on:createButtonPushed={create} />
</div>
