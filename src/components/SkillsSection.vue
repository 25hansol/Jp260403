<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { isVisible, elementRef } = useScrollAnimation()

interface Skill {
  name: string
  level: number
}

interface SkillGroup {
  category: string
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Vue3 / Composition API', level: 60 },
      { name: 'TypeScript', level: 75 },
      { name: 'React', level: 80 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    category: 'Fundamentals',
    skills: [
      { name: 'HTML / CSS', level: 95 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Web Accessibility', level: 75 },
    ],
  },
  {
    category: 'Tools & Etc',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Vite / Webpack', level: 80 },
      { name: 'Figma', level: 90 },
      { name: 'Photoshop', level: 95 },
    ],
  },
]

const techBadges = [
  'Vue3', 'TypeScript', 'React', 'JavaScript',
  'HTML/CSS', 'Tailwind CSS', 'Vite', 'Git',
  'GitHub', 'Figma', 'Photoshop', 'Node.js',
  'Notion', 'Zeplin',
]
</script>

<template>
  <section id="skills" class="py-24 px-6 bg-white">
    <div ref="elementRef" class="max-w-5xl mx-auto">
      <div :class="['mb-12 fade-up', isVisible && 'visible']">
        <span class="text-sm font-semibold text-emerald-600 tracking-[0.2em] uppercase">
          Skills
        </span>
        <h2 class="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
          技術スタック
        </h2>
        <p class="mt-4 max-w-2xl text-slate-500 leading-8">
          実務と学習を通じて積み上げてきた技術を、使いやすさと保守性を意識して活用しています。
        </p>
      </div>

      <div class="grid gap-10 md:grid-cols-3 mb-14">
        <div
          v-for="(group, gi) in skillGroups"
          :key="group.category"
          :class="[
            'rounded-2xl border border-slate-200 bg-slate-50 p-6',
            'fade-up',
            isVisible && 'visible',
            `fade-up-delay-${gi + 1}`,
          ]"
        >
          <h3 class="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            {{ group.category }}
          </h3>

          <div class="space-y-5">
            <div v-for="skill in group.skills" :key="skill.name">
              <div class="mb-2 flex items-center justify-between">
                <span class="text-sm text-slate-700">{{ skill.name }}</span>
                <span class="text-xs text-slate-400">{{ skill.level }}%</span>
              </div>

              <div class="h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  class="h-full rounded-full bg-emerald-500 transition-all duration-1000 ease-out"
                  :style="{ width: isVisible ? `${skill.level}%` : '0%' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :class="['fade-up fade-up-delay-4', isVisible && 'visible']">
        <h3 class="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Tech Stack
        </h3>

        <div class="flex flex-wrap gap-3">
          <span
            v-for="badge in techBadges"
            :key="badge"
            class="cursor-default rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition-colors hover:border-emerald-300 hover:text-emerald-600"
          >
            {{ badge }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>