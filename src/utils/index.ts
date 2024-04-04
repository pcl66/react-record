export const throttle: (cb: any, delay: number) => any = (cb, delay = 500) => {
  let flag = true
  return function (...args: any) {
    if (flag) {
      // @ts-expect-error
      cb.call(this, ...args)
      flag = false
      setTimeout(() => {
        flag = true
      }, delay)
    }
  }
}
