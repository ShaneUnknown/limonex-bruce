export const vibration = () => {
  if (navigator.vibrate) {
    navigator.vibrate(5)
  }
}