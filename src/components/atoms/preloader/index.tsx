import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { PreloaderProps } from "@component/types/Prealoder";

const Preloader: React.FC<PreloaderProps> = ({ width, height }) => {
  const loaderWidth = width ? width + "px" : "100%";
  const loaderHeight = height ? height + "px" : "100vh";
  return (
    <Box
      sx={{
        width: loaderWidth,
        height: loaderHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Preloader;
