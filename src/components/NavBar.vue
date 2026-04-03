<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  activeSection: string
}>()

const emit = defineEmits<{
  navigate: [id: string]
}>()

const scrolled = ref(false)
const menuOpen = ref(false)

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const navigate = (id: string) => {
  emit('navigate', id)
  menuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <button
        class="text-lg font-semibold text-gray-900 hover:text-emerald transition-colors"
        @click="navigate('hero')"
      >
        <span class="text-emerald">P</span>ortfolio
      </button>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <button
          v-for="item in navItems"
          :key="item.id"
          :class="[
            'text-sm font-medium transition-colors relative py-1',
            props.activeSection === item.id
              ? 'text-emerald'
              : 'text-gray-600 hover:text-emerald'
          ]"
          @click="navigate(item.id)"
        >
          {{ item.label }}
          <span
            :class="[
              'absolute bottom-0 left-0 h-0.5 bg-emerald transition-all duration-300',
              props.activeSection === item.id ? 'w-full' : 'w-0'
            ]"
          />
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 text-gray-600 hover:text-emerald transition-colors"
        @click="menuOpen = !menuOpen"
        aria-label="메뉴 토글"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!menuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div
        v-if="menuOpen"
        class="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4"
      >
        <button
          v-for="item in navItems"
          :key="item.id"
          :class="[
            'text-left text-sm font-medium py-2 transition-colors',
            props.activeSection === item.id ? 'text-emerald' : 'text-gray-600'
          ]"
          @click="navigate(item.id)"
        >
          {{ item.label }}
        </button>
      </div>
    </Transition>
  </nav>
</template>

<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
