<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img
          :src="require('../assets/no-alcohol.jpeg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3 text-center">
          이 페이지는 음주의 위험성을 알리고 <br>적당히 마시기 위한 가이드를 제공합니다
        </h1>

        <p class="subheading font-weight-regular text-center">
          무엇보다 금주를 위해서 할 수 있는 가장 현명한 방법은 의사와 상의하는 것입니다.
          <br>
          의사는 당신이 음주를 자제하는 것이 좋은지 끊는 것이 좋은지 결정하는 것을 도울 수 있습니다.
          <br>
          알코올에 의존적인 사람이거나 다른 의료상의 문제나 정신적인 문제가 있다면 술을 완전히 끊어야 합니다.
        </p>
        <v-divider></v-divider>
        <br><br>
        <h2 class="red--text">음주를 줄이는 방법</h2>
        <br>
        <h3>1. 음주를 제한하고 얼마나 마신지 계산하세요</h3>
        <p>
          일주일에 10잔 이하로 마시고, 한 번에 4잔 이하로 마셔야합니다. 이 제한에 도달하면 음주를 중단하세요.
          <br> 그리고, 음주 없는 날을 정하세요. 술 없는 날을 정하면 건강에 도움이 되며, 음주하는 나쁜 습관을 없애는 데 도움이 됩니다.
          <br>대신 잘 먹고 운동하는 등의 다른 건강한 활동을 하세요.
        </p>
        <h3>2. 도수가 낮거나 알콜이 없는 음료로 바꾸세요</h3>
        <p>
          저알콜 및 무알콜 제품은 음주를 줄이고자 하는 사람들에게 좋은 대안입니다.
          <br>저알콜 및 무알콜 제품의 범위가 많아졌으며, 맛은 비슷하지만 알콜 함량은 훨씬 적습니다.
        </p>
        <h3>3. 물과 음식 섭취를 유지하세요</h3>
        <p>
          목이 마르면 알콜 대신 물이나 무알콜 제품을 선택하세요. 물 한 컵, 탄산수, 주스 또는 청량 음료가 도움이 될 수 있습니다.
          <br>공복에 술을 마시면 알콜이 체내에서 대사되는 속도가 증가합니다.
          <br>술을 마시기 전이나 술을 마시는 동안 식사를 하면 더 낮은 속도로 혈류에 흡수되는데 도움이 됩니다.
        </p>
        <h3>4. 집에 술을 두지 마세요</h3>
        <p>
          집에 술이 없으면 음주량을 줄이는 데 도움이 될 수 있습니다. 그대신 좋은 차, 탄산수 및 기타 무알콜 음료를 비치해두세요.
          <br>알콜 제품을 맛있는 무알콜 음료로 대체하는 것은 음주를 줄이기를 원하는 사람들에게 좋은 대안 입니다.
        </p>
        <h3>5. 퇴근 후 루틴을 바꿔보세요</h3>
        <p>
          퇴근 후 스트레스 해소를 위해 소주나 맥주 한 잔을 마시는 습관이 생겼다면 더 건강한 대안을 찾아 일상을 바꿔보세요.
        </p>
        <h3>6. 첫 잔을 가능한 천천히 시작하세요</h3>
        <p>음주를 일찍 시작할수록 음주 시간이 길어질 수 있습니다. 술을 늦게 마시기 시작할수록 알콜 섭쉬량이 줄어듭니다.
        </p>
        <h3>7. 술 권하는 친구를 주의하세요.</h3>
        <p>정중하게 거절하는 방법을 익히세요. 단지 다른 사람이 술을 마신다고 해서 같이 술을 마실 필요도 없고,
          <br>권하는 모든 술에 응해야 한다는 의무감을 느낄 필요도 없습니다. 술 권하는 친구를 멀리하세요.
        </p>
        <h3>8. 바쁘게 지내세요.</h3>
        <p>산책하거나, 운동하거나, 외식하거나, 영화를 보세요. 집에 있을 때 할 수 있는 새로운 취미를 만들거나 오래전에 하던 취미를 다시 해 보세요.
          <br>그림 그리기도 좋고, 보드게임도 좋고, 악기 연주도 좋고, 목공도 좋습니다. 이런 활동들은 술을 피하는데 좋은 선택입니다.
        </p>
        <h3>9. 도움을 요청하세요.</h3>
        <p>술을 줄이는 것이 항상 쉬운 일은 아닙니다. 친구와 가족에게 도움이 필요하다는 것을 알리세요.
          <br>의사나 상담사나 치료사로부터 도움받을 수도 있을 것입니다.
        </p>
        <h3>10. 유혹을 경계하세요.</h3>
        <p>술을 마시고 싶게 만드는 사람과 장소를 피하세요. 휴일이나 휴가 같은 어떤 이벤트로 인해 술을 마신다면, 먼저 그런 이벤트를 어떻게 관리할지 계획을 세우세요.
          <br>자신의 감정을 지켜보세요. 걱정이 있을 때나 외로울 때나 화가 날 때 술을 마시고 싶을지도 모릅니다.
          <br>스트레스에 대처할 수 있는 새롭고 건강한 방법을 찾도록 노력하세요.
        </p>
      </v-col>

      <v-col
          class="mb-5"
          cols="12"
      >
        <v-divider></v-divider>
        <br>
        <h2 class="headline font-weight-bold mb-3 text-center">
          출처
        </h2>
        <br>
        <v-row justify="center">
          <a
              href="https://alcoholthinkagain.com.au/alcohol-your-health/tips-to-reduce-drinking/"
              class="subheading mx-3"
              target="_blank">
            alcohol think again - Tips to Reduce Drinking
          </a>
        </v-row>
        <v-row justify="center">
          <a
              href="https://gradium.co.kr/cut-back-on-drinking/"
              class="subheading mx-3"
              target="_blank">
            그라디움 (알코올 중독에서 벗어나기 – 술을 줄이는 방법 11)
          </a>
        </v-row>
        <v-row justify="center">
          <a
              href="https://alcoholthinkagain.com.au/alcohol-your-health/tips-to-reduce-drinking/"
              class="subheading mx-3"
              target="_blank">
            Harvard Medical School: 11 ways to curb your drinking
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      sojuCnt : 0,

    }),
  }
</script>
