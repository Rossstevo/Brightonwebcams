<template>
  <v-sheet class="pa-3" elevation="3">
    <h2>Live Tide Information</h2>
    <p>View live Tide information around Brighton.</p>
    <div id="tidewidget__37"></div>
    <!-- Placeholder for the Tide widget -->
  </v-sheet>
</template>

<script>
export default {
  name: "TidesTab",
  mounted() {
    // Create the script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      // Initialize the tide widget after the script is loaded
      /* eslint-disable no-undef */
      createTideInstance("tidewidget__37", {
        includeMap: true,
        includeWeather: true,
        includeTitle: true,
        includeStyles: true,
        numberDays: 3,
        weatherUnit: "c",
      });
    };
    // Set the script src to the provided URL
    script.src =
      "https://tides.today/en/%F0%9F%8C%8D/england/east-sussex/brighton-marina/widget.js";

    // Append the script to the body or directly into the component's div
    document.getElementById("tidewidget__37").appendChild(script);
  },
};
</script>

<style scoped>
/* Add any additional styling if necessary */
</style>
