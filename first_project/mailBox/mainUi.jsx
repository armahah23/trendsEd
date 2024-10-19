// import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./styleComponents/ResponsiveAppBar";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";

function MainUi() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = () => {
    console.log("checked");
  };

  return (
    <Box
      sx={{
        margin: "3px", // setting margin
        backgroundColor: "#1976d200", // very light gray
        padding: "16px", // optional: for spacing inside the container
        borderRadius: "4px", // optional: rounding the edges for a softer look
        boxShadow: 1, // optional: to add a subtle shadow
        height: "600px", // setting height to 100% of the parent container
      }}
    >
      <ResponsiveAppBar />
      {/* new message */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <Button variant="contained" sx={{ margin: "10px 0px 5px 20px" }}>
          NEW MESSAGE
        </Button>
        <Fab
          color="primary"
          aria-label="add"
          sx={{ height: "20px", width: "40px" }}
        >
          <AddIcon />
        </Fab>
      </Box>

      {/* inbox */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          height: "100%",
          gap: "16px", // setting gap between the two buttons
          marginTop: "10px",
        }}
        // style={{ backgroundColor: "lightgreen" }}
      >
        {/* navigation box */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "flex-start",
            alignItems: "center",
            // height: "",
            width: "15%",
          }}
          style={{ marginTop: "10px" }}
        >
          <Button
            variant="outlined"
            size="medium"
            sx={{
              width: "80%",
              ":hover": { backgroundColor: "blue", color: "white" },
            }}
          >
            Inbox
          </Button>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              width: "80%",
              ":hover": { backgroundColor: "blue", color: "white" },
            }}
          >
            SENT
          </Button>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              width: "80%",
              ":hover": { backgroundColor: "blue", color: "white" },
            }}
          >
            DRAFT
          </Button>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              width: "80%",
              ":hover": { backgroundColor: "blue", color: "white" },
            }}
          >
            STARED
          </Button>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              width: "80%",
              ":hover": { backgroundColor: "blue", color: "white" },
            }}
          >
            TRASH
          </Button>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              width: "80%",
              ":hover": { backgroundColor: "blue", color: "white" },
            }}
          >
            SPAM
          </Button>
          
        </Box>

        {/* mail box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "85%",
            height: "350px",
            flexDirection: "column",
          }}
          style={{
            backgroundColor: "#eee",
            margin: "5px 10px 0 0",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "-moz-initial",
          }}
        >
          <Box
            sx={{
              borderRadius: "10px",
              width: "100%",
              bgcolor: "#ddd",
              padding: "0px 2px",
              // margin: "10px 10px",
              boxShadow: "-moz-initial",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Checkbox
              // checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Box
              sx={{
                width: "100%",
                marginLeft: "15px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <AccountCircleRoundedIcon />
              <Typography variant="h6" sx={{ color: "#1976d2" }}>
                Facebook:
              </Typography>
              <Typography sx={{ size: "12px" }}>
                Hi Joe this is malin you have massage about party
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              width: "100%",
              bgcolor: "#ddd",
              padding: "0px 2px",
              margin: "10px 5px",
              boxShadow: "-moz-initial",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Checkbox
              // checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Box
              sx={{
                width: "100%",
                marginLeft: "15px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <AccountCircleRoundedIcon />
              <Typography variant="h6" sx={{ color: "#1976d2" }}>
                Linked in:
              </Typography>
              <Typography sx={{ size: "12px" }}>
                You have a new connection
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              width: "100%",
              bgcolor: "#ddd",
              padding: "0px 2px",
              // margin: "10px 10px",
              boxShadow: "-moz-initial",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Checkbox
              // checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Box
              sx={{
                width: "100%",
                marginLeft: "15px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <AccountCircleRoundedIcon />
              <Typography variant="h6" sx={{ color: "#1976d2" }}>
                trends ed:
              </Typography>
              <Typography sx={{ size: "12px" }}>Good job Buddyy</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              width: "100%",
              bgcolor: "#ddd",
              padding: "0px 2px",
              margin: "10px 5px",
              boxShadow: "-moz-initial",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Checkbox
              // checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Box
              sx={{
                width: "100%",
                marginLeft: "15px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <AccountCircleRoundedIcon />
              <Typography variant="h6" sx={{ color: "#1976d2" }}>
                New Wire:
              </Typography>
              <Typography sx={{ size: "12px" }}>
                biggest changes in few days
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              width: "100%",
              bgcolor: "#ddd",
              padding: "0px 2px",
              // margin: "10px 10px",
              boxShadow: "-moz-initial",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Checkbox
              // checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Box
              sx={{
                width: "100%",
                marginLeft: "15px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <AccountCircleRoundedIcon />
              <Typography variant="h6" sx={{ color: "#1976d2" }}>
                John Doe:
              </Typography>
              <Typography sx={{ size: "12px" }}>
                Hi Joe this is malin you have massage about party
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "10px",
              width: "100%",
              bgcolor: "#ddd",
              padding: "0px 2px",
              margin: "10px 5px",
              boxShadow: "-moz-initial",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Checkbox
              // checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Box
              sx={{
                width: "100%",
                marginLeft: "15px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <AccountCircleRoundedIcon />
              <Typography variant="h6" sx={{ color: "#1976d2" }}>
                Google Alert:
              </Typography>
              <Typography sx={{ size: "12px" }}>Security thread</Typography>
            </Box>
          </Box>
          <Box>
            <MobileStepper
              variant="dots"
              steps={6}
              position="static"
              activeStep={activeStep}
              sx={{ maxWidth: 400, flexGrow: 1 }}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === 5}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainUi;
