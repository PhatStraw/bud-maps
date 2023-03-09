import React, { Component, state, setState } from "react";
import { useSwipeable } from "react-swipeable";
import { Global } from '@emotion/react';
import {
  SwipeableDrawer,
  Button,
  List,
  ListItem,
  Box,
  MailIcon,
  ListItemText,
  Divider,
  styled,
  CssBaseline,
  Typography,
  Skeleton
} from "@material-ui/core";

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
      theme.palette.mode === 'light' ? 'gray' : theme.palette.background.default,
  }));
  
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : 'gray',
  }));
  
  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? 'gray' : 'gray',
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  }));

const Menu = (props) => {
    const { window } = props;
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Root>
        <CssBaseline />
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `calc(50% - ${drawerBleeding}px)`,
              overflow: 'visible',
            },
          }}
        />
        {/* <Box sx={{ textAlign: 'center', pt: 1 }}>
          <Button onClick={toggleDrawer(true)}>Open</Button>
        </Box> */}
        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: 'absolute',
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: 'visible',
              right: 0,
              left: 0,
            }}
          >
            <Puller />
            <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
          </StyledBox>
          <StyledBox
            sx={{
              px: 2,
              pb: 2,
              height: '100%',
              overflow: 'auto',
            }}
          >
            {/* <Skeleton variant="rectangular" height="100%" /> */}
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    );
};

export default Menu;
