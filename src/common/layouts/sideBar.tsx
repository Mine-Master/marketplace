import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import { TABS } from "app/constants";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material";
import { LocalStorageKeys } from "store/storage";
import { mediaQueries } from "styles/mediaQueries";
import history from "app/router/history";
// import { AppPages } from "app/types";
import LazyImageComponent from "app/components/image/lazyImage";

interface SideBarProps {
  open: boolean;
  onCloseDrawer: () => void;
}

export const SideBar: FC<SideBarProps> = ({ open = false, onCloseDrawer }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const localOpenCategory = localStorage.getItem(
    LocalStorageKeys.SIDEBAR_OPEN_CATEGORY
  );

  const [openCategory, setOpenCategory] = useState<string | null>(
    localOpenCategory || "Verifications"
  );

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
          sx={{ minHeight: 48, px: 2.5 }}
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
          <ListItemText primary={child.name} sx={{ opacity: open ? 1 : 0 }} />
        </StyledListItemButton>
      </ListItem>
    ));
  };

  return (
    <List>
      {Object.entries(TABS).map(([key, tab]) => (
        <div key={key}>
          <ListItem
            disablePadding
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
                <ItemIcon src={tab.img} />
              </ListItemIcon>
              <ListItemText primary={tab.name} sx={{ opacity: open ? 1 : 0 }} />
            </StyledListItemButton>
          </ListItem>
          {/* Render child items if the category is open */}

          {openCategory === key && !!tab.children && (
            <List>{tab?.children && renderChildItems(tab?.children)}</List>
          )}
        </div>
      ))}
    </List>
  );
};

export const ItemIcon = styled(LazyImageComponent)`
  margin-left: 15px;
`;

const StyledListItemButton = styled(ListItemButton)`
  &.Mui-selected {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  ${mediaQueries.lessThan("sm")`
    padding-left: 15px;
    margin-right: 5px;
    & .MuiListItemIcon-root {
      margin-right: 10px;
    }
    & .MuiTypography-root {
      font-size: 14px;
    }
    `}
`;
