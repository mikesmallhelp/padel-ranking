import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const LogoutButton = ({ }: {}) => {
  return (
    <Button color="inherit" href="/api/auth/logout">
      <Typography
        variant="h6"
        sx={{ textTransform: "none" }}
      >
        Logout
      </Typography>
    </Button>
  )
}

export default LogoutButton;
