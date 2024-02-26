import * as React from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/material";
import("prettier").Config();
function App() {
  return (
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
      <Button variant="contained" onClick={() => alert("Hello Developer!")}>
        <AddCircleOutlineIcon />
      </Button>
    </Box>
  );
}

export default App;
