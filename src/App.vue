<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'

const activeSection = ref('hero')

const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact']

const handleScroll = () => {
  const scrollPos = window.scrollY + 120
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
      activeSection.value = id
    }
  }
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  activeSection.value = id
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div class="min-h-screen bg-white">
    <NavBar :active-section="activeSection" @navigate="scrollToSection" />
    <HeroSection @navigate="scrollToSection" />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <footer class="py-8 px-6 border-t border-gray-100">
      <div class="max-w-5xl mx-auto text-center text-sm text-gray-500">
        © 2026 KIMHANSOL. All rights reserved.
      </div>
    </footer>
  </div>
</template>
