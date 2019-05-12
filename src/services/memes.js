const baseUrl = 'http://version1.api.memegenerator.net'
const apiKey = '010695ac-ac35-458e-a175-bf184883598a'

export async function getMemesByPopular () {
  const pageIndex = 0
  const response = await fetch(`${baseUrl}/Generators_Select_ByPopular?pageIndex=${pageIndex}&pageSize=12&&apiKey=${apiKey}`)
  const responseJson = await response.json()
  return responseJson
}

export default {
  getMemesByPopular
}
