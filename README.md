# steam-playing-game

Get the current playing game of a steam user.

## Usage

```ts
import { useSteamApi } from 'steam-playing-game'

const { getPlayerSummary, getGameDetail } = useSteamApi('steam-api-key')

getPlayerSummary('user-id')
getGameDetail('game-id')
```

## Response Types

```ts
// getPlayerSummary

interface PlayerSummary {
  steamid: string
  communityvisibilitystate: number
  profilestate: number
  personaname: string
  profileurl: string
  avatar: string
  avatarmedium: string
  avatarfull: string
  avatarhash: string
  lastlogoff: number
  personastate: number
  primaryclanid: string
  timecreated: number
  personastateflags: number
  gameextrainfo?: string
  gameid?: string
  loccountrycode: string
  locstatecode: string
  loccityid: number
}

interface PlayerSummaryResponse {
  response: {
    players: PlayerSummary[]
  }
}

// getGameDetail

interface GmaeDetailResponse {
  [gameid: string]: {
    success: boolean
    data: {
      name: string
      header_image: string
      capsule_image: string
      capsule_imagev5: string
      website: string
      background: string
      background_raw: string
      // and more
    }
  }
}
```
