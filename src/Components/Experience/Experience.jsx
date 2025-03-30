import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import Logo1 from "../../assets/Php-logo.png";
import Logo2 from "../../assets/Web Devlopment.jpg";
import Logo3 from "../../assets/MERN-Stack.png";

const experiences = [
  {
    company: "Patel Web Solutions ",
    role: "Hypertext Preprocessor (PHP)",
    duration: "2022",
    description:
      "Developed dynamic web applications using React.js and Material-UI, improving user experience and performance.",
    logo: Logo1,
  },
  {
    company: "Techmicra IT Solutions",
    role: "Web Development",
    duration: "2023",
    description:
      "Designed intuitive user interfaces and improved usability for various client projects, increasing user engagement.",
    logo: Logo2,
  },
  {
    company: "N R Crew",
    role: "MERN Stack-Present",
    duration: "2025",
    description:
      "Gained hands-on experience in HTML, CSS, JavaScript, and responsive design techniques.",
    logo: Logo3,
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        color: "#fff",
        padding: "4rem 2rem",
        maxWidth: "1841px",
        margin: "auto",
      }}
    >
      {/* Title Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 4, textAlign: "center", marginBottom: { xs: "15%", sm: "", md: "5%" },
            mt: "5%" }}
        >
          Experience
        </Typography>
      </motion.div>

      {/* Grid Layout with Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Grid container spacing={4} justifyContent="center">
          {experiences.map((exp, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={cardVariants} transition={{ duration: 0.6, delay: index * 0.2 }}>
                <Card
                  sx={{
                    background: "#1E293B",
                    color: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
                    padding: "1.5rem",
                    cursor: "pointer",
                    textAlign: "center",
                    position: "relative",
                    margin: "0px 25px 0px 25px",
                    height: "300px", // Fixed height for uniformity
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.08) rotate(2deg)", // Enlarges & tilts
                      boxShadow: "0px 12px 25px rgba(0, 255, 255, 0.7)", // Cyan glow effect
                    },
                  }}
                >
                  {/* Logo Image */}
                  <Box
                    component="img"
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    sx={{
                      position: "absolute",
                      top: "10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      height: "80px",
                      width: "80px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease-in-out",
                      "&:hover": { transform: "rotate(360deg) scale(1.1)" },
                    }}
                  />
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1, mt: "90px" }}>
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
      </motion.div>
    </Box>
  );
};

export default Experience;