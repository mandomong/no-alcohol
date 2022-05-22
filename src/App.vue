<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
      <div class="d-flex align-center">
        <v-toolbar-title @click="$router.push('/')"><strong>금주 실천</strong></v-toolbar-title>
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
    <v-footer
    dark
    padless>
      <v-card
          class="flex"
          flat
          tile
      >
        <v-card-title class="teal">
          <strong class="subheading">한 번의 실수로 모든것을 잃을 수 있습니다. 지금 당장 음주를 멈추세요.</strong>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          2022.05.22 — <strong>No! alcohol by 김혜민</strong>
        </v-card-text>
      </v-card>
    </v-footer>
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
