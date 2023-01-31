import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";



const TrippingBreakdown = ({isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Circle", flex: 1.5 },
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

  return (
    <Box m="20px">
      <Header
        title="TRIPPING BREAKDOWN"
        subtitle="Trip Breakdown Details"
      />
      <Box
        m="40px 0 0 0"
        height="65vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
      <Box m="30px 0 0 0">
      <Header title="TRIP BREAKDOWN ANALYTICS" subtitle="Analytics for Trip Breakdown" />
      <Box height="75vh">
      <Box mt='-40' display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="440px"
          gap="10px">

      <Box
      gridColumn="span 6"
      display="flex"
      alignItems="center"
      justifyContent="center"
      > <ResponsiveBar
              data={mockDataContacts}
              theme={{
                // added
                axis: {
                  domain: {
                    line: {
                      stroke: colors.grey[100],
                    },
                  },
                  legend: {
                    text: {
                      fill: colors.grey[100],
                    },
                  },
                  ticks: {
                    line: {
                      stroke: colors.grey[100],
                      strokeWidth: 1,
                    },
                    text: {
                      fill: colors.grey[100],
                    },
                  },
                },
                legends: {
                  text: {
                    fill: colors.grey[100],
                  },
                },
              }}
              keys={["TrippingCount"]}
              indexBy="id"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "nivo" }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              borderColor={{
                from: "color",
                modifiers: [["darker", "1.6"]],
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "Circle", // changed
                legendPosition: "middle",
                legendOffset: 32,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "Tripping Count", // changed
                legendPosition: "middle",
                legendOffset: -40,
              }}
              enableLabel={false}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
              }}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              role="application"
              barAriaLabel={function (e) {
                return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
              }}
            />

          </Box>
          <Box
            gridColumn="span 6"
            display="flex"
            alignItems="center"
            justifyContent="center"

  >

    <ResponsiveBar
          data={mockDataContacts}
          theme={{
            // added
            axis: {
              domain: {
                line: {
                  stroke: colors.grey[100],
                },
              },
              legend: {
                text: {
                  fill: colors.grey[100],
                },
              },
              ticks: {
                line: {
                  stroke: colors.grey[100],
                  strokeWidth: 1,
                },
                text: {
                  fill: colors.grey[100],
                },
              },
            },
            legends: {
              text: {
                fill: colors.grey[100],
              },
            },
          }}
          keys={["TotalOutageT"]}
          indexBy="id"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          borderColor={{
            from: "color",
            modifiers: [["darker", "1.6"]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : "Circle", // changed
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : "Outage due to Tripping (hrs)", // changed
            legendPosition: "middle",
            legendOffset: -40,
          }}
          enableLabel={false}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          barAriaLabel={function (e) {
            return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
          }}
        />

          </Box>
        </Box>  
      </Box>
    </Box>
    </Box>
    
  );
};

export default TrippingBreakdown;