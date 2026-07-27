import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import "../assets/styles/Navigation.scss";

const drawerWidth = 260;
const navItems = [
  ["Expertise", "expertise"],
  ["History", "history"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

type NavigationProps = {
  parentToChild: { mode: string };
  modeChange: () => void;
};

function Navigation({ parentToChild, modeChange }: NavigationProps) {
  const { mode } = parentToChild;
  const isDark = mode === "dark";

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(globalThis.scrollY > 40);
    };

    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the nav item for whichever section is currently in view.
  useEffect(() => {
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box className="navigation-bar-responsive" sx={{ textAlign: "left" }}>
      <div className="mobile-menu-top">
        <span className="mobile-menu-brand">GLong</span>
        <IconButton
          onClick={handleDrawerToggle}
          aria-label="close menu"
          size="small"
          className="mobile-menu-close"
        >
          <MenuIcon fontSize="small" />
        </IconButton>
      </div>
      <Divider className="mobile-menu-divider" />
      <List>
        {navItems.map(([label, id]) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              className={`mobile-menu-item${
                activeSection === id ? " active" : ""
              }`}
              onClick={() => scrollToSection(id)}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider className="mobile-menu-divider" />
      <button
        className="mobile-mode-toggle"
        onClick={(e) => {
          e.stopPropagation();
          modeChange();
        }}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? (
          <LightModeIcon fontSize="small" />
        ) : (
          <DarkModeIcon fontSize="small" />
        )}
        {isDark ? "Light mode" : "Dark mode"}
      </button>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        elevation={0}
        className={`navbar-fixed-top ${isDark ? "dark-mode" : "light-mode"}${
          scrolled ? " scrolled" : ""
        }`}
      >
        <Toolbar className="navigation-bar">
          <span
            className="nav-brand"
            onClick={() => globalThis.scrollTo({ top: 0, behavior: "smooth" })}
          >
            GLong
          </span>

          <Box
            className="nav-links-desktop"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {navItems.map(([label, id]) => (
              <Button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`nav-link-btn${
                  activeSection === id ? " active" : ""
                }`}
                disableRipple
              >
                {label}
              </Button>
            ))}
          </Box>

          <Box
            className="nav-right"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <IconButton
              onClick={() => modeChange()}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              className="mode-toggle-btn"
              size="small"
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="end"
              onClick={handleDrawerToggle}
              className="mobile-menu-btn"
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          className={isDark ? "dark-mode" : "light-mode"}
          PaperProps={{
            className: `nav-drawer-paper ${isDark ? "dark-mode" : "light-mode"}`,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
