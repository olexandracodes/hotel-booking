import React from "react";
import {
	Box,
	IconButton,
	Card,
	CardMedia,
	CardContent,
	Typography,
    Button
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
			name: "Standard ",
			image:
				"https://images.pexels.com/photos/14025022/pexels-photo-14025022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			id: 2,
			name: "Deluxe ",
			image:
				"https://images.pexels.com/photos/29000313/pexels-photo-29000313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			id: 3,
			name: "Suite",
			image:
				"https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			id: 4,
			name: "Presidential ",
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
				sx={{ marginBottom: "80px" }}
			>
				{facilities.map((facility) => (
					<Grid item xs={6} sm={2} key={facility.id} textAlign="center">
						<IconButton sx={{ color: "#DFAA5B" }}>{facility.icon}</IconButton>
						<Typography
							sx={{ fontSize: "16px", fontWeight: "300", color: "#957554" }}
						>
							{facility.label}
						</Typography>
					</Grid>
				))}
			</Grid>

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
				{t("room_rates")}
			</Typography>
			<Grid container spacing={3} justifyContent="center" sx={{ marginBottom: "80px" }}>
			{rooms.map((room) => (
				<Grid item xs={6} key={room.id}>
					<Card sx={{ position: "relative" }}>
						<CardMedia
							component="img"
							height="360px"
							image={room.image}
							alt={room.name}
							sx={{
								objectFit: "cover",
							}}
						/>
						<Box
							sx={{
								position: "absolute",
								bottom: 0,
								left: 0,
								width: "100%",
								height: "60%",
								background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
							}}
						/>
						<CardContent
							sx={{
								position: "absolute",
								bottom: "10px",
								left: "50%",
								transform: "translateX(-50%)",
								textAlign: "center",
								color: "#fff",
							}}
						>
							<Typography sx={{fontSize: "32px", fontWeight: "500"}}>{room.name}</Typography>
							<Button
								variant="contained"
								sx={{
									marginTop: 2,
									backgroundColor: "#DFAA5B",
									color: "#fff",
									textTransform: "none",
									fontSize: "16px",
									padding: "10px 20px",
									borderRadius: "10px",
								}}
							>
								{t("check_rates")}
							</Button>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>

		</Box>
	);
};

export default RoomGrid;
