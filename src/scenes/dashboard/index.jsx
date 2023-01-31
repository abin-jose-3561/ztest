import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockData";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import StorageIcon from '@mui/icons-material/Storage';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import BarChart from "../../components/BarChart";


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" align>
        <Header title = "DASHBOARD" subtitle ="Welcome to your dashboard" />
        </Box>
        <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >

        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="TOTAL CONSUMPTION(UHBVPNL)"
            progress="0.75"
            increase="+14%"
            icon={
              <StorageIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"

        >
          <StatBox
            title="431,225"
            subtitle="TOTAL CONSUMPTION(DHBVPNL)"
            progress="0.50"
            increase="+21%"
            icon={
              <StorageIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />

         

        </Box>

        <Box

          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >

          <StatBox
            title="335,225"
            subtitle="TOTAL GENERATION (NTPC)"
            progress="0.50"
            increase="+35%"
            icon={
              <StorageIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />

        </Box>
        <Box

          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >

          <StatBox
            title="131,126"
            subtitle="SUBSTATION AUXILARY(DHBVPNL)"
            progress="0.50"
            increase="+25%"
            icon={
              <StorageIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* <Box

          gridColumn="span 4"

          backgroundColor={colors.primary[400]}

          display="flex"

          alignItems="center"

          justifyContent="center"

        >

          <StatBox

            title="178,245"

            subtitle="SUBSTATION AUXILARY(NRBD)"

            progress="0.50"

            increase="+30%"

            icon={

              <StorageIcon

                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}

              />

            }

          /> </Box>*/}



          <Box

          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="20px"
        >

          <Box height="200px" mt="-100px">
            <BarChart 
            isDashboard={true}/>
          </Box></Box>




       

        </Box>

        </Box>

};

export default Dashboard;