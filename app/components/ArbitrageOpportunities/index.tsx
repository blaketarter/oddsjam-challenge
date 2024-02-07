import { getArbitrageData } from "../../utils/getArbitrageData";
import { Table } from "../Table";

export async function ArbitrageOpportunities() {
  const data = await getArbitrageData()
  return <Table data={data} />
}