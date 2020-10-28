<script lang="ts">
    function handleClick(e: MouseEvent) {
        alert('Pushed')
        // TODO Design modal for configuration popup.
    }
</script>

<div class="configuration-button" on:click={handleClick}>
    <span class="material-icons">settings</span>
</div>

<style>
    .configuration-button {
        grid-column-start: 3;
        grid-column-end: 4;
        align-self: center;
        justify-self: end;
        background-color: #fff;
        width: 30px;
        height: 30px;
        margin-right: 10%;
        border-radius: 5px;
        text-align: center;
        display: table;
    }

    .material-icons {
        display: table-cell;
        vertical-align: middle;
        font-size: 1.375em;
        margin: 0 auto;
        color: #EB3636;
    }
</style>