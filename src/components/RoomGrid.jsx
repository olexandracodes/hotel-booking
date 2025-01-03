import React from "react";
import {
	Box,
	IconButton,
	Card,
	CardMedia,
	CardContent,
	Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import CoffeeIcon from "@mui/icons-material/Coffee";
import WavesIcon from "@mui/icons-material/Waves";
import WifiIcon from "@mui/icons-material/Wifi";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

const RoomGrid = () => {
	const { t } = useTranslation();

	const facilities = [
		{
			id: 1,
			icon: <CoffeeIcon sx={{ fontSize: "60px" }} />,
			label: t("rooms_kitchen"),
		},
		{
			id: 2,
			icon: <WavesIcon sx={{ fontSize: "60px" }} />,
			label: t("rooms_pool"),
		},
		{
			id: 3,
			icon: <WifiIcon sx={{ fontSize: "60px" }} />,
			label: t("rooms_wifi"),
		},
		{
			id: 4,
			icon: <FitnessCenterIcon sx={{ fontSize: "60px" }} />,
			label: t("rooms_gym"),
		},
		{
			id: 5,
			icon: <LocalTaxiIcon sx={{ fontSize: "60px" }} />,
			label: t("rooms_taxi"),
		},
	];

	const rooms = [
		{
			id: 1,
			name: "Standard Room",
			image:
				"https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 2,
			name: "Deluxe Room",
			image:
				"https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 3,
			name: "Suite",
			image:
				"https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 4,
			name: "Presidential Suite",
			image:
				"https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];

	return (
		<Box
			sx={{
				backgroundColor: "#fff",
				margin: "60px 60px 0" ,
				height: "auto",
				position: "relative",
				top: "-140px",
				zIndex: 1,
                borderRadius: "10px",
			}}
		>
			<Typography
				variant="h4"
				sx={{
					textAlign: "center",
                    padding: "42px 0",
					fontFamily: "'Ubuntu', sans-serif",
					fontSize: "45px",
					color: "#957554",
				}}
			>
				{t("facilities")}
			</Typography>

			<Grid
				container
				spacing={4}
				justifyContent="center"
				sx={{ marginBottom: "40px" }}
			>
				{facilities.map((facility) => (
					<Grid item xs={2} sm={2} key={facility.id} textAlign="center">
						<IconButton sx={{ color: "#DFAA5B" }}>{facility.icon}</IconButton>
						<Typography
							sx={{ fontSize: "16px", fontWeight: "300", color: "#333" }}
						>
							{facility.label}
						</Typography>
					</Grid>
				))}
			</Grid>
			<Grid container spacing={3}>
				{rooms.map((room) => (
					<Grid xs={12} sm={4} key={room.id}>
						<Card>
							<CardMedia
								component="img"
								height="240"
								image={room.image}
								alt={room.name}
							/>
							<CardContent>
								<Typography variant="h6">{room.name}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default RoomGrid;
