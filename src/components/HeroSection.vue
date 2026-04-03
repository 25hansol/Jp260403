<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits<{
  navigate: [id: string]
}>()

const roles = ['フロントエンドエンジニア', 'レスポンシブウェブ最適化']
const currentRole = ref('')
const roleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
const visible = ref(false)

let timer: ReturnType<typeof setTimeout>

const typeRole = () => {
  const current = roles[roleIndex.value]

  if (!isDeleting.value) {
    currentRole.value = current.substring(0, charIndex.value + 1)
    charIndex.value++

    if (charIndex.value === current.length) {
      isDeleting.value = true
      timer = setTimeout(typeRole, 1800)
      return
    }
  } else {
    currentRole.value = current.substring(0, charIndex.value - 1)
    charIndex.value--

    if (charIndex.value === 0) {
      isDeleting.value = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
    }
  }

  timer = setTimeout(typeRole, isDeleting.value ? 60 : 100)
}

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 120)

  timer = setTimeout(typeRole, 700)
})

onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen overflow-hidden bg-white px-6 py-24 sm:px-8 md:px-12"
  >
    <!-- Background -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute left-[-6rem] top-[8rem] h-72 w-72 rounded-full bg-emerald-100/70 blur-3xl"
      />
      <div
        class="absolute right-[8%] top-[18%] h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl"
      />
      <div
        class="absolute bottom-[10%] right-[18%] h-64 w-64 rounded-full bg-slate-100/80 blur-3xl"
      />
    </div>

    <!-- Main content -->
    <div class="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-6xl items-center">
      <Transition name="fade-up-hero" appear>
        <div
          v-if="visible"
          class="grid w-full grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
        >
          <!-- Left -->
          <div class="max-w-3xl">
            <div
              class="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2"
            >
              <span class="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span class="text-sm font-medium tracking-tight text-emerald-700">
                Available for work
              </span>
            </div>

            <h1
              class="text-[3.2rem] font-extrabold leading-[0.96] tracking-[-0.05em] text-slate-900 sm:text-[4.4rem] md:text-[5.4rem] lg:text-[6.2rem]"
            >
              こんにちは!<br />
              <span class="text-emerald-600 text-[0.9em]">キム・ハンソル</span>です。
            </h1>

            <div
              class="mt-6 flex min-h-[3rem] items-center gap-2 text-lg font-medium text-slate-500 sm:text-xl md:text-2xl"
            >
              <span>{{ currentRole }}</span>
              <span class="inline-block h-7 w-0.5 animate-blink rounded-full bg-emerald-500" />
            </div>

            <p
              class="mt-8 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg"
            >
              使用者体験を中心に考え、フロントエンド開発を行います。<br class="hidden md:block" />
              Vue3, TypeScript, Tailwind CSSを使って、クールで効率的なウェブサイトを作成します。
            </p>

            <div class="mt-10 flex flex-wrap items-center gap-4">
              <button
                class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-200/80"
                @click="emit('navigate', 'projects')"
              >
                プロジェクトを見る
              </button>

              <button
                class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-600"
                @click="emit('navigate', 'contact')"
              >
                お問い合わせ
              </button>
            </div>

          </div>

          <!-- Right -->
          <div class="hidden lg:flex lg:justify-end">
            <div class="relative w-full max-w-md">
              <div
                class="absolute -left-8 top-10 h-32 w-32 rounded-full bg-emerald-100 blur-3xl"
              />
              <div
                class="absolute -right-4 bottom-2 h-36 w-36 rounded-full bg-slate-200/70 blur-3xl"
              />

              <div
                class="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)] backdrop-blur"
              >
                <div class="mb-6 flex items-center justify-between">
                  <div>
                    <p class="text-sm font-medium text-slate-400">Frontend Portfolio</p>
                    <h2 class="mt-1 text-2xl font-bold text-slate-900">Hansol Kim</h2>
                  </div>
                  
                </div>

                <div class="space-y-4">
                  <div class="rounded-2xl bg-slate-50 p-4">
                    <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Focus
                    </p>
                    <p class="mt-2 text-sm leading-6 text-slate-600">
                      Responsive web, clean UI structure, and user-centered frontend development.
                    </p>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="rounded-2xl bg-emerald-50 p-4">
                      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                        Main Stack
                      </p>
                      <p class="mt-2 text-sm font-medium text-slate-700">
                        Vue 3<br />
                        TypeScript
                      </p>
                    </div>

                    <div class="rounded-2xl bg-slate-50 p-4">
                      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Styling
                      </p>
                      <p class="mt-2 text-sm font-medium text-slate-700">
                        Tailwind CSS<br />
                        Responsive UI
                      </p>
                    </div>
                  </div>

                  <div class="rounded-2xl border border-slate-200 p-4">
                    <div class="mb-3 flex items-center justify-between">
                      <span class="text-sm font-semibold text-slate-700">UI Polish</span>
                      <span class="text-sm font-semibold text-emerald-600">92%</span>
                    </div>
                    <div class="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div class="h-full w-[92%] rounded-full bg-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}

.fade-up-hero-enter-active {
  transition: opacity 0.85s ease, transform 0.85s ease;
}

.fade-up-hero-enter-from {
  opacity: 0;
  transform: translateY(28px);
}
</style>