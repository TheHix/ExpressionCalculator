import React, { useState } from "react";
import RegularExpInput from "../regularExpInput/RegularExpInput";
import styles from "./Root.module.css";
import { TextField, Typography, Button } from "@mui/material";
import { userSettings } from "../../../constants/renderData";
import UserSettingsControls from "../userSettingsControls/UserSettingsControls";
import getFilteredText from "../../../utils/filteredText";
import { ListOfTransformations } from "../../../models/listOfTransformations";

//TODO: вывод в код js/py
//TODO: сохранение в Localstorage(?)

const Root = () => {
  const [userSetting, setUserSetting] = useState<string>(userSettings[0]);

  const [regularExp, setRegularExp] = useState<string>("");
  const [replacementExp, setReplacementExp] = useState<string>("");
  const [sourceText, setSourceText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");

  const [listOfTransformations, setListOfTransformations] = useState<ListOfTransformations[]>([]);

  const setFilteredText = () => {
    const regExp = RegExp(regularExp, "gi");
    const filteredText = getFilteredText(sourceText, regExp, replacementExp, userSetting);
    if (!filteredText) return;

    setOutputText(filteredText);
  };

  const goToNextStep = () => {
    if (!outputText) return;

    const newTransformationItem = {
      regularExp,
      replacementExp,
      sourceText,
      outputText,
    };

    setListOfTransformations([...listOfTransformations, newTransformationItem]);

    setRegularExp("");
    setReplacementExp("");
    setSourceText(outputText);
    setOutputText("");
  };

  return (
    <main className={styles.container}>
      <div className={styles.inputFields}>
        <RegularExpInput
          value={regularExp}
          onChange={setRegularExp}
          className={styles.input}
          placeholder="Введите регулярное выражение"
          label="Регулярное выражение"
        />
        <TextField
          value={replacementExp}
          onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setReplacementExp(e.target.value)}
          className={styles.input}
          placeholder="Введите выражение-замену"
          label="Выражение-замена"
          variant="outlined"
        />
        <TextField
          value={sourceText}
          onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setSourceText(e.target.value)}
          className={styles.input}
          label="Исходный текст"
          placeholder="Введите исходный текст"
          multiline
          rows={4}
        />
      </div>
      <div className={styles.controls}>
        <UserSettingsControls userSetting={userSetting} setUserSetting={setUserSetting} />

        <Button variant="contained" onClick={setFilteredText}>
          Получить результат
        </Button>

        <Button variant="contained" onClick={goToNextStep}>
          Продолжить с получившимся текстом
        </Button>
      </div>

      <TextField value={outputText} inputProps={{ readOnly: true }} className={styles.input} multiline rows={7} />
    </main>
  );
};

export default Root;
