import React, { memo, useState } from "react";
import RegularExpInput from "../regularExpInput/RegularExpInput";
import styles from "./Root.module.css";
import { TextField } from "@mui/material";
import { userSettings } from "../../../constants/renderData";
import getFilteredText from "../../../utils/filteredText";
import { ListOfTransformations } from "../../../models/listOfTransformations";
import InteractionControls from "../interactionControls/InteractionControls";
import { sessionStorage } from "../../../services/sessionStorage";

const initialList = sessionStorage.getListOfTransformations();

const Root = () => {
  const [userSetting, setUserSetting] = useState<string>(userSettings[0]);

  const [regularExp, setRegularExp] = useState<string>("");
  const [replacementExp, setReplacementExp] = useState<string>("");
  const [sourceText, setSourceText] = useState<string>(initialList[initialList.length - 1]?.outputText ?? "");
  const [outputText, setOutputText] = useState<string>("");

  const [listOfTransformations, setListOfTransformations] = useState<ListOfTransformations[]>(initialList);

  const clearFields = () => {
    setRegularExp("");
    setReplacementExp("");
    setSourceText("");
    setOutputText("");
  };

  const setFilteredText = () => {
    const filteredText = getFilteredText(sourceText, regularExp, replacementExp, userSetting);
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
    sessionStorage.setListOfTransformations([...listOfTransformations, newTransformationItem]);

    clearFields();
    setSourceText(outputText);
  };

  const resetData = () => {
    setListOfTransformations([]);
    sessionStorage.setListOfTransformations([]);

    clearFields();
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

      <InteractionControls
        transformationList={listOfTransformations}
        goToNextStep={goToNextStep}
        resetData={resetData}
        setFilteredText={setFilteredText}
        setUserSetting={setUserSetting}
        stepNumber={listOfTransformations.length + 1}
        userSetting={userSetting}
      />

      <TextField value={outputText} inputProps={{ readOnly: true }} className={styles.input} multiline rows={7} />
    </main>
  );
};

export default memo(Root);
