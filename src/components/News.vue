<template>
  <v-container>
    <v-row>
      <v-col
          class="mb-5"
          cols="6"
      v-for="news in newsArray"
      v-bind:key="news.newsNo">
      <v-card
          class="mx-auto"
          max-width="344"
      >
        <v-card-text>
          <div>출처 : {{news.newsRef}}</div>
          <p class="text-h5 text--primary">
            {{news.newsTitle}}
          </p>
<!--          <p>adjective</p>-->
          <div class="text--primary">{{news.newsContent}}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
              text
              color="teal accent-4"
              :href="news.newsLink"
              target="_blank"
          >원본 링크...</v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
          >
            <v-card-text class="pb-0">
              <p class="text-h4 text--primary">
                Origin
              </p>
              <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn
                  text
                  color="teal accent-4"
                  @click="reveal = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "News",
  data: () => ({
    newsArray: [
      {
        newsNo: 1,
        newsRef: '동아닷컴',
        newsTitle: '만취한 채 술사러 음주운전하다 경찰차 들이받은 男 체포',
        newsContent: '음주운전을 하다 적발되자 도주하다가 경찰차를 들이받은 30대 남성이 경찰에 현행범으로 체포됐다.',
        newsLink: 'https://www.donga.com/news/Society/article/all/20220509/113294297/2'
      },
      {
        newsNo: 2,
        newsRef: '중앙일보',
        newsTitle: '\'일가족 참사\' 일으킨 음주운전자…알고보니 국토부 서기관',
        newsContent: '지난달 세종시에서 발생한 음주운전 사망 사고를 일으킨 운전자가 국토교통부 서기관인 것으로 드러났다.',
        newsLink: 'https://www.joongang.co.kr/article/25072901#home'
      },
      {
        newsNo: 3,
        newsRef: '매일경제',
        newsTitle: '\'고삐 풀린\' 인천 밤거리…차로에 앉고 경찰관 폭행도',
        newsContent: 'A씨가 편도 5차로 도로 중 3차로에 앉아 차량 통행을 방해하는 사이 비슷한 신고는 8건이나 잇따랐다. 그는 아내와 다툰 뒤 술김에 화가 나서 도로로 뛰어든 것으로 파악됐다.',
        newsLink: 'https://www.mk.co.kr/news/society/view/2022/05/384874/'
      },
      {
        newsNo: 4,
        newsRef: '연합뉴스',
        newsTitle: '순찰차서 소란 피우고 경찰관 폭행 20대…항소심 무죄→벌금형',
        newsContent: '(울산=연합뉴스) 김근주 기자 = 순찰차에서 내리기를 거부하며 경찰관을 폭행한 20대가 1심에서 무죄를 선고받았으나 항소심에서 벌금을 내게 됐다.',
        newsLink: 'https://www.yna.co.kr/view/AKR20220513059800057'
      },
      {
        newsNo: 5,
        newsRef: 'SBS 뉴스',
        newsTitle: '술 취해 일가족 탄 승용차 올라가 난동 부린 30대 체포',
        newsContent: '술에 취한 상태에서 어린아이 등 일가족이 탄 차량 위에 올라가 난동을 부린 30대가 경찰에 붙잡혔습니다.',
        newsLink: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1006756665&plink=COPYPASTE&cooper=SBSNEWSEND'
      }
    ]
  }),
}
</script>

<style scoped>

</style>