import { create } from 'zustand'

export interface UserStore {
  userInfo: {
    isSkipped: boolean
    name: string
    email: string
  }
  setIsSkipped: (val: boolean) => void
}

export const useUserStore = create<UserStore>(set => ({
  userInfo: {
    isSkipped: JSON.parse(localStorage.getItem('isSkipped') || 'false'),
    name: 'John Doe',
    email: 'john@doe.com',
  },
  setIsSkipped: (val: boolean) => set((state) => {
    const { userInfo } = state
    localStorage.setItem('isSkipped', JSON.stringify(val))
    return { ...state, userInfo: { ...userInfo, isSkipped: val } }
  }),
}))
// const init = localStorage.getItem('isSkipped')
// export const useUserStore = create((set, get) => (
//   {
//     isSkipped: init === 'yes',
//     setIsSkipped: (read: boolean) => {
//       const result = read ? 'yes' : 'no'
//       localStorage.setItem('isSkipped', result)
//       set({ isSkipped: result === 'yes' })
//     },
//   }
// ))
