// import * as React from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@mui/styles";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { IconButton } from "@mui/material";

// const useStyles = makeStyles({
//   customTabs: {
//     fontSize: "14px !important",
//     fontWeight: "400 !important",
//     fontFamily: "Open Sans, sans-serif !important",
//     padding: "0 !important",
//     textTransform: "capitalize !important",
//     minHeight: "35px !important",
//     width: "auto !important",
//     minWidth: "auto !important",
//     maxWidth: "auto !important",
//     color: "#1648C6 !important",
//   },
//   customNavTab: {
//     minHeight: "0",
//   },
//   indicator: {
//     transition: "none",
//   },
// });

// export default function NavHeader({ navItem }) {
//   const [value, setValue] = React.useState(0);
//   const classes = useStyles();

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box className="mt-2 d-flex justify-content-between align-items-center">
//         <Box>
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             classes={{ root: classes.customNavTab }}
//           >
//             {navItem &&
//               navItem.map((item, i) => (
//                 <Tab
//                   key={i}
//                   label={item.display}
//                   className="fs-12 me-3"
//                   component={Link}
//                   to={item.to}
//                   classes={{
//                     root: classes.customTabs,
//                     indicator: classes.indicator,
//                   }}
//                 />
//               ))}
//           </Tabs>
//         </Box>
//         <Box>
//           <IconButton>
//             <MoreVertIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
