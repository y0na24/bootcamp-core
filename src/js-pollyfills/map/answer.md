```js
  const map = (arr, cb) => {
    const result = []
    
    for (let i = 0; i < arr.length; i++) {
      result.push(cb(arr[i], i, this))
    }
    
    return result
  }
```