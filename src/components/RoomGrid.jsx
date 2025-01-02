import React from "react";
import { Grid2, Card, CardMedia, CardContent, Typography } from "@mui/material";

const rooms = [
	{ id: 1, name: "Standard Room", image: "/room1.jpg" },
	{ id: 2, name: "Deluxe Room", image: "/room2.jpg" },
	{ id: 3, name: "Suite", image: "/room3.jpg" },
	{ id: 4, name: "Presidential Suite", image: "/room4.jpg" },
];

const RoomGrid = () => {
	return (
		<Grid2 container spacing={2}>
			{rooms.map((room) => (
				<Grid2 item xs={12} sm={6} key={room.id}>
					<Card>
						<CardMedia
							component="img"
							height="140"
							image={room.image}
							alt={room.name}
						/>
						<CardContent>
							<Typography variant="h6">{room.name}</Typography>
						</CardContent>
					</Card>
				</Grid2>
			))}
		</Grid2>
	);
};

export default RoomGrid;
