import React, { FC, useState } from "react";
import { Button, Typography, Modal, Box } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ReplayIcon from "@mui/icons-material/Replay";
import styles from "./InteractionControls.module.css";
import UserSettingsControls from "./components/UserSettingsControls";
import ModalCode from "../modalCode/ModalCode";
import { ListOfTransformations } from "../../../models/listOfTransformations";

interface InteractionControlsProps {
  userSetting: string;
  stepNumber: number;
  transformationList: ListOfTransformations[];
  setUserSetting: (setting: string) => void;
  setFilteredText: () => void;
  goToNextStep: () => void;
  resetData: () => void;
}

const InteractionControls: FC<InteractionControlsProps> = ({
  userSetting,
  transformationList,
  stepNumber,
  setUserSetting,
  setFilteredText,
  goToNextStep,
  resetData,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ModalCode transformationList={transformationList} open={open} handleClose={handleClose} />
      <div className={styles.controls}>
        <UserSettingsControls userSetting={userSetting} setUserSetting={setUserSetting} />

        <Button variant="contained" onClick={setFilteredText}>
          Получить результат
        </Button>
        <Button variant="contained" onClick={goToNextStep}>
          Перейти к след. шагу
        </Button>
        <Button startIcon={<CodeIcon />} variant="contained" onClick={handleOpen}>
          Получить код
        </Button>
      </div>

      <div className={styles.commonControls}>
        <Typography variant="h6" component="div">
          Шаг {stepNumber}
        </Typography>
        <Button startIcon={<ReplayIcon />} variant="contained" onClick={resetData}>
          Начать заново
        </Button>
      </div>
    </>
  );
};

export default InteractionControls;
