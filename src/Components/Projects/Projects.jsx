import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import img1 from "../../assets/Port.png";
import img2 from "../../assets/Port2.png";
import img3 from "../../assets/Port3.png";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Infinite Floating Animation
const floatingAnimation = {
  y: [0, -10, 0], // Moves up and down
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

// Rotating Effect
const rotatingAnimation = {
  rotate: [0, 5, -5, 0], // Rotates slightly
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

// Left-Right Animation for 3rd Card
const leftRightAnimation = {
  x: [-10, 10, -10], // Moves left and right
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek and modern personal portfolio built with React and MUI.",
    image: img1,
    link: "https://portfolio-example.com"
  },
  {
    title: "E-Commerce Platform",
    description: "An online store with payment integration and admin dashboard.",
    image: img2,
    link: "https://ecommerce-example.com"
  },
  {
    title: "Home Page",
    description: "A Simple Home Page using HTML and CSS.",
    image: img3,
    link: "https://homepage-example.com"
  }
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{ py: 6, px: 3, color: "#fff", textAlign: "center", maxWidth: "1859px", margin: "auto" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: { xs: "15%", sm: "7%", md: "5%" }, mt: "5%" }}>
          My Projects
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={itemVariants}>
                <Box sx={{ textAlign: "center", mb: 4 }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      borderRadius: "12px",
                      border: "5px solid lightblue",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
                      marginBottom: "20px",
                    }}
                    animate={
                      index === 0 ? floatingAnimation : index === 1 ? rotatingAnimation : leftRightAnimation
                    }
                    whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(173, 216, 230, 1)" }}
                  />

                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>{project.title}</Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>{project.description}</Typography>

                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#1E3A8A", "&:hover": { backgroundColor: "#122F6B" } }}
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      View More
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Projects;
