<svelte:head>
    <!-- Exposes gapi variable globally -->
    <script src="https://apis.google.com/js/api.js" on:load={handleGoogleAPI}></script>
</svelte:head>
<script lang="ts">
    import ChatPanel from './components/Chat/ChatPanel.svelte';
    function handleGoogleAPI() {
        // @ts-ignore
        gapi.load("client:auth2", function() {
            loadClient();
        });
    }

    function loadClient() {
        // @ts-ignore
        gapi.client.setApiKey(API_KEY);

        // @ts-ignore
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
    }
</script>

<main>
    <ChatPanel />
</main>