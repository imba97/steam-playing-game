# steam-playing-game

Get the current playing game of a steam user.

## Usage

```ts
import { getUserPlayingGame, useSteamApi } from 'steam-playing-game'

getUserPlayingGame('steam-api-key', 'user-id')
```

or use `useSteamApi` to get the player summary and game detail.

```ts
import { useSteamApi } from 'steam-playing-game'

const { getPlayerSummary, getGameDetail } = useSteamApi('steam-api-key')

getPlayerSummary('user-id')
getGameDetail('game-id')
```

## Response Types

### getUserPlayingGame

```ts
interface UserPlayingGameResponse {
  playing: boolean
  game?: {
    name: string
    header_image: string
    background: string
    background_raw: string
  }
}
```

### getPlayerSummary

```ts
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
```

### getGameDetail

```ts
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
