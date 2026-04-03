import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollAnimation(threshold = 0.15) {
  const isVisible = ref(false)
  const elementRef = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer?.disconnect()
          }
        })
      },
      { threshold }
    )
    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { isVisible, elementRef }
}
