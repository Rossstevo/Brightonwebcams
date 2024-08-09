<template>
  <v-sheet class="pa-3" elevation="3">
    <h2>Live Weather Report</h2>
    <p>View live weather information around Brighton.</p>
    <div id="weather-widget">
      <!-- Weather Widget will be inserted here -->
      <a
        class="weatherwidget-io"
        href="https://forecast7.com/en/50d82n0d14/brighton-and-hove/"
        data-label_1="BRIGHTON AND HOVE"
        data-label_2="WEATHER"
        data-theme="pure"
      >
        BRIGHTON AND HOVE WEATHER
      </a>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "WeatherTab",
  mounted() {
    // Insert the script for the weather widget
    const script = document.createElement("script");
    script.src = "https://weatherwidget.io/js/widget.min.js";
    script.async = true;
    script.id = "weatherwidget-io-js";
    document.getElementById("weather-widget").appendChild(script);
  },
};
</script>

<style scoped>
/* Additional styling if necessary */
</style>
