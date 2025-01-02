import React from "react";
import { AppBar, Toolbar, Button, Select, MenuItem } from "@mui/material";
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
		<AppBar position="static" sx={{ mb: 2 }}>
			<Toolbar>
				<Button color="inherit">Home</Button>
				<Button color="inherit">Rooms</Button>
				<Button color="inherit">Contact</Button>
				<Select
					value={i18n.language}
					onChange={handleLanguageChange}
					sx={{ marginLeft: "auto", color: "#fff", borderColor: "#fff" }}
				>
					<MenuItem value="en">English</MenuItem>
					<MenuItem value="uk">Українська</MenuItem>
				</Select>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
