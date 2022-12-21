import React, { FC, useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ListOfTransformations } from "../../../models/listOfTransformations";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "10px",
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

interface ModalCode {
  open: boolean;
  transformationList: ListOfTransformations[];
  handleClose: () => void;
}

const ModalCode: FC<ModalCode> = ({ open, handleClose, transformationList }) => {
  const theme = useTheme();

  const codeStyles = {
    mt: 2,
    mb: 2,
    padding: "8px",
    borderRadius: "4px",
    backgroundColor: theme.palette.mode === "dark" ? "white" : "#08090a",
    color: theme.palette.mode === "dark" ? "#121212" : "white",
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Python
        </Typography>
        <Typography sx={codeStyles}>
          <code>
            import re <br />
            <br />
            transformations = {JSON.stringify(transformationList)}
            <br />
            <br />
            for transformation in transformations:
            <br />
            <pre> sourceText = transformation['sourceText']</pre>
            <pre> regularExp = transformation['regularExp']</pre>
            <pre> replacementExp = transformation['replacementExp']</pre>
            <pre> outputText = re.sub(regularExp, replacementExp, sourceText)</pre>
            <pre> print(outputText)</pre>
          </code>
        </Typography>
        <Typography variant="h6" component="h2">
          JavaScript
        </Typography>
        <Typography sx={codeStyles}>
          <code>
            const transformations = {JSON.stringify(transformationList)}
            <br />
            <br />
            {`for (const transformation of transformations) {`}
            <br />
            <pre> {`const {sourceText, regularExp, replacementExp} = transformation;`}</pre>
            <pre> const outputText = sourceText.replace(new RegExp(regularExp, 'gi'), replacementExp);</pre>
            <pre> console.log(outputText);</pre>
            {`}`}
          </code>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalCode;
