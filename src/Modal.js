import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PageviewIcon from "@material-ui/icons/Pageview";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Modal.css"

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: "25%",
    left: "35%",
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'rgba(128, 128, 128, 0.8)',
    border: '2px solid black',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: 'white',
  },
}));

export default function SimpleModal({ image, title, textOne, textTwo, glink, plink }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{title}</h2>
      <p id="simple-modal-description">
      <img className="modal__textImage" src={image} />
        {textOne}<br></br>
        {textTwo}
      </p>
        <div className="modal__linkIconContainer">
            <a href={glink} target="_blank"><GitHubIcon className="modal__linkIcon" style={{ fontSize: 40 }}/></a>
            <a href={plink} target="_blank"><PageviewIcon className="modal__linkIcon" style={{ fontSize: 50 }}/></a>
        </div>
    </div>
  );

  return (
    <div>
      <button className="modal__btn" type="button" onClick={handleOpen}>
        <img className="modal__image" src={image} />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
