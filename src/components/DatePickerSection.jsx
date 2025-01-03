import React from "react";
import {
	Box,
	Button,
	MenuItem,
	Select,
	InputLabel,
	FormControl,
	InputAdornment,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePickerSection = () => {
	const { t } = useTranslation();

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: 2,
				height: "120px",
				width: "100%",
			}}
		>
			<FormControl
				fullWidth
				variant="outlined"
				sx={{
					width: "25%",
					height: "60px",
					fontSize: "20px",
					fontFamily: "'Ubuntu', sans-serif",
					fontWeight: "300",
				}}
			>
				<InputLabel>{t("select_city")}</InputLabel>
				<Select
					defaultValue=""
					sx={{
						borderRadius: "10px",
						height: "60px",
						backgroundColor: "#fff",
						"& .MuiOutlinedInput-root": {
							borderRadius: "10px",
						},
						"& .MuiSelect-icon": {
							color: "#DFAA5B",
						},
					}}
				>
					<MenuItem value="london">London</MenuItem>
					<MenuItem value="kyiv">Kyiv</MenuItem>
				</Select>
			</FormControl>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					label={t("check_in")}
					sx={{
						borderRadius: "10px",
						height: "60px",
						backgroundColor: "#fff",
						"& .MuiInputBase-root": {
							height: "60px",
						},
						"& .MuiInputBase-input": {
							color: "#000",
							fontFamily: "'Ubuntu', sans-serif",
							opacity: 0.5,
							fontSize: "20px",
							fontWeight: "300",
						},
						"& .MuiSvgIcon-root": {
							color: "#DFAA5B",
						},
					}}
				/>
			</LocalizationProvider>

			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					label={t("check_out")}
					sx={{
						borderRadius: "10px",
						height: "60px",
						backgroundColor: "#fff",
						"& .MuiInputBase-root": {
							height: "60px",
						},
						"& .MuiInputBase-input": {
							color: "#000",
							fontFamily: "'Ubuntu', sans-serif",
							opacity: 0.5,
							fontSize: "20px",
							fontWeight: "300",
						},
						"& .MuiSvgIcon-root": {
							color: "#DFAA5B",
						},
					}}
				/>
			</LocalizationProvider>

			<Button
				variant="contained"
				size="large"
				sx={{
					height: "60px",
					borderRadius: "10px",
					backgroundColor: "#DFAA5B",
					color: "#fff",
					textTransform: "none",
					padding: "0 16px",
					fontFamily: "'Ubuntu', sans-serif",
					fontSize: "20px",
					fontWeight: "300",
				}}
			>
				{t("check_availability")}
			</Button>
		</Box>
	);
};

export default DatePickerSection;
