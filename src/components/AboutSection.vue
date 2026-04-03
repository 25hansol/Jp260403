<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { isVisible, elementRef } = useScrollAnimation()

const cards = [
  {
    icon: 'education',
    title: '学歴',
    items: [
      { main: '文一女子高等学校', sub: '文科', period: '2014 - 2017', logo: null  },
      { main: '培花女子大学校', sub: 'コンピューター工学科', period: '2017 - 2020', logo: null },
    ],
  },
  {
    icon: 'work',
    title: '職歴',
    items: [
      { main: 'ソルゲイト株式会社（韓国）', sub: 'フロントエンド開発', period: '2021 - 2024', logo: null },
    ],
  },
  {
    icon: 'cert',
    title: '免許・資格・語学',
    items: [
      { main: 'グラフィック技術資格（GTQ）1級　取得', sub: '', period: '2019.09', logo: null },
      { main: '情報処理産業技士（韓国国家資格）　取得', sub: '', period: '2025.06', logo: null },
      { main: '日本語能力試験（JLPT）N2　合格', sub: '', period: '2025.08', logo: null },
    ],
  },
  {
    icon: 'content',
    title: 'コンテンツサービス利用経験',
    items: [
      {
        main: 'RIDI 長期利用',
        sub: 'ライブラリ 2,000件以上 / Wishlist・通知機能活用',
        period: '継続利用',
        logo: 'ridi',
      },
      {
        main: 'カカオページ利用',
        sub: '保管箱・購入・閲覧履歴など継続利用',
        period: '継続利用',
        logo: 'kakao',
      },
      {
        main: 'コンテンツUX比較経験',
        sub: '通知・再訪導線・作品管理UI比較',
        period: 'UX観点分析',
        logo: null,
      },
    ],
  },
]
</script>

<template>
  <section id="about" class="py-24 px-6 bg-slate-50">
    <div ref="elementRef" class="max-w-6xl mx-auto">
      <div :class="['mb-12 fade-up', isVisible && 'visible']">
        <span class="text-sm font-semibold text-emerald-600 tracking-[0.2em] uppercase">
          About
        </span>

        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
          私はこのような人です。
        </h2>

        <p class="text-slate-500 mt-4 max-w-2xl leading-relaxed">
          コード一筋が実際の人々の経験を変えることができるという信念で開発します。
          小さなディテールにも集中し、チームと一緒成長することを楽しんでいます。
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(card, i) in cards"
          :key="card.title"
          :class="[
            'bg-white p-7 rounded-2xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
            'fade-up',
            isVisible && 'visible',
            `fade-up-delay-${i + 1}`,
          ]"
        >
          <div class="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center mb-5">
            <!-- education -->
            <svg
              v-if="card.icon === 'education'"
              class="w-5 h-5 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>

            <!-- work -->
            <svg
              v-else-if="card.icon === 'work'"
              class="w-5 h-5 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>

            <!-- cert -->
            <svg
              v-else-if="card.icon === 'cert'"
              class="w-5 h-5 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>

            <!-- content -->
            <svg
              v-else
              class="w-5 h-5 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 0C8 4 4 6 4 6v12s4-2 8-2 8 2 8 2V6s-4-2-8-2z"
              />
            </svg>
          </div>

          <h3 class="text-base font-semibold text-slate-900 mb-4">
            {{ card.title }}
          </h3>

          <div class="space-y-4">
            <div v-for="(item, j) in card.items" :key="j">
              <div class="flex items-center gap-2">
                <img
                  v-if="item.logo === 'ridi'"
                  src="/assets/ridi.png"
                  alt="RIDI"
                  class="h-4 w-auto object-contain"
                />

                <img
                  v-else-if="item.logo === 'kakao'"
                  
                  src="/assets/kakao.svg"
                  alt="KakaoPage"
                  class="h-4 w-auto object-contain"
                />

                <p class="text-sm font-medium text-slate-900">
                  {{ item.main }}
                </p>
              </div>

              <p
                v-if="item.sub"
                class="text-xs text-slate-500 mt-0.5"
              >
                {{ item.sub }}
              </p>

              <p class="text-xs text-emerald-600 font-medium mt-0.5">
                {{ item.period }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>