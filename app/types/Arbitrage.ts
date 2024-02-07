export interface Arbitrage {
  market: string
  is_live: boolean
  game_id: string
  sport: string
  league: string
  home_team: string
  away_team: string
  start_date: string
  best_price_home_name: string
  best_price_home_odd: number
  best_price_home_odd_books: string[]
  best_price_away_name: string
  best_price_away_odd: number
  best_price_away_odd_books: string[]
  oddsjam_price_home_odd: number | null
  oddsjam_price_away_odd: number | null
  type: string
  arb_percent: number
  bet_placed: boolean
}