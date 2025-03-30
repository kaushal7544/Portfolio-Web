import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Patel Web Solutions ",
    role: "Hypertext Preprocessor (PHP)",
    duration: "2022",
    description:
      "This is 15day intarnship in Collage 3 sem basic in Html, Css and PHP installation.",
  },
  {
    company: "Techmicra IT Solutions",
    role: "Web Development",
    duration: "2023",
    description:
      "This is 45day intarnship in Collage 5 sem basic in Html, Css and React js to basic Projects.",
  },
  {
    company: "N R Crew",
    role: "MERN Stack-Present",
    duration: "2025",
    description:
      "This is 6 Month intarnship in MERN Stack Devlopment to Basic and Advans full Covers.",
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        color: "#fff",
        padding: "4rem 2rem",
        maxWidth: "1800px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 5 }}>
          Experience
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {experiences.map((exp, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  borderRadius: "15px",
                  boxShadow: "0px 10px 20px rgba(0,255,255,0.3)",
                  padding: "2rem",
                  textAlign: "center",
                  position: "relative",
                  backdropFilter: "blur(10px)",
                  height: "250px", // Fixed height
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05) rotate(1deg)",
                    boxShadow: "0px 15px 30px rgba(0,255,255,0.6)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1,
                  // marginTop: "-1%",
                    }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#A0AEC0", mb: 1 }}>
                    {exp.role}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: "italic", mb: 2 }}>
                    {exp.duration}
                  </Typography>
                  <Typography variant="body1">{exp.description}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
