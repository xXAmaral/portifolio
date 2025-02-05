import { Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../assets/images/Capacete.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
function Hero() {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh"
  }))

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%"
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">Gustavo Amaral</Typography>
              <Typography color="primary" variant="h2" textAlign="center">I'm Software Engineer</Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <button>
                    <DownloadIcon />
                    Download CV
                  </button>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <button>
                    <EmailIcon />
                    Contact Me
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
