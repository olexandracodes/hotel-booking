import React from "react";
import { AppBar, Toolbar, Button, Select, MenuItem, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = () => {
	const { t, i18n } = useTranslation();

	const handleLanguageChange = (event) => {
		const newLanguage = event.target.value;
		i18n.changeLanguage(newLanguage);
		if (typeof window !== "undefined") {
			localStorage.setItem("language", newLanguage);
		}
	};

	return (
		<AppBar
			position="static"
			sx={{
				backgroundColor: "#F5F5F5",
				boxShadow: "none",
				color: "#957554",
				paddingY: 2,
			}}
		>
			<Toolbar sx={{ justifyContent: "center" }}>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 3,
					}}
				>
					<Button
						sx={{
							color: "#957554",
							fontWeight: "bold",
							fontFamily: "'Ubuntu', sans-serif",
						}}
					>
						{t("our_hotel")}
					</Button>
					<Button
						sx={{
							color: "#957554",
							fontWeight: "bold",
							fontFamily: "'Ubuntu', sans-serif",
						}}
					>
						{t("room_rates")}
					</Button>
					<Button
						sx={{
							color: "#957554",
							fontWeight: "bold",
							fontFamily: "'Ubuntu', sans-serif",
						}}
					>
						{t("facilities")}
					</Button>
					<Button
						sx={{
							color: "#957554",
							fontWeight: "bold",
							fontFamily: "'Ubuntu', sans-serif",
						}}
					>
						{t("contact_us")}
					</Button>
					<Select
						value={i18n.language}
						onChange={handleLanguageChange}
						sx={{
							color: "#957554",
							border: "1px solid #957554",
							fontWeight: "bold",
							"& .MuiSvgIcon-root": { color: "#957554" },
							fontFamily: "'Ubuntu', sans-serif",
						}}
						displayEmpty
					>
						<MenuItem value="en">{t("en")}</MenuItem>
						<MenuItem value="uk">{t("uk")}</MenuItem>
					</Select>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
