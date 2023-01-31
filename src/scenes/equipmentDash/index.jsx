import {Box} from "@mui/material";
import Header from "../../components/Header";
import TransBar from "../../components/BarChart";

const EquipmentDash =()=>{
    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" align>
        <Header title = " EQUIPMENT DASHBOARD" subtitle ="List of Equipments" />
        </Box>
        <Box height="75vh">
        <TransBar />
      </Box>
        </Box>
};
export default EquipmentDash;