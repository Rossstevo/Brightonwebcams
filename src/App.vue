<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="title-text">Brightonwebcams.com</v-toolbar-title>
      <v-tabs class="ms-12" v-model="activeTab" background-color="primary">
        <v-tab v-for="tab in tabs" :key="tab">
          {{ tab.title }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-container>
      <v-tabs-items v-model="activeTab">
        <v-tab-item v-for="(tab, index) in tabs" :key="index">
          <component :is="tab.components"></component>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </v-app>
</template>

<script>
// Import the components you created for each tab
import ParkrunTab from "./components/ParkrunTab.vue";
import WeatherTab from "./components/WeatherTab.vue";
import TidesTab from "./components/TidesTab.vue";
import WebcamsTab from "./components/WebcamsTab.vue";

export default {
  name: "App",
  components: {
    ParkrunTab,
    WeatherTab,
    TidesTab,
    WebcamsTab,
  },
  data() {
    return {
      activeTab: 0, // Current active tab index
      tabs: [
        { title: "Live webcams", components: "WebcamsTab" },
        { title: "Tides", components: "TidesTab" },
        { title: "Weather", components: "WeatherTab" },
        { title: "Parkrun", components: "ParkrunTab" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title-text {
  width: 250px !important;
}
</style>
