import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
	const { t } = useTranslation();

	return (
		<Box
			sx={{
				height: "50vh",
				backgroundImage:
					"url(https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
				backgroundSize: "cover",
				backgroundPosition: "center",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#fff",
				textAlign: "center",
			}}
		>
			<Typography variant="h2" sx={{ fontFamily: "'Ubuntu', sans-serif" }}>
				{t("welcome")}
			</Typography>
		</Box>
	);
};

export default HeroSection;
