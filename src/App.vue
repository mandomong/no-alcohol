<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
      <div class="d-flex align-center">
        <v-toolbar-title @click="$router.push('/')">금주 실천</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
      <v-btn icon to="/calculator">
        <v-icon>mdi-glass-mug</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-newspaper</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
