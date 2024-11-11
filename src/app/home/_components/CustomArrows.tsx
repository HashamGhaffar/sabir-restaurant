import { Box } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";

export function CustomLeftArrow(props: any) {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: { xs: "20px", sm: "-40px", md: "-55px", lg: "-70px" },
        transform: "translateY(-50%)  rotate(180deg)",
        maxWidth: { xs: "25px", md: "30px", lg: "35px", xl: "42px" },
        width: "100%",
        zIndex: "40",
      }}
    >
      <Image
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
        src={svgs.Arrow}
        alt="arrow left"
      />
    </Box>
  );
}

export function CustomRightArrow(props: any) {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: { xs: "20px", sm: "-40px", md: "-55px", lg: "-70px" },
        zIndex: "40",
        transform: "translateY(-50%)",
        maxWidth: { xs: "25px", md: "30px", lg: "35px", xl: "42px" },
        width: "100%",
      }}
    >
      <Image
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
        src={svgs.Arrow}
        alt="arrow right"
      />
    </Box>
  );
}
