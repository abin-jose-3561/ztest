import {Box} from "@mui/material";
import Header from "../../components/Header";

const ParameterViolation =()=>{
    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" align>
        <Header title = " PARAMETER VIOLATION DASHBOARD" subtitle ="Parameter Violation Details" />
        </Box>
        </Box>
};
export default ParameterViolation;