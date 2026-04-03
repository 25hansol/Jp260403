<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { isVisible, elementRef } = useScrollAnimation()

interface Project {
  title: string
  description: string
  challenge: string
  role: string
  result: string
  tags: string[]
  image: string
}

const projects: Project[] = [
  {
    title: '日本のポートフォリオサイト',
    description: 'TypeScript、Vue3、Tailwind CSSをベースに制作した日本向けポートフォリオウェブサイト',
    challenge: '直感的に情報を確認できるUX設計',
    role: 'フロントエンドエンジニア, UI/UXデザイナー',
    result: 'TypeScript と Vue3 を学びながら制作した',
    tags: ['Vue3', 'TypeScript', 'Tailwind'],
    image: '/assets/jppt.png',
  },
  {
    title: '韓国ポートフォリオウェブサイト',
    description: 'シンプルなデザインと細部にこだわったモーションを組み込んだ韓国向けポートフォリオウェブサイト',
    challenge: 'プロジェクトコンポーネント構造の開発',
    role: 'フルスタック開発, データ可視化実装',
    result: 'フロントエンド開発者としてのスキルを一目で分かりやすく整理し、開発できた',
    tags: ['React', 'JavaScript', 'Tailwind'],
    image: '/assets/krpt.png',
  },
]
</script>

<template>
  <section id="projects" class="bg-slate-50 py-24 px-6">
    <div ref="elementRef" class="max-w-5xl mx-auto">
      <div :class="['mb-12 fade-up', isVisible && 'visible']">
        <span class="text-sm font-semibold text-emerald-600 tracking-[0.2em] uppercase">
          Projects
        </span>
        <h2 class="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
          プロジェクト
        </h2>
        <p class="mt-4 text-slate-500">
          直接企画し、開発に参加した主なプロジェクトです。
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          :class="[
            'overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
            'fade-up',
            isVisible && 'visible',
            i < 2 ? 'fade-up-delay-1' : 'fade-up-delay-2',
          ]"
        >
          <!-- <div
            :class="[
              'aspect-video bg-gradient-to-br flex items-center justify-center',
              project.bgClass,
            ]"
          >
            <svg
              v-if="project.icon === 'ecommerce'"
              :class="['w-14 h-14', project.iconColor]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

            <svg
              v-else-if="project.icon === 'dashboard'"
              :class="['w-14 h-14', project.iconColor]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>

            <svg
              v-else-if="project.icon === 'mobile'"
              :class="['w-14 h-14', project.iconColor]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>

            <svg
              v-else
              :class="['w-14 h-14', project.iconColor]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div> -->
          <div class="aspect-video overflow-hidden bg-slate-100">
            <img
              :src="project.image"
              :alt="project.title"
              class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div class="p-6">
            <h3 class="mb-2 text-base font-semibold text-slate-900">
              {{ project.title }}
            </h3>
            <p class="mb-4 text-sm leading-relaxed text-slate-500">
              {{ project.description }}
            </p>

            <div class="mb-5 flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
              >
                {{ tag }}
              </span>
            </div>

            <div class="space-y-3 border-t border-slate-100 pt-4">
              <div class="flex gap-3 text-sm">
                <span class="w-10 shrink-0 text-slate-400">課題</span>
                <span class="text-slate-700">{{ project.challenge }}</span>
              </div>
              <div class="flex gap-3 text-sm">
                <span class="w-10 shrink-0 text-slate-400">役割</span>
                <span class="text-slate-700">{{ project.role }}</span>
              </div>
              <div class="flex gap-3 text-sm">
                <span class="w-10 shrink-0 text-slate-400">成果</span>
                <span class="font-medium text-emerald-600">{{ project.result }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>