import Typography from "@mui/material/Typography";
import { useUser } from '@auth0/nextjs-auth0/client';

const Username = ({ }: {}) => {
    const { user, error, isLoading } = useUser();

    let text;
    if (isLoading) {
        text = "Loading...";
    }
    if (error) {
        text = error.message;
    }
    text = user?.name;

    return (
        <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, marginRight: "20px" }}
            data-testid="dashboardTitle"
        >
            {text}
        </Typography>
    )
}

export default Username;
