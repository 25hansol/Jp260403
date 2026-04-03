<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { isVisible, elementRef } = useScrollAnimation()

const contacts = [
  {
    type: 'email',
    label: 'Email',
    value: 'hansol@email.com',
    href: 'mailto:idpw25@gmail.com',
  },
  {
    type: 'github',
    label: 'GitHub',
    value: '@25hansol',
    href: 'https://github.com/25hansol',
  },
  {
    type: 'Korean Portfolio',
    label: 'Korean Version(React, JavaScript)',
    value: 'Portfolio',
    href: 'https://hansol-portfolio.vercel.app/?role=frontend',
  },
]
</script>

<template>
  <section id="contact" class="py-24 px-6 bg-white">
    <div ref="elementRef" class="max-w-5xl mx-auto">
      <div :class="['mb-12 text-center fade-up', isVisible && 'visible']">
        <span class="text-sm font-semibold text-emerald-600 tracking-[0.2em] uppercase">
          Contact
        </span>
        <h2 class="mt-3 mb-4 text-3xl md:text-4xl font-bold text-slate-900">
          連絡する
        </h2>
        <p class="mx-auto max-w-md leading-8 text-slate-500">
          プロジェクト協業、採用に関するお問い合わせ、
          または軽いご挨拶でも歓迎します。お気軽にご連絡ください。
        </p>
      </div>

      <div class="mb-10 grid gap-5 md:grid-cols-3">
        <a
          v-for="(contact, i) in contacts"
          :key="contact.type"
          :href="contact.href"
          :target="contact.type !== 'email' ? '_blank' : undefined"
          :rel="contact.type !== 'email' ? 'noopener noreferrer' : undefined"
          :class="[
            'group flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/60',
            'fade-up',
            isVisible && 'visible',
            `fade-up-delay-${i + 1}`,
          ]"
        >
          <div
            class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white"
          >
            <svg
              v-if="contact.type === 'email'"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>

            <svg
              v-else-if="contact.type === 'github'"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>

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
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18"
              />
            </svg>
          </div>

          <p class="mb-1 text-xs text-slate-400 transition-colors group-hover:text-emerald-700">
            {{ contact.label }}
          </p>
          <p class="text-sm font-medium text-slate-800">
            {{ contact.value }}
          </p>
        </a>
      </div>

      <div class="text-center">
        <a
          href="mailto:hansol@email.com"
          class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-3.5 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          メールを送る
        </a>
      </div>
    </div>
  </section>
</template>