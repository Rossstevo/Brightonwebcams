<template>
  <v-sheet class="pa-3" elevation="3">
    <h2>Live Beach Webcams</h2>
    <p>View live beach webcams around Brighton.</p>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <div class="webcam-div">
            <iframe
              src="https://g0.ipcamlive.com/player/player.php?alias=60d5c6da841c9"
              class="webcam-iframe"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="webcam-div">
            <a
              href="https://www.skylinewebcams.com/en/webcam/united-kingdom/england/brighton/brighton-pier.html"
              target="_blank"
            >
              <img
                src="https://embed.skylinewebcams.com/img/896.jpg"
                alt="【LIVE】 Brighton Pier | SkylineWebcams"
                class="webcam-image"
              />
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "WebcamsTab",
};
</script>

<style scoped>
.webcam-div {
  border: 4px solid #1976d2;
  border-radius: 5px;
  padding: 7px;
  margin: 5px;
}

.webcam-iframe,
.webcam-image {
  width: 100%;
  height: auto;
}

@media (min-width: 600px) {
  .webcam-iframe {
    height: 300px;
  }
}

@media (max-width: 599px) {
  .webcam-iframe {
    height: 200px;
  }
}
</style>
