import React, { FC } from "react";
import { InputLabel, Select, MenuItem, FormControl, SelectChangeEvent } from "@mui/material";
import { userSettings } from "../../../constants/renderData";

interface UserSettingsControlsProps {
  userSetting: string;
  setUserSetting: (value: string) => void;
}

const UserSettingsControls: FC<UserSettingsControlsProps> = ({ userSetting, setUserSetting }) => {
  const onChangeUserSetting = (value: string) => {
    if (value === userSetting) return;
    setUserSetting(value);
  };

  return (
    <FormControl sx={{ maxWidth: "350px"}}>
      <InputLabel id="user-settings-selection-label">Настроки пользователя</InputLabel>
      <Select
        labelId="user-settings-selection-label"
        value={userSetting}
        label="Настроки пользователя"
        onChange={(event: SelectChangeEvent) => onChangeUserSetting(event.target.value)}
      >
        {userSettings.map((userSetting, index) => {
          return (
            <MenuItem key={index} value={userSetting}>
              {userSetting}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default UserSettingsControls;
