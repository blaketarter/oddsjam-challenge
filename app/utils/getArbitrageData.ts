import data from "../data/abrs.json"
import type { Arbitrage } from "../types/Arbitrage"

// In the future this may be tied to an API so make it async from the start
export async function getArbitrageData(): Promise<Arbitrage[]> {
  return Promise.resolve(data.arbitrage_data)
}