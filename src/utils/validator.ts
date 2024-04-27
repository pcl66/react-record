interface FormData {
  [key: string]: string | number | undefined | null
}

export interface Rule<T> {
  key: keyof T
  message: string
  type: 'required' | 'patten' | 'email'
}

export type Rules<T> = Rule<T>[]

export type Error<T> = {
  [key in keyof T]: string[]
}

export const validator = <T extends FormData>(formData: T, rules: Rules<T>) => {
  const errors: Error<T> = {} as Error<T>
  rules.forEach((rule) => {
    const { key, message, type } = rule
    switch (type) {
      case 'required':
        if (!formData[key]) {
          errors[key] = [message]
        }
        break
      case 'patten':
        break
    }
  })
  return errors
}
