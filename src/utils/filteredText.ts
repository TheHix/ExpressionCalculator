import { userSettings } from "./../constants/renderData";

const getFilteredText = (text: string, regExp: RegExp, replacementExp: string, userSetting: string) => {
  if (!text || !regExp) return "";

  if (!userSettings.includes(userSetting)) {
    throw new Error("Неизвестная пользовательская настройка");
  }

  if (userSetting === userSettings[0]) {
    return text.replace(regExp, replacementExp);
  } else if (userSetting === userSettings[1]) {
    return text.match(regExp)?.join("");
  } else if (userSetting === userSettings[2]) {
    return text.match(regExp)?.join("").replace(regExp, replacementExp);
  }
};

export default getFilteredText;
