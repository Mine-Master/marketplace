import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import { TABS } from "app/constants";
import { useDispatch } from "react-redux";
import { LocalStorageKeys } from "store/storage";
import history from "app/router/history";
// import { AppPages } from "app/types";
import LazyImageComponent from "app/components/image/lazyImage";
import { COMMINUTIES_ITEMS } from "./constants";
import { ROW, ROW_CENTER } from "styles/globalStyles";
import styled from "@emotion/styled/macro";

interface SideBarProps {
  open: boolean;
  onCloseDrawer: () => void;
}

export const SideBar: FC<SideBarProps> = ({ open = false, onCloseDrawer }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const localOpenCategory = localStorage.getItem(
    LocalStorageKeys.SIDEBAR_OPEN_CATEGORY
  );

  const [openCategory, setOpenCategory] = useState<string | null>(
    localOpenCategory || "Verifications"
  );

  const handleSocialIconClick = (socialUrl: string) => {
    window.open(socialUrl, "_blank");
  };

  const handleLogOutClick = () => {
    // dispatch(loginActions.logout());
    // history.push(AppPages.Login)
  };

  const renderChildItems = (children: any[]) => {
    return children.map((child) => (
      <ListItem
        key={child.name}
        disablePadding
        onClick={() => {
          history.push(child.routeTo);
          onCloseDrawer();
        }}
        sx={{
          color: "var(--button)",
        }}
      >
        <StyledListItemButton
          sx={{
            minHeight: 48,
            px: 2.5,
          }}
          selected={
            location.pathname.split("/")[1] ===
            child.name.split(" ")[0].toLocaleLowerCase()
          }
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <ItemIcon src={child.img} />
          </ListItemIcon>
          <StyleListItemText
            primary={child.name}
            sx={{ opacity: open ? 1 : 0 }}
          />
        </StyledListItemButton>
      </ListItem>
    ));
  };

  return (
    <Container>
      <List>
        {Object.entries(TABS).map(([key, tab]) => (
          <div key={key}>
            <ListItems
              disablePadding
              onMouseEnter={() => setHoveredTab(key)}
              onMouseLeave={() => setHoveredTab(null)}
              onClick={() => {
                if (tab.children) {
                  localStorage.setItem(
                    LocalStorageKeys.SIDEBAR_OPEN_CATEGORY,
                    key
                  );
                  setOpenCategory(openCategory === key ? null : key);
                } else {
                  history.push(tab.routeTo);
                }
              }}
              sx={{ display: "block", py: 0, minHeight: 32 }}
            >
              <StyledListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  justifyContent: open ? "initial" : "center",
                  marginLeft: "-20px",
                }}
                selected={
                  location.pathname.split("/")[1] ===
                  tab.name.split(" ")[0].toLocaleLowerCase()
                }
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ItemIcon
                    src={hoveredTab === key ? tab.hoverImg || tab.img : tab.img}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={tab.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </StyledListItemButton>
              <ButtonHover></ButtonHover>
            </ListItems>
            {/* Render child items if the category is open */}

            {openCategory === key && !!tab.children && (
              <List>{tab?.children && renderChildItems(tab?.children)}</List>
            )}
          </div>
        ))}
      </List>
      <IconStyleSmall>
        {COMMINUTIES_ITEMS.map((item, index) => {
          return (
            <ItemWrapper
              key={index}
              onClick={() => handleSocialIconClick(item.url)}
            >
              <IconStyle>
                <CommunityIcon src={item.icon} alt={item.title} />
              </IconStyle>
            </ItemWrapper>
          );
        })}
      </IconStyleSmall>
    </Container>
  );
};

const ButtonHover = styled("div")`
  z-index: -1;
  height: 150%;
  width: 100%;
  position: absolute;
  top: -26%;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(to bottom, transparent, #1f0e30, transparent);
  opacity: 0;
`;
const ListItems = styled(ListItem)`
  ${ROW}
  .MuiTypography-root {
    font-weight: 700;
  }
  z-index: 0;
  position: relative;
  &:hover {
    ${ButtonHover} {
      opacity: 1;
    }
    &:hover .MuiTypography-root {
      background: linear-gradient(to right, #6a26a8, #c77dff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const ItemIcon = styled(LazyImageComponent)`
  margin-left: 15px;
`;

const StyledListItemButton = styled(ListItemButton)`
  z-index: 1;
  position: relative;
  &.Mui-selected {
    background: var(--Color-Primary-variations-Blue-80, rgba(7, 0, 18, 0.8));
  }
  &:hover .MuiListItemIcon-root {
  }
  &:hover {
    border-right: 2px solid #5a189a;
  }
`;
const StyleListItemText = styled(ListItemText)`
  background: linear-gradient(to right, #6a26a8, #c77dff);
`;
const IconStyle = styled("div")`
  width: 48px;
  height: 48px;
  padding: 8px;
  border-radius: 16px;
  margin-left: 5px;
  background-color: rgba(254, 247, 255, 0.05);
  box-shadow: 0px -4px 8px 0px #24004657 inset;
  ${ROW_CENTER}
  cursor: pointer;
`;
const ItemWrapper = styled("div")``;
const IconStyleSmall = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 206px;
`;
const CommunityIcon = styled("img")`
  &:hover {
    transform: scale(1.1);
    transition: 0.1s;
  }
`;
