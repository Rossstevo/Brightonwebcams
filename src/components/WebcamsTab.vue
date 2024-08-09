<template>
  <v-sheet class="pa-3" elevation="3">
    <h2>Live beach webcams</h2>
    <p>View live beach webcams around Brighton.</p>
    <container flex>
      <div class="webcam-div">
        <iframe
          src="https://g0.ipcamlive.com/player/player.php?alias=60d5c6da841c9"
          class="webcam-iframe"
          style="border: 0px #ffffff none"
          scrolling="no"
          frameborder="1"
          marginwidth="0px"
          height="600"
          width="100%"
          allowfullscreen=""
        ></iframe>
      </div>
      <div class="webcam-div">
        <a
          href="https://www.skylinewebcams.com/en/webcam/united-kingdom/england/brighton/brighton-pier.html"
          target="_blank"
          ><img
            src="https://embed.skylinewebcams.com/img/896.jpg"
            alt="【LIVE】 Brighton Pier | SkylineWebcams"
        /></a>
      </div>
    </container>
    <!-- Add more content specific to this tab here -->
  </v-sheet>
</template>

<script>
export default {
  name: "WebcamsTab",
};
</script>

<style>
.webcam-div {
  border: 4px solid #1976d2;
  border-radius: 5px solid;
  display: inline-block; /* Adjust the width to fit the content */
  padding: 7px;
  margin: 5px;
}

.webcam-iframe {
  width: 450px;
  height: 265px;
  display: inline-block; /* Adjust the width to fit the content */
}
</style>
