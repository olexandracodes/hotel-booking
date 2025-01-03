import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
	return (
		<Box
			sx={{
				mt: 4,
				py: 2,
				backgroundColor: "#000",
				textAlign: "center",
			}}
		>
			<Typography variant="body2" gutterBottom>
				Contact us: info@hotel.com
			</Typography>
			<Typography variant="body2">
				<Link href="#">Privacy Policy</Link> |{" "}
				<Link href="#">Terms of Service</Link>
			</Typography>
		</Box>
	);
};

export default Footer;
