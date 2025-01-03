import React from "react";
import { Box, Typography,Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
	const { t } = useTranslation();

	return (
		<Box
			sx={{
				height: "560px",
				width: "100%",
				backgroundImage:
					"url(https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
				backgroundSize: "cover",
				backgroundPosition: "center",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				color: "#fff",
				textAlign: "center",
			}}
		>
			<Typography variant="h2" sx={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: "bold", fontSize: "80px", marginBottom: "16px", }}>
				{t("welcome")}
			</Typography>
			<Typography sx={{ fontFamily: "'Ubuntu', sans-serif",  fontSize: "24px", mb: 2, }}>
				{t("slogan")}
			</Typography>
			<Button
				variant="contained"
				size="large"
				sx={{
					height: "76px",
					width: "370px",
					borderRadius: "10px",
					backgroundColor: "#DFAA5B",
					color: "#fff",
					textTransform: "none",
					padding: "0 16px",
					fontFamily: "'Ubuntu', sans-serif",
					fontSize: "28px",
				}}
			>
				{t("explore")}
			</Button>
		</Box>
	);
};

export default HeroSection;
