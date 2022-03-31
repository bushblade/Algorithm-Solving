function memoize(func) {
  const cache = new Map()
  return (...args) => {
    const key = args[0]
    if (cache.has(key)) {
      console.log('got it')
      return cache.get(key)
    }
    const result = func(...args)
    cache.set(key, result)
    return result
  }
}

const testFunc = arg => console.log('testFunc running')

const memoized = memoize(testFunc)

const obj = { name: 'Will', age: 42 }

const arr = [1, 2, 3]
memoized(obj)
obj.name = 'Lou'
memoized(obj)
memoized(arr)
memoized(arr)
