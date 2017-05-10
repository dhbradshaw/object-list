function binnedArray(arr, keyFunction = element => element.id) {
  const binned = {}
  const length = arr.length
  for (let i = 0; i < length; i += 1) {
    const element = arr[i]
    const key = keyFunction(element)
    const val = binned[key] || []
    binned[key] = val.concat([element])
  }
  return binned
}

const first = (arr, discriminator = () => true) => {
  const length = arr.length
  for (let i = 0; i < length; i += 1) {
    const a = arr[i]
    if (discriminator(a)) {
      return a
    }
  }
  return undefined
}

const last = (arr, discriminator = () => true) => {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const a = arr[i]
    if (discriminator(a)) {
      return a
    }
  }
  return undefined
}

export {
  binnedArray,
  first,
  last,
}
