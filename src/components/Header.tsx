import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

interface Props {
  name: string;
  email: string;
  phone: string;
  address: string;
  photoUrl?: string;
}

const Header: React.FC<Props> = ({ name, email, phone, address, photoUrl }) => {
  return (
    <Box textAlign="center" mb={4}>
      {photoUrl && <Avatar src={photoUrl} sx={{ width: 120, height: 120, mx: "auto", mb: 2 }} />}
      <Typography variant="h3" fontWeight="bold">{name}</Typography>
      <Typography variant="body1">{email} | {phone}</Typography>
      <Typography variant="body1">{address}</Typography>
    </Box>
  );
};

export default Header;
