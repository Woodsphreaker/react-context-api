export default () => {
  const randomTime = Math.floor(Math.random() * (2000 - 1) + 1)

  return new Promise((resolve) => setTimeout(resolve, randomTime))
}
