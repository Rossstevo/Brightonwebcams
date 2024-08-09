<template>
  <v-container>
    <h2>Water Quality Information for Brighton</h2>
    <v-btn class="ma-4" color="primary" @click="fetchWaterQuality"
      >Get Water Quality Data</v-btn
    >
    <v-alert v-if="error" type="error">{{ error }}</v-alert>
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <div v-if="waterQuality">
      <p><strong>Sample Date:</strong> {{ waterQuality.sampleDate }}</p>
      <p>
        <strong>Bathing Water ID:</strong> {{ waterQuality.bathingWaterId }}
      </p>
      <p>
        <strong>Bathing Water Name:</strong> {{ waterQuality.bathingWaterName }}
      </p>
      <p><strong>Classification:</strong> {{ waterQuality.classification }}</p>
      <p><strong>Sampling Point:</strong> {{ waterQuality.samplingPoint }}</p>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      waterQuality: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchWaterQuality() {
      this.loading = true;
      this.error = null;
      try {
        // API endpoint for water quality data
        const response = await axios.get(
          "https://environment.data.gov.uk/bwq/WaterQualitySamplingPoint/01100/data"
        );
        const data = response.data.items[0]; // Get the latest data
        this.waterQuality = {
          sampleDate: data.sampleDate,
          bathingWaterId: data.bathingWater.id,
          bathingWaterName: data.bathingWater.name,
          classification: data.sampleClassification,
          samplingPoint: data.samplingPoint,
        };
      } catch (err) {
        this.error = "Failed to fetch water quality data";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles */
</style>
