<script lang="ts">
    function handleClick(e: MouseEvent) {
        alert('Pushed')
        // TODO Design modal for configuration popup.
    }
</script>

<button class="configuration-button" on:click={handleClick}>
    <span class="material-icons">settings</span>
</button>

<style>
    .configuration-button {
        grid-column-start: 3;
        grid-column-end: 4;
        align-self: center;
        background-color: #fff;
        width: 40px;
        height: 40px;
    }

    .material-icons {
        color: #EB3636;
    }
</style>