import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import img from "../../assets/KVV.png";
import CV from "../../assets/kaushal CV.pdf";

const Banner = () => {
  const texts = ["I'm Kaushal"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Typing Effect for Name
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[0].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[0].length + 5) {
        setIsForward(false);
      }
      if (endValue < 2) {
        setIsForward(true);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward]);

  // Function to trigger CV download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Kaushal CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="home"
      sx={{
        flexGrow: 1,
        padding: { xs: "2rem 1rem", md: "4rem 2rem" },
        color: "#fff",
        minHeight: "25vh",
        maxWidth: "1841px",
        margin: "auto",
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {/* Left Side: Animated Text */}
        <Grid item xs={12} md={6} textAlign={isMobile ? "center" : "left"}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Box sx={{ paddingX: { xs: "5%", sm: "10%", md: "15%" }, mt: "17%" }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Hi, <span style={{ color: "lightblue" }}>{currentText}</span>
              </Typography>
              <Typography
                variant="h3"
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                Welcome to My Portfolio
              </Typography>
              <Typography
                variant="h6"
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                sx={{ mb: 3 }}
              >
                Showcasing my work, projects, and skills in a stunning way.
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="contained"
                  onClick={handleDownload}
                  sx={{
                    background: "rgb(19, 38, 90)",
                    color: "#fff",
                    "&:hover": { background: "rgb(7, 42, 141)", transform: "scale(1.02)" },
                    transition: "transform 0.2s ease-in-out",
                  }}
                >
                  Download CV
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Side: Image with Animation */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
           <motion.img
            src={img}
            alt="Banner Image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            animate={{
              // y: [0, -10, 0], // Floating effect 
              // transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              width: isMobile ? "300px" : "600px", // Adjust image size for mobile
              height: isMobile ? "300px" : "600px", // Adjust image size for mobile
              borderRadius: "50%", // Optional: add circular effect to image
              objectFit: "cover",
              marginTop: "10%",
              cursor: "pointer",
            }}
          />
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
