import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import SubBar from "../../components/SubBar";
import PieChart from "../../components/PieChart";





const SubstationDash =()=>{
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Circle", flex: 0.5 },
    { field: "TrippingCount", headerName: "Total Tripping count" , flex:1.5},
    {
      field: "TotalOutageT",
      headerName: "Total Outage due to Tripping (hrs)",
      flex: 2.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "TotalBreakdownCount",
      headerName: "Total Breakdown Count",
      flex:1.5,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "TotalOutageB",
      headerName: "Total Outage Due to Breakdown (hrs)",
      flex: 2.5,
    },
    {
      field: "TC",
      headerName: "Total Count",
      flex: 1,
    },
    {
      field: "TH",
      headerName: "Total Hrs",
      flex: 1,
    },
    
  ];
  return <Box m="10px">
  <Box display="flex" justifyContent="space-between" align>
  <Header title = " SUBSTATION DASHBOARD" subtitle ="Substation Details" />
  </Box>
  <Box mt='-40' display="grid"
    gridTemplateColumns="repeat(12, 1fr)"
    gridAutoRows="440px"
    gap="10px">

      <Box
      gridColumn="span 6"
      display="flex"
      alignItems="center"
      justifyContent="center"
  >

      <SubBar/>
          </Box>
          <Box
            gridColumn="span 6"
            display="flex"
            alignItems="center"
            justifyContent="center"

  >

      <PieChart/>

          </Box>
</Box>
<Box height="55vh" span="4">  
</Box>
  </Box>

};
export default SubstationDash;