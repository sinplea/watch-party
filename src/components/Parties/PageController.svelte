<script lang="ts">
  import JoinInput from "./MainControls/JoinInput.svelte";
  import JoinButton from "./MainControls/JoinButton.svelte";
  import VisibilityToggle from "./MainControls/VisibilityToggle.svelte";
  import TopicInput from "./MainControls/TopicInput.svelte";
  import CreateButton from "./MainControls/CreateButton.svelte";

  let topicQuery: string;
  let roomQuery: string;
  let isPublic: boolean;

  function updateRoomQuery(e: CustomEvent): void {
    roomQuery = e.detail.room;
  }

  function updateTopicQuery(e: CustomEvent): void {
    topicQuery = e.detail.topic;
  }

  function updateVisibility(e: CustomEvent): void {
    isPublic = e.detail.isPublic;
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
    grid-template-columns: 1fr 3fr 0.5fr 0.5fr 0.5fr 2fr;
    grid-template-rows: 100%;
    grid-row: 2 / 3;
    margin: 0 4%;
  }

  .page-title {
    grid-column: 1 / 2;
  }
</style>

<div class="page-controller">
  <div class="page-title">Parties</div>
  <JoinInput on:joinInputUpdated={updateRoomQuery} />
  <JoinButton on:joinButtonPressed={join} />
  <CreateButton on:createButtonPushed={create} />
  <VisibilityToggle on:visibilityToggled={updateVisibility} />
  <TopicInput on:topicInputUpdated={updateTopicQuery} />
</div>
