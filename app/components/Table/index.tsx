"use client"

import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState, ComponentProps } from 'react';
import { Arbitrage } from '../../types/Arbitrage';
import classNames from 'classnames';
import styles from "./index.module.css"

const AUTO_SIZE_STRATEGY = {
  type: 'fitCellContents' as const
};

interface TableProps {
  data: Arbitrage[]
}

export function Table({ data }: TableProps) {
  const [rowData] = useState<Arbitrage[]>(data);
  
  const [colDefs] = useState<ComponentProps<typeof AgGridReact<Arbitrage>>["columnDefs"]>([
    { field: "arb_percent", sort: "desc", sortIndex: 0, headerName: "Arb %",  pinned: true },
    { headerName: "Name", valueFormatter: (data) => `${data.data?.home_team} vs ${data.data?.away_team}`, sortable: false },
    { field: "league", headerName: "League", sortable: false },
    { field: "market", headerName: "Market", sortable: false },
    { field: "best_price_home_name", sortable: false },
    { field: "best_price_away_name", sortable: false },
    { field: "best_price_home_odd" },
    { field: "best_price_away_odd" },
    { field: "best_price_home_odd_books", sortable: false, valueFormatter: (datum) => String(datum.value).length > 30 ? String(datum.value).substring(0, 30) + "..." : String(datum.value) },
    { field: "best_price_away_odd_books", sortable: false, valueFormatter: (datum) => String(datum.value).length > 30 ? String(datum.value).substring(0, 30) + "..." : String(datum.value) },
  ]);

  const [filter, setFilter] = useState<string | undefined>(undefined)

  return (
    <div className={classNames("ag-theme-quartz", styles.tableWrapper)}>
      <input
        aria-label="Search for something..."
        placeholder="Search for something..."
        className={styles.filter}
        name="filter"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value)
        }}
      />
      <AgGridReact<Arbitrage>
        rowData={rowData}
        columnDefs={colDefs}
        quickFilterText={filter}
        autoSizeStrategy={AUTO_SIZE_STRATEGY}
        alwaysMultiSort={true}
        includeHiddenColumnsInQuickFilter={true}
      />
    </div>
  )
}