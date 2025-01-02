import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const DatePickerSection = () => {
	const { t } = useTranslation();

	return (
		<Box sx={{ display: "flex", gap: 2, mb: 4 }}>
			<TextField type="date" label={t("check_in")} fullWidth />
			<TextField type="date" label={t("check_out")} fullWidth />
			<Button variant="contained" size="large">
				{t("view_rooms")}
			</Button>
		</Box>
	);
};

export default DatePickerSection;
