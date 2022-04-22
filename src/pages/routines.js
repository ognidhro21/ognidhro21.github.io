import {
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Container,
  List,
  Stack,
  Grid,
  CssBaseline,
  Box,
  Paper,
  Button,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useState, useEffect } from "react";
import routines from "../data/routine.json";
import { Class, RoutineAppbar, Footer } from "../components";
import "../styles/index.css";

import theme from "../styles/theme";

const Routines = () => {
  const [routineid, setRoutineid] = useState(0);
  const [day, setDay] = useState(0);
  const [section, setSection] = useState(1);
  const [group, setGroup] = useState(1);
  //divider yayy
  //
  //
  // omg lol
  const [info, setInfo] = useState({
    // default to my section and group
    // as index starts from 0, so 0 means section 1, 1 means section 2, 2 means section 3
    section: 1,
    group: 2,
    saved: false,
  });
  const [selectedDay, setSelectedDay] = useState("");

  const handleChange = (event) => {
    setRoutineid(event.target.value);
  };
  const handleDayChange = (event) => {
    setDay(event.target.value);
  };
  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };
  const handleGroupChange = (event) => {
    setGroup(event.target.value);
  };
  const handleInfoChange = (event) => {
    // change the info acoording to input value in select objects
    if (event.target.name === "section") {
      setInfo({ ...info, section: event.target.value });
    } else {
      setInfo({ ...info, group: event.target.value });
    }
  };
  function handleSubmit() {
    // set user data by submit button
    setInfo({ ...info, saved: true });
    setSection(info.section);
    setGroup(info.group);
  }
  function resetInfo() {
    // reset user data by reset button
    setInfo({ ...info, saved: false });
  }
  useEffect(() => {
    // read user data from local storage and if it exists set the state
    const tempinfo = JSON.parse(localStorage.getItem("og21-student-info"));
    if (tempinfo) {
      setInfo(tempinfo);
      setSection(tempinfo.section);
      setGroup(tempinfo.group);
    }
  }, []);
  useEffect(() => {
    // save users section and group
    localStorage.setItem("og21-student-info", JSON.stringify(info));
  }, [info]);
  useEffect(() => {
    // set next day as default if current time is greater than 5 pm
    var dayIndex;
    const d = new Date();
    const today = d.getDay();
    const hour = d.getHours();
    if (hour >= 17) {
      const nextDay = today + 1;
      dayIndex = nextDay;
      if (nextDay >= 5) {
        dayIndex = 0;
      }
    } else {
      if (today >= 5) {
        dayIndex = 0;
      } else {
        dayIndex = today;
      }
    }
    setDay(dayIndex);
  }, []);

  useEffect(() => {
    // set selected day to update on header
    setSelectedDay(
      routines[routineid].sections[section].groups[group].days[day].name
    );
  }, [day]);

  function Debug() {}
  useEffect(() => {
    Debug();
  });
  return (
    <div className="routines">
      <ThemeProvider theme={theme}>
        {info.saved ? (
          <Box
            sx={{
              minHeight: "100vh",
              backgroundColor: "primary.background",
            }}
          >
            <Container>
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                }}
              >
                Routines
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="routine-select-label">Name</InputLabel>
                <Select
                  labelId="routine-select-label"
                  id="routine-select"
                  value={routineid}
                  label="Name"
                  onChange={handleChange}
                >
                  {routines.map((routine, index) => (
                    <MenuItem key={index} value={index}>
                      {routine.detailedname}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Typography
                variant="h4"
                sx={{
                  mt: 4,
                  mb: 0,
                  p: 0,
                }}
              >
                {selectedDay}
              </Typography>
              <List sx={{ width: "100%" }}>
                {routines[routineid].sections[section].groups[group].days[
                  day
                ].schedules.map((routine, index) => (
                  <Class
                    key={index}
                    code={routine.code}
                    start={routine.start}
                    end={routine.end}
                    practical={routine.practical}
                  />
                ))}
              </List>

              {/*  <RoutineAppbar> */}
              <Stack
                direction="row"
                flexWrap="nowrap"
                spacing={2}
                sx={{
                  my: 2,
                }}
              >
                <FormControl sx={{ minWidth: 80 }}>
                  <InputLabel id="section-select-label">Section</InputLabel>
                  <Select
                    labelId="section-select-label"
                    id="section-select"
                    value={section}
                    label="Section"
                    onChange={handleSectionChange}
                    autoWidth
                    size="small"
                  >
                    {routines[routineid].sections.map((section, index) => (
                      <MenuItem key={index} value={index}>
                        {section.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 80 }}>
                  <InputLabel id="group-select-label">Group</InputLabel>
                  <Select
                    labelId="group-select-label"
                    id="group-select"
                    value={group}
                    label="Group"
                    onChange={handleGroupChange}
                    autoWidth
                    size="small"
                  >
                    {routines[routineid].sections[section].groups.map(
                      (group, index) => (
                        <MenuItem key={index} value={index}>
                          {group.name}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="day-select-label">Day</InputLabel>
                  <Select
                    labelId="day-select-label"
                    id="day-select"
                    value={day}
                    label="Day"
                    onChange={handleDayChange}
                    size="small"
                  >
                    {routines[routineid].sections[section].groups[
                      group
                    ].days.map((day, index) => (
                      <MenuItem key={index} value={index}>
                        {day.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
              {/*}  </RoutineAppbar> */}
              <Button variant="outlined" onClick={resetInfo}>
                Reset Preferences
              </Button>
            </Container>
          </Box>
        ) : (
          <>
            <Grid container component="main" sx={{ height: "100vh" }}>
              <CssBaseline />
              <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                  backgroundImage:
                    "url(https://source.unsplash.com/random?nature)",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                    t.palette.mode === "light"
                      ? t.palette.grey[50]
                      : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
              >
                <Stack
                  justifyContent="center"
                  sx={{
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      my: 8,
                      mx: 4,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "left",
                    }}
                  >
                    <Typography component="h1" variant="h5">
                      I am in.....
                    </Typography>
                    <Box component="form" sx={{ mt: 1 }}>
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          mt: 2,
                        }}
                      >
                        <FormControl sx={{ minWidth: 80 }}>
                          <InputLabel id="section-select-label">
                            Section
                          </InputLabel>
                          <Select
                            labelId="section-select-label"
                            id="section-select"
                            value={info.section}
                            label="Section"
                            onChange={handleInfoChange}
                            autoWidth
                            name="section"
                          >
                            {routines[routineid].sections.map(
                              (section, index) => (
                                <MenuItem key={index} value={index}>
                                  {section.name}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: 80 }}>
                          <InputLabel id="group-select-label">Group</InputLabel>
                          <Select
                            labelId="group-select-label"
                            id="group-select"
                            value={info.group}
                            label="Group"
                            onChange={handleInfoChange}
                            autoWidth
                            name="group"
                          >
                            {routines[routineid].sections[
                              info.section
                            ].groups.map((group, index) => (
                              <MenuItem key={index} value={index}>
                                {group.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Stack>
                      <Button
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </>
        )}
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Routines;
