import { withStyles } from "@material-ui/core";

const styles = () => ({
  card: {
    padding: "10px",
    backgroundColor: "#0000007a",
    borderRadius: "10px",
    marginBottom: "5px",
    fontsize: "15px",
    color: "#fff",
    fontWeight: "600",
  },
});
// location list component
const LocationList = (props) => {
  const { classes, data } = props;
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className={classes.card}>{item}</div>
      ))}
    </div>
  );
};
export default withStyles(styles)(LocationList);
