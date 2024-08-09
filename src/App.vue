<template>
  <v-app>
    <v-app-bar app color="primary" flat>
      <!-- Navigation menu icon moved to the top left -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" color="secondary">
            <v-icon :icon="mdiMenu"> {{ mdiMenu }}</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="tab in tabs"
            :key="tab.title"
            @click="setActiveTab(tab.title)"
          >
            <v-list-item-title>{{ tab.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Title centered -->
      <v-toolbar-title class="title-text">Brighton Webcams</v-toolbar-title>

      <!-- Tabs for medium and larger screens -->
      <v-tabs
        class="main-tabs d-none d-md-flex"
        v-model="activeTab"
        background-color="primary"
        align="center"
      >
        <v-tab v-for="tab in tabs" :key="tab.title">
          {{ tab.title }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-container>
      <v-tabs-items v-model="activeTab" class="mt-8">
        <v-tab-item v-for="tab in tabs" :key="tab.title">
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
import SewageTab from "./components/SewageTab.vue";

// Import mdiMenu icon
import { mdiMenu } from "@mdi/js";

export default {
  name: "App",
  components: {
    ParkrunTab,
    WeatherTab,
    TidesTab,
    WebcamsTab,
    SewageTab,
  },
  data() {
    return {
      activeTab: 0, // Current active tab index
      mdiMenu, // Make mdiMenu available in the template
      tabs: [
        { title: "Live webcams", components: "WebcamsTab" },
        { title: "Tides", components: "TidesTab" },
        { title: "Weather", components: "WeatherTab" },
        { title: "Sewage", components: "SewageTab" },
        { title: "Parkrun", components: "ParkrunTab" },
      ],
    };
  },
  methods: {
    setActiveTab(title) {
      const index = this.tabs.findIndex((tab) => tab.title === title);
      this.activeTab = index;
    },
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

.main-tabs {
  margin-left: 30px;
}

@media (max-width: 599px) {
  .title-text {
    font-size: 1rem;
  }
  .main-tabs {
    display: none;
  }
}
</style>
