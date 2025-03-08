import type { GmaeDetailResponse, PlayerSummary, PlayerSummaryResponse } from './data'

export default function useRequest(key: string) {
  return {
    getPlayerSummary: (steamid: string) => getPlayerSummary(key, steamid),
    getGameDetail
  }
}

async function getPlayerSummary(key: string, steamids: string): Promise<PlayerSummary | null> {
  const api = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${steamids}`

  const response = await fetch(api)

  const json = await response.json() as PlayerSummaryResponse

  if (json.response.players.length === 0) {
    return null
  }

  return json.response.players[0]
}

async function getGameDetail(gameid: string): Promise<GmaeDetailResponse[string]> {
  const api = `https://store.steampowered.com/api/appdetails?appids=${gameid}`

  const response = await fetch(api)

  const json = await response.json() as GmaeDetailResponse

  return json[gameid]
}
