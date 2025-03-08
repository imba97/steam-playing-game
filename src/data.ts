export interface PlayerSummary {
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

export interface PlayerSummaryResponse {
  response: {
    players: PlayerSummary[]
  }
}

export interface GmaeDetailResponse {
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

export interface UserPlayingGameResponse {
  playing: boolean
  game?: {
    name: string
    header_image: string
    background: string
    background_raw: string
  }
}
