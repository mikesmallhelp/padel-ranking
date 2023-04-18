import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

const LogoutButton = ({ }: {}) => {
  return (
    <Button color="inherit" href="/api/auth/logout">
      <Typography
        component="h2"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ textTransform: "none" }}
        data-testid="dashboardTitle"
      >
        Logout
      </Typography>
    </Button>
  )
}

export default LogoutButton;