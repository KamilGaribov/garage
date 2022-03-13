export const transition = (item: HTMLElement) => {
  item.style.transitionDuration = '0s'
  item.style.opacity = '0'
  setTimeout(() => {
    item.style.transitionDuration = '1s'
    item.style.opacity = '1'
  }, 10)
}
