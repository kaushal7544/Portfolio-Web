import { Grid, Avatar, Typography, Box, keyframes } from "@mui/material";
import { motion } from "framer-motion";
import Logo1 from "../../assets/Html.png";
import Logo2 from "../../assets/CSS.png";
import Logo3 from "../../assets/Tailwind CSS.jpg";
import Logo4 from "../../assets/JavaScript.png";
import Logo5 from "../../assets/material ui.png";
import Logo6 from "../../assets/react.png";
import Logo7 from "../../assets/vite.png";
import Logo8 from "../../assets/git.png";
import Logo9 from "../../assets/github.png";

// Floating Animation
const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

// Rotation Effect on Hover
const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Skills Data
const skills = [
  { name: "HTML", logo: Logo1 },
  { name: "CSS", logo: Logo2 },
  { name: "Tailwind CSS", logo: Logo3 },
  { name: "JavaScript", logo: Logo4 },
  { name: "Material UI", logo: Logo5 },
  { name: "ReactJS", logo: Logo6 },
  { name: "Vite", logo: Logo7 },
  { name: "Git", logo: Logo8 },
  { name: "Github", logo: Logo9 },
];

export default function SkillsSection() {
  return (
    <Box
      id="skills"
      sx={{
        py: 5,
        px: 2,
        textAlign: "center",
        maxWidth: "1873px",
        margin: "auto",
      }}
    >
      {/* Title with Scroll Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // Re-triggers when scrolling
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: "white",
            fontWeight: "bold",
            letterSpacing: 1.2,
            mb: { xs: "15%", sm: "7%", md: "5%" },
            mt: "5%",
          }}
        >
          My Skills
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }} // Re-triggers when scrolling
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  "&:hover .avatar-glow": {
                    animation: `${rotateAnimation} 1s linear`,
                  },
                }}
              >
                <Avatar
                  src={skill.logo}
                  alt={skill.name}
                  className="avatar-glow"
                  sx={{
                    height: { xs: "110px", sm: "110px", md: "150px" }, 
                    width: { xs: "110px", sm: "110px", md: "150px" }, 
                    cursor: "pointer",
                    border: "4px solid #1e3a8a",
                    borderRadius: "50%",
                    bgcolor: "#121212",
                    animation: `${floatAnimation} 3s ease-in-out infinite`,
                    transition: "0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "0px 0px 15px 5px #00e5ff",
                      transform: "scale(1.1)",
                    },
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ color: "white", mt: 1, fontWeight: "bold" }}
                >
                  {skill.name}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
