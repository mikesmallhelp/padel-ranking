import Typography from "@mui/material/Typography";
import { useUser } from "@auth0/nextjs-auth0/client";

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
            variant="h6"
            noWrap
            sx={{ marginRight: "20px" }}
        >
            {text}
        </Typography>
    )
}

export default Username;
