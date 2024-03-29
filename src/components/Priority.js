import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// const StyledRating = withStyles({
//   iconFilled: {
//     color: "#ff6d75",
//   },
//   iconHover: {
//     color: "#ff3d47",
//   },
// })(Rating);

// const customIcons = {
//   1: {
//     icon: <SentimentVeryDissatisfiedIcon />,
//     label: "Very Dissatisfied",
//   },
//   2: {
//     icon: <SentimentDissatisfiedIcon />,
//     label: "Dissatisfied",
//   },
//   3: {
//     icon: <SentimentSatisfiedIcon />,
//     label: "Neutral",
//   },
//   4: {
//     icon: <SentimentSatisfiedAltIcon />,
//     label: "Satisfied",
//   },
//   5: {
//     icon: <SentimentVerySatisfiedIcon />,
//     label: "Very Satisfied",
//   },
// };

// function IconContainer({ value, ...other }) {
//   return <span {...other}>{customIcons[value].icon}</span>;
// }

// IconContainer.propTypes = {
//   value: PropTypes.number.isRequired,
// };

export default function CustomizedRatings({ handleInputChange,values}) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Priority</Typography>
        <Rating
          name="myPriority"
          value={Number(values.myPriority)}
          onChange={(newRating) => {
            handleInputChange(newRating);
          }}
          max={10}
        />
      </Box>
    </div>
  );
}
