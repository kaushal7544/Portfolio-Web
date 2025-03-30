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
        <Grid item xs={12} md={6} textAlign={isMobile ? "center" : "left"}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Box sx={{ paddingX: { xs: "5%", sm: "10%", md: "15%" }, mt: "25%" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
                Hi, <span style={{ color: "lightblue" }}>{currentText}</span>
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
                Welcome to My Portfolio
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, fontSize: { xs: "1rem", md: "1.5rem" } }}>
                Showcasing my work, projects, and skills in a stunning way.
              </Typography>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Button
                  variant="contained"
                  onClick={handleDownload}
                  sx={{
                    fontSize: { xs: "0.8rem", md: "1rem" },
                    padding: { xs: "0.5rem 1rem", md: "0.8rem 1.5rem" },
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
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <motion.img
            src={img}
            alt="Banner Image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: isMobile ? "250px" : "600px",
              height: isMobile ? "250px" : "600px",
              borderRadius: "50%",
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
