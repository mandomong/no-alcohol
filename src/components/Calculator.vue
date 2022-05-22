<template>
  <v-container>
    <v-row>
      <v-col
          class="mb-5"
          cols="12">
        <v-row>
          <v-col cols="3">
            <v-card>
              <v-img
                  :src="require('../assets/item_soju.jpeg')"
                  max-height="125"
                  @click="increaseSoju"
                  contain
                  class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                소주
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card>
              <v-img
                  :src="require('../assets/item_macju.jpeg')"
                  max-height="125"
                  @click="increaseMac"
                  contain
                  class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                맥주
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card>
              <v-img
                  :src="require('../assets/item_somac.jpeg')"
                  max-height="125"
                  @click="increaseSomac"
                  contain
                  class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                소맥
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card>
              <v-img
                  :src="require('../assets/item_mak.jpeg')"
                  max-height="125"
                  @click="increaseMak"
                  contain
                  class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                막걸리
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card>
              <v-img
                  :src="require('../assets/item_yangju.jpeg')"
                  max-height="125"
                  @click="increaseYang"
                  contain
                  class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                양주
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col
          class="mb-5 text-center"
          cols="12">
        <h3>소주 : {{sojuCnt}} 잔</h3>
        <h3>맥주 : {{macCnt}} 잔</h3>
        <h3>소맥 : {{somacCnt}} 잔</h3>
        <h3>막걸리 : {{makCnt}} 잔</h3>
        <h3>양주 : {{yangCnt}} 잔</h3>
        <h2 class="red--text">합계 : {{totalCnt}} 잔</h2>
        <br>
        <h2 class="red--text">{{drinkDesc}}</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Calculator",

  data: () => ({
    totalCnt: 0,
    sojuCnt: 0,
    macCnt: 0,
    somacCnt: 0,
    makCnt: 0,
    yangCnt: 0,
    drinkDesc: '음주하지 않았습니다.',
    drinkDescArray: [
        '술은 1군 발암물질입니다.',
        '술은 우리 몸 전신에 작용하고 200여 종의 질병과 관련됩니다.',
        '술은 뇌를 손상시키고 중독을 일으킵니다.',
        '술은 고혈압, 부정맥 등 혈관성 질환을 일으킵니다.',
        '술은 지방간, 간염, 간경화, 간암 등 각종 간 질환을 일으킵니다.',
        '술은 면역을 망가뜨립니다.'
    ]
  }),
  methods: {
    increaseSoju: function() {
      this.sojuCnt = this.sojuCnt+1;
      this.totalCnt = this.totalCnt+1;
    },
    increaseMac: function() {
      this.macCnt = this.macCnt+1;
      this.totalCnt = this.totalCnt+1;
    },
    increaseSomac: function() {
      this.somacCnt = this.somacCnt+1;
      this.totalCnt = this.totalCnt+1;
    },
    increaseMak: function() {
      this.makCnt = this.makCnt+1;
      this.totalCnt = this.totalCnt+1;
    },
    increaseYang: function() {
      this.yangCnt = this.yangCnt+1;
      this.totalCnt = this.totalCnt+1;
    },
  },
  watch: {
    totalCnt: function (newVal) {
      if(newVal < 3) {
        this.drinkDesc = '음주를 시작하였습니다. 적당히 마실 수 있도록 주의하세요.'
      } else if (newVal < 11) {
        var randomIdx = Math.floor(Math.random() * this.drinkDescArray.length);
        this.drinkDesc = this.drinkDescArray[randomIdx];
      }
    }
  }
}
</script>

<style scoped>

</style>