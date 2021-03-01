import farmsConfig from './farms'

const communityFarms = farmsConfig.filter((farm) => farm.isCommunityFarm).map((farm) => farm.lpSymbol)
const coreFarms = farmsConfig.filter((farm) => farm.isCoreFarm).map((farm) => farm.lpSymbol)

export { farmsConfig, communityFarms, coreFarms }
export { default as poolsConfig } from './pools'
export { default as ifosConfig } from './ifo'
