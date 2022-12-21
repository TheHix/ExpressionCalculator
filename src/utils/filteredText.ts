import { userSettings } from "./../constants/renderData";

const getFilteredText = (
  text: string,
  regularExp: string,
  replacementExp: string,
  userSetting: string
): string | undefined => {
  if (!text || !regularExp) return "";

  if (!userSettings.includes(userSetting)) {
    throw new Error("Неизвестная пользовательская настройка");
  }

  const regExp = RegExp(regularExp, "gi");

  if (userSetting === userSettings[0]) {
    return text.replace(regExp, replacementExp);
  }
  if (userSetting === userSettings[1]) {
    return text.match(regExp)?.join("");
  }
  if (userSetting === userSettings[2]) {
    return text.match(regExp)?.join("").replace(regExp, replacementExp);
  }

  return "";
};

export default getFilteredText;
