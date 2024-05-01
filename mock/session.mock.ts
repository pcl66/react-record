import type { MockMethod } from 'vite-plugin-mock'

export const sessionMock: MockMethod = {
  url: '/api/v1/session',
  method: 'post',
  statusCode: 200,
  response: (): { jwt: string } => {
    return {
      jwt: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3MTM3MTgwMDV9.An1LeYrv1DXG7Fik2B8aZhlm4KCzPIuiH6RwzEC2AYg',
    }
  },
}
