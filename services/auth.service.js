import client from './client'

export const getCheckPhoneNumber = async (params) => {
  const response = await client.get('/users/check/phone-number', { params })
  return response.data
}
