<template>
  <v-sheet class="pa-3" elevation="3">
    <h2 class="mb-2">Park run</h2>
    <div class="mb-8">
      <p>
        <strong>When is it?</strong> <br />
        Every Saturday at 9:00am. <br /><br /><strong>Where is it? </strong
        ><br />The event takes place at Hove Lawns, Kingsway, Brighton & Hove,
        BN3 2FR. See Course page for more details. <br /><br /><strong
          >What does it cost to join in? </strong
        ><br />Nothing - it's free! but please register before you first come
        along. nly ever register with parkrun once and don't forget to bring a
        scannable copy of your barcode (request a reminder). If you forget it,
        you won't get a time.<br /><br />
        <strong>How fast do I have to be?</strong> <br />We all take part for
        our own enjoyment. Please come along and join in whatever your pace!

        <br /><br />
        Hove Promenade parkrun needs you! It is entirely organised by volunteers
        - email hovepromenade@parkrun.com to help. Safeguarding parkrun is
        committed to safeguarding and promoting the welfare of children and
        adults at risk. For our full safeguarding processes and policies,
        including how to report a concern, please see our Safeguarding Hub.
        We're friendly! Every week we grab a post parkrun coffee at The Lawns
        Café, Hove Lawns (directly opposite intersection with Kingsway and First
        Avenue). Please note, this venue has outdoor seating only - please come
        and join us!
      </p>
    </div>
    <v-btn color="primary" class="ma-4" @click="goToWebsite">Website</v-btn>

    <v-btn color="primary" class="ma-4" @click="goToFacebook"
      >Facebook page</v-btn
    >
  </v-sheet>
</template>
<script>
export default {
  methods: {
    goToWebsite() {
      const url = "https://www.parkrun.org.uk/hovepromenade/";
      window.open(url, "_blank");
    },
    goToFacebook() {
      const url = "https://www.facebook.com/hovepromenadeparkrun?locale=en_GB";
      window.open(url, "_blank");
    },
  },
};
</script>
