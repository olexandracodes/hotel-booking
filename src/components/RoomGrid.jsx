import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

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

const RoomGrid = () => {
	return (
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
	);
};

export default RoomGrid;
