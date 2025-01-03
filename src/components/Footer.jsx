import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<Box
			sx={{
				mt: 4,
				p: 4,
				backgroundColor: "#000",
				color: "#fff",
				textAlign: "center",
			}}
		>
			<Grid
				container
				spacing={4}
				direction="row"
				sx={{
					justifyContent: "space-between",
				}}
			>
				<Grid size={4}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-end",
							alignItems: "start",
							height: "100%",
						}}
					>
						<Typography variant="h6" gutterBottom>
							Hotel
						</Typography>
						<Typography variant="body2" gutterBottom>
							+1 234 567 890
						</Typography>
						<Typography variant="body2">info@hotel.com</Typography>
					</Box>
				</Grid>

				{/* Вторая колонка */}
				<Grid size={4}>
					<Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "start",
								gap: 1,
							}}
						>
							<Link href="#" sx={{ color: "#fff" }}>
								{t("our_hotels")}
							</Link>
							<Link href="#" sx={{ color: "#fff" }}>
								{t("our_conferencing")}
							</Link>
							<Link href="#" sx={{ color: "#fff" }}>
								{t("our_company")}
							</Link>
							<Link href="#" sx={{ color: "#fff" }}>
								{t("hotel_design")}
							</Link>
							<Link href="#" sx={{ color: "#fff" }}>
								{t("careers")}
							</Link>
						</Box>
					</Box>
				</Grid>

				{/* Третья колонка */}
				<Grid size={4}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "start",
						}}
					>
						<Typography variant="h6" gutterBottom>
							{t("subscribe")}
						</Typography>
						<TextField
							fullWidth
							variant="outlined"
							placeholder={t("email")}
							sx={{
								backgroundColor: "#fff",
								borderRadius: "4px",
								marginBottom: "8px",
								"& input": { padding: "10px" },
							}}
						/>
						<Button
							variant="contained"
							sx={{
								width: "100%",
								backgroundColor: "#DFAA5B",
								color: "#fff",
								textTransform: "none",
								padding: "10px",
								borderRadius: "4px",
							}}
						>
							{t("subscribe_now")}
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
