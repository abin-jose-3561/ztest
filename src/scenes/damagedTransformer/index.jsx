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



function DamagedTransformer(props) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:3001/dd")
      .catch((err) => console.log(err));

    if (response) {
      const products = response.data;

      console.log("Products: ", products);
      setProducts(products);
    }
  };
  

// const data = useMemo(()=> (
// [
//   {"voltagelevel":132,"ckt":5138,"nolines":341,"userId":"1"},
//   {"voltagelevel":220,"ckt":6028,"nolines":230,"userId":"1"},
// ]),[]);

// const columns = useMemo(()=>([
//   {
//     Header:"VOLTAGE",
//     accessor: "voltagelevel"
//   },
//   {
//     Header:"CKT",
//     accessor: "ckt"
//   },
//   {
//     Header:"NO Lines",
//     accessor: "nolines"
//   },
// ]),[]);

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
)
}

export default DamagedTransformer;
