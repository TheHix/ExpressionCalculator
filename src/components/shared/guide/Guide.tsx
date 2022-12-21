import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { guideRows } from "../../../constants/renderData";
import styles from "./Guide.module.css";

const Guide = () => {
  return (
    <div className={styles.container}>
      <Typography align="center" variant="h5" component="h2" sx={{ mb: 3 }}>
        Справочник по регулярным выражениям
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "16px" }}>Регулярное выражение</TableCell>
              <TableCell sx={{ fontSize: "16px" }} align="left">
                Описание
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {guideRows.map((row, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell sx={{ fontSize: "14px" }} component="th" scope="row">
                  {row.regExp}
                </TableCell>
                <TableCell sx={{ fontSize: "14px" }} align="left">
                  {row.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Guide;
