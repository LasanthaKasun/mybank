import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";

const styles = () => ({
  appBar: {
    position: "relative",
  },
  toolbarTitle: {
    flex: 1,
  },
});

const AppBarLine = (props) => {
  const { classes, title } = props;
  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default withStyles(styles)(AppBarLine);
