import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import aboutImg from "../../assets/P2.jpg"; // Replace with your actual image

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        maxWidth: "1841px",
        color: "#fff",
        textAlign: "center",
        margin: "auto",
        padding: { xs: "3rem 1rem", md: "4rem 2rem" },
      }}
    >
      {/* Heading with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // Triggers each time section enters viewport
      >
        <Typography
          variant="h2"
          sx={{
            mt: "5%",
            fontWeight: "bold",
            mb: { xs: 2, sm: 3, md: 4 },
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
            color: "lightblue",
            textDecoration: "underline",
            textDecorationThickness: "2px",
            textUnderlineOffset: "5px",
          }}
        >
          About Me
        </Typography>
      </motion.div>

      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Image with Scroll Animation */}
        <Grid item xs={12} md={5} display="flex" justifyContent="center">
          <motion.img
            src={aboutImg}
            alt="About Me"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            animate={{
              y: [0, -10, 0], // Floating effect
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0, 153, 255, 0.8)",
              border: "5px solid rgba(0, 153, 255, 0.8)",
            }}
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "20px",
              cursor: "pointer",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.6)",
              border: "5px solid rgba(255, 255, 255, 0.3)",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            }}
          />
        </Grid>

        {/* Description with Scroll Animation */}
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                maxWidth: "550px",
                margin: "auto",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              }}
            >
              Hi, I'm <b>Kaushal</b>, a passionate web developer with a love for building stunning
              and functional websites. I specialize in React.js, JavaScript, and Material UI.
              My goal is to create seamless digital experiences that leave a lasting impact.
            </Typography>

          </motion.div>

          {/* Interests Section with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Typography
              variant="h5"
              sx={{
                mt: 3,
                color: "lightblue",
                fontWeight: "bold",
                textDecoration: "underline",
                textDecorationThickness: "2px",
                textUnderlineOffset: "5px",
              }}
            >
              My Interests
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 1,
                gap: 0.5,
              }}
            >
              <Typography variant="body1">🏏 Participated in college sports (Cricket)</Typography>
              <Typography variant="body1">🚘 Traveling</Typography>
              <Typography variant="body1">🐕‍🦺 Feeding dogs weekly</Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
