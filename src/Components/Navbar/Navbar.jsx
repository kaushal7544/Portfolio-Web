import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "My Skills", link: "#skills" },
    { label: "Projects", link: "#projects" },
    { label: "Experience", link: "#experience" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(to right, #000, #1E3A8A)",
          boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1600px",
            width: "100%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {isMobile && (
            <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          )}

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: isMobile ? "center" : "left",
              flexGrow: 1,
              marginLeft: { xs: "6%", sm: "5%", md: "2%" },
              marginRight: { xs: "22%", md: "1%" },
            }}
          >
            My Portfolio
          </Typography>


          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 , marginRight:"5%",}}>
              {menuItems.map(({ label, link }) => (
                <Button
                  key={label}
                  color="inherit"
                  component={Link}
                  smooth
                  to={link}
                  sx={{
                    fontSize: "1rem",
                   
                    "&:hover": { backgroundColor: "#1E3A8A" },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer with No Animation */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            background: "linear-gradient(to right, #000, #1E3A8A)",
            color: "#fff",
            width: "100%",
            borderRight: "2px solid rgba(255, 255, 255, 0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "20px",
          },
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "#fff",
            background: "rgba(255,255,255,0.1)",
            "&:hover": { background: "rgba(255,255,255,0.2)" },
          }}
        >
          <CloseIcon sx={{ fontSize: "1.8rem" }} />
        </IconButton>

        <Box sx={{ width: "100%", textAlign: "center" }}>
          <List onClick={handleDrawerToggle}>
            {menuItems.map(({ label, link }) => (
              <ListItem
                key={label}
                component={Link}
                smooth
                to={link}
                sx={{
                  cursor: "pointer",
                  padding: "15px 24px",
                  margin: "10px auto",
                  borderRadius: "12px",
                  textAlign: "center",
                  width: "80%",
                  "&:hover": { backgroundColor: "#143a8c", boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.7)" },
                }}
              >
                <ListItemText primary={label} sx={{ color: "#fff", textAlign: "center", fontSize: "1.2rem" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;





// import React, { useState } from "react";
// import { HashLink as Link } from "react-router-hash-link";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { useTheme } from "@mui/material/styles";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const menuItems = [
//     { label: "Home", link: "#home" },
//     { label: "About", link: "#about" },
//     { label: "My Skills", link: "#skills" },
//     { label: "Projects", link: "#projects" },
//     { label: "Experience", link: "#experience" },
//   ];

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           background: "linear-gradient(to right, #000, #1E3A8A)",
//           boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
//           padding: isMobile ? "8px 16px" : "12px 32px",
//         }}
//       >
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           {/* Mobile Menu Icon */}
//           {isMobile && (
//             <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
//               <MenuIcon sx={{ fontSize: "2rem" }} />
//             </IconButton>
//           )}

//           {/* Logo / Title */}
//           <Typography
//             variant="h5"
//             sx={{
//               fontWeight: "bold",
//               textAlign: isMobile ? "center" : "left",
//               flexGrow: 1,
//               marginLeft: { xs: "6%", sm: "5%", md: "0" },
//               marginRight: { xs: "22%", md: "1%" },
//               color: "white",
//               transition: "all 0.3s ease-in-out",
//               textShadow: "0px 0px 5px rgba(255, 255, 255, 0.3)",
//               "&:hover": {
//                 color: "#ff6a00",
//                 textShadow: "0px 0px 15px #ff6a00, 0px 0px 30px #ee0979",
//                 transform: "scale(1.05)",
//               },
//             }}
//           >
//             My Portfolio
//           </Typography>

//           {/* Desktop Menu */}
//           {!isMobile && (
//             <Box sx={{ display: "flex", gap: 3 }}>
//               {menuItems.map(({ label, link }) => (
//                 <Button
//                   key={label}
//                   color="inherit"
//                   component={Link}
//                   smooth
//                   to={link}
//                   sx={{
//                     fontSize: "1rem",
//                     padding: "10px 16px",
//                     transition: "all 0.3s ease-in-out",
//                     background: "transparent",
//                     color: "white",
//                     "&:hover": {
//                       background: "linear-gradient(90deg, #ff6a00, #ee0979)",
//                       boxShadow: "0px 4px 10px rgba(238, 9, 121, 0.8)",
//                       transform: "scale(1.05)",
//                       color: "black",
//                       borderRadius: "12px",
//                     },
//                   }}
//                 >
//                   {label}
//                 </Button>
//               ))}
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer
//         anchor="left"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         sx={{
//           "& .MuiDrawer-paper": {
//             background: "linear-gradient(to right, #000, #1E3A8A)",
//             color: "#fff",
//             width: isMobile ? "85%" : "300px", // Adjust width for responsiveness
//             borderRight: "2px solid rgba(255, 255, 255, 0.2)",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             paddingTop: "20px",
//           },
//         }}
//       >
//         {/* Close Icon */}
//         <IconButton
//           onClick={handleDrawerToggle}
//           sx={{
//             position: "absolute",
//             top: "10px",
//             right: "10px",
//             color: "#fff",
//             background: "rgba(255,255,255,0.1)",
//             "&:hover": { background: "rgba(255,255,255,0.2)" },
//           }}
//         >
//           <CloseIcon sx={{ fontSize: "1.8rem" }} />
//         </IconButton>

//         {/* Mobile Menu Items */}
//         <Box sx={{ width: "100%", textAlign: "center" }}>
//           <List onClick={handleDrawerToggle}>
//             {menuItems.map(({ label, link }) => (
//               <ListItem
//                 key={label}
//                 component={Link}
//                 smooth
//                 to={link}
//                 sx={{
//                   cursor: "pointer",
//                   padding: "12px 20px",
//                   margin: "10px auto",
//                   borderRadius: "12px",
//                   textAlign: "center",
//                   width: "80%",
//                   transition: "all 0.3s ease-in-out",
//                   "&:hover": {
//                     background: "linear-gradient(to right, #ff416c, #ff4b2b)",
//                     boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.7)",
//                     transform: "scale(1.05)",
//                   },
//                 }}
//               >
//                 <ListItemText
//                   primary={label}
//                   sx={{
//                     color: "#fff",
//                     textAlign: "center",
//                     fontSize: "1.2rem",
//                     transition: "color 0.3s ease-in-out",
//                     "&:hover": { color: "#000" },
//                   }}
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;
