import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { SideBar } from "./sideBar";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { mediaQueries } from "styles/mediaQueries";
import { useNavigate } from "react-router-dom";
import { Header } from "./header";
import { IMAGES } from "assets/react_asset_gen";

const DRAWER_WIDTH = 275;

export function AppLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(!isSmallScreen);

  const handleDrawerOpenClose = () => {
    setOpen((prev) => !prev);
  };
  const handleDrawerCloseSm = () => {
    if (isSmallScreen) {
      setOpen(false);
    }
  };
  useEffect(() => {
    if (isSmallScreen && open) {
      setOpen(false);
    }
  }, [isSmallScreen]);

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    navigate(`/`);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          color: "var(--title)",
          bgcolor: "var(--background-color)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpenClose}
            edge="start"
            sx={{
              marginRight: { sm: 3, md: 5 },
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Header open={open} />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            color: "var(--title)",
            bgcolor: "var(--background-color)",
          }}
        >
          <Name>
            <LogoStyle
              src={IMAGES.Logo_Header}
              alt="Logo"
              onClick={handleLogoClick}
            />
            <CompanyNameWrapper>
              <CompanyName>M</CompanyName>
              <BlueCharacter>I</BlueCharacter>
              <CompanyName>N</CompanyName>
              <OrangeCharacter>E</OrangeCharacter>
              &nbsp;
              <CompanyName>MASTERS</CompanyName>
            </CompanyNameWrapper>
          </Name>
          <IconButton
            onClick={handleDrawerOpenClose}
            sx={{
              color: "var(--white)",
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <DividerStyle />
        <Box
          sx={{
            color: "var(--title)",
            bgcolor: "var(--background-color)",
            height: "100%",
          }}
        >
          <SideBar open={open} onCloseDrawer={handleDrawerCloseSm} />
        </Box>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          width: "75%",
          p: 0,
        }}
      >
        <DrawerHeader />
        <Wrapper>{children}</Wrapper>
      </Box>
    </Box>
  );
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  [theme.breakpoints.down("sm")]: {
    ...(!open && {
      width: "100%",
    }),
  },
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper":{
      ...openedMixin(theme),
      borderRight: '1px solid rgba(7, 0, 18, 0.8)', 
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper":  {
      ...closedMixin(theme),
      borderRight: '1px solid rgba(7, 0, 18, 0.8)', 
    },
  }),
  [theme.breakpoints.down("sm")]: {
    display: open ? "block" : "none",
  },
}));

export const Wrapper = styled("div")`
  padding: 32px;
  width: 100%;
  ${mediaQueries.lessThan("xs")`
    padding: 16px;`}
`;

const Name = styled("div")`
  display: flex;
  padding: 0 10px;
  gap: 24px;
  align-items: center;
`;
const CompanyNameWrapper = styled("div")`
  display: flex;
  align-items: center;
`;
const CompanyName = styled("p")`
  font-family: "Big Shoulders Stencil Text", sans-serif;
  color: #fff;
  font-size: 24px;
  margin: 0;
`;

const BlueCharacter = styled("h1")`
  font-family: "Big Shoulders Stencil Text", sans-serif;
  color: var(--Pastal-Blue);
  font-size: 24px;
  margin: 0;
`;

const OrangeCharacter = styled("h1")`
  font-family: "Big Shoulders Stencil Text", sans-serif;
  color: var(--orange);
  font-size: 24px;
  margin: 0;
`;

const LogoStyle = styled("img")`
  cursor: pointer;
  width: 24px;
  height: 26.67px;
`;
const DividerStyle=styled(Divider)`
  border:1px solid rgba(7, 0, 18, 0.8);
`