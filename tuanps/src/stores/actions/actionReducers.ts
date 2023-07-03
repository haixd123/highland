const INCREA_COUNT = (value: number) => ({
  type: 'increment',
  state: value
})

const DECRE_COUNT = (value: number) => ({
  type: 'decrement',
  state: value
})

export {
  INCREA_COUNT,
  DECRE_COUNT
}