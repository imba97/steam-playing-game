import type { UserPlayingGameResponse } from './data'
import { useRequest } from './request'

export async function getUserPlayingGame(key: string, steamid: string): Promise<UserPlayingGameResponse> {
  const { getPlayerSummary, getGameDetail } = useRequest(key)

  const playerSummary = await getPlayerSummary(steamid)

  const notPlaying: UserPlayingGameResponse = { playing: false }

  if (!playerSummary?.gameid) {
    return notPlaying
  }

  const gameDetail = await getGameDetail(playerSummary.gameid)

  if (!gameDetail.success) {
    return notPlaying
  }

  const gameid = playerSummary.gameid!

  return {
    playing: true,
    game: {
      id: gameid,
      name: gameDetail.data.name,
      header_image: gameDetail.data.header_image,
      background: gameDetail.data.background,
      background_raw: gameDetail.data.background_raw
    }
  }
}
