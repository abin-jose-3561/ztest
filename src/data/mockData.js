import { tokens } from "../theme";

export const mockDataContacts = [

    {
  
      id: 'TS Faridabad',  
      TotalOutageT: 4,  
      TotalOutageB: 15, 
      TotalBreakdownCount: 40,  
      TC: 35,  
      TH: 200,
      TrippingCount: 120,
  
    },
  
    {
  
      id: 'TS Gurgaon',
      TotalOutageT: 5, 
      TotalOutageB: 20, 
      TotalBreakdownCount: 49,
      TC: 42, 
      TH: 230,
      TrippingCount: 140,
  
    },
  
    {
  
      id:'TS Hisar',
      TotalOutageT: 25, 
      TotalOutageB: 53, 
      TotalBreakdownCount: 45,  
      TC: 45,  
      TH: 450,  
      TrippingCount: 200, 
    },
  
    {
  
      id: 'TS Karnal',
      TotalOutageT: 8,
      TotalOutageB: 30, 
      TotalBreakdownCount: 16,  
      TC: 16,  
      TH: 341, 
      TrippingCount: 175,
  
    },
  
    {
  
      id: 'TS Panchkula',
      TotalOutageT: 9, 
      TotalOutageB: 35,
      TotalBreakdownCount: 31,  
      TC: 31,  
      TH: 371,
      TrippingCount: 150,
  
    },
  
  ];

  export const mockTransLine = [

    {
  
      id: '400 KV',
      TotalOutageT: 15,
      TrippingCount: 713.32,
      color: tokens("dark").greenAccent[500]
    },
  
    {
  
      id: '220 KV',
      TotalOutageT: 230,
      TrippingCount: 6028.33,
      color: tokens("dark").greenAccent[500]

  
    },
  
    {
  
      id:'132 KV',
      TotalOutageT: 341,
      TrippingCount: 5138.44,
      color: tokens("dark").greenAccent[500]
  
    },
  
    {
  
      id: '66 KV',
      TotalOutageT: 309,
      TrippingCount: 3314.68,
      color: tokens("dark").greenAccent[500]
    },
  
  ];

  export const mockDataDamagetrans = [

    {
  
      id: 'TS Faridabad',
      TotalOutageT: 0.00,
      TrippingCount: 0,
      TotalOutageTColor: "hsl(229, 80%, 50%)"
    },
  
    {
  
      id: 'TS Gurgaon',
      TotalOutageT: 0.00,
      TrippingCount: 0,
      TotalOutageTColor: "hsl(229, 80%, 50%)"

  
    },
  
    {
  
      id:'TS Hisar',
      TotalOutageT: 0.35,
      TrippingCount: 1,
      TotalOutageTColor: "hsl(229, 80%, 50%)"
  
    },
  
    {
  
      id: 'TS Karnal',
      TotalOutageT: 0.48,
      TrippingCount: 1,
      TotalOutageTColor: "hsl(234, 80%, 50%)"
  
    },
  
    {
  
      id: 'TS Panchkula',
      TotalOutageT: 0.49,
      TrippingCount: 1,
      TotalOutageTColor: "hsl(149, 40%, 50%)"
  
    },
  
  ];

  
  export const mockPieData = [

    {
  
      id: "TS Faridabad",
  
      label: "TS Faridabad",
  
      value: 239,
  
      color: "hsl(104, 70%, 50%)",
  
    },
  
    {
  
      id: "TS Gurgaon",
  
      label: "TS Gurgaon",
  
      value: 170,
  
      color: "hsl(162, 70%, 50%)",
  
    },
  
    {
  
      id: "TS Gurgaon",
  
      label: "TS Hisar",
  
      value: 322,
  
      color: "hsl(291, 70%, 50%)",
  
    },
  
    {
  
      id: "TS Kamal",
  
      label: "TS Kamal",
  
      value: 503,
  
      color: "hsl(229, 70%, 50%)",
  
    },
  
    {
  
      id: "TS Panchkhula",
  
      label: "TS Panchkhula",
  
      value: 584,
  
      color: "hsl(344, 70%, 50%)",
  
    },
  
  ];

  export const mockSubstationData = [

    {
  
      substation: 400,
  
      Number: 5,
  
    },
  
    {
  
      substation: 220,
  
      Number: 85,
  
    },
  
    {
  
      substation: 132,
  
      Number: 190,
  
    },
  
    {
  
      substation: 66,
  
      Number: 145,
  
    },
  
   
  
  ];