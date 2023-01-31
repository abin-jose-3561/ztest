
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import tw from "twin.macro";
import { GlobalFilter } from "../../components/globalFilter"; 

const Table = tw.table`
  text-base
`;

const TableHead = tw.thead`
  p-2
`;

const TableRow = tw.tr`
border
border-green-500
`;

const TableHeader = tw.th`
border
border-green-500
p-2
`;

const TableBody = tw.tbody`
`;

const TableData = tw.td`
border
border-green-500
p-5
`;



function TransmissionlineDash(props) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:3001/tb")
      .catch((err) => console.log(err));

    if (response) {
      const products = response.data;

      console.log("Products: ", products);
      setProducts(products);
    }
  };

const productsData = useMemo(()=> [...products], [products]);

const productsColumns = useMemo(
  () =>
    products[0]
      ? Object.keys(products[0])
          .filter((key) => key !== "rating")
          .map((key)=>{
              return {Header: key.toUpperCase().replace('_',' '), accessor: key,}
            }): [], [products]);

const tableInstance = useTable(
  {columns: productsColumns, data: productsData},
  useGlobalFilter,
  useSortBy);

const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, preGlobalFilteredRows, setGlobalFilter, state }=tableInstance;

useEffect(()=>{
  fetchProducts();
},[]);

return (
  <Box m="20px">
      <Header
        title="TRANSMISSION LINE DASHBOARD"
        subtitle="Transmission Line details"
      />

<>
<GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} setGlobalFilter={setGlobalFilter} globalFilter={state.GlobalFilter}/>
<Table style={{margin:'20px 20px 20px 60px', width:'90%',height:'10px', overflowY:'scroll'}}{...getTableProps()}>
  <TableHead>
      {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeader {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header") }
                    {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                    </TableHeader>
              ))}
              </TableRow>
      ))}
  </TableHead>
  <TableBody {...getTableBodyProps()}>
                {rows.map((row)=>{
                  prepareRow(row);

                  return (
                  <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell, idx) =>(
                    <TableData {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableData>
                  ))}
                  </TableRow>
                  );
                })}

  </TableBody>
</Table>
</>
<Header
        title="TRANSMISSION LINE ANALYSIS"
        subtitle="Bar Chart"
      />
   
    <Box height="75vh">
        <BarChart />
      </Box>

      <Header
        subtitle="Doughnut Chart"
      />

    <Box height="75vh" m="0 0 200px 200px">
        <PieChart />
      </Box>

      <Header
        subtitle="Line Chart"
      />

      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>  
  );
};

export default TransmissionlineDash;
