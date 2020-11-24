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

  function changeVisibility(e: CustomEvent): void {
    isPublic = e.detail.isPublic;
  }

  function join(e: CustomEvent): void {}

  function create(e: CustomEvent): void {}
</script>

<style>
  .page-controller {
    grid-column: 1 / 6;
    grid-row: 2 / 3;
  }
</style>

<div class="page-controller">
  <div class="page-title">Parties</div>
  <JoinInput on:joinInputUpdated={updateRoomQuery} />
  <JoinButton on:joinButtonPressed={join} />
  <VisibilityToggle />
  <TopicInput on:topicInputUpdated={updateTopicQuery} />
  <CreateButton on:createButtonPushed={create} />
</div>
