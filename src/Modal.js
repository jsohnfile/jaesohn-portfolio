import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PageviewIcon from "@material-ui/icons/Pageview";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Modal.css"


function getModalStyle() {
  return {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    border:'0',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'var(--colorOne)',
    border: '2px solid var(--colorThree) !important',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: 'white',
    textShadow:'0 2px 2px black',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '15px',
    outline: '0',
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
      <img className="modal__textImage" src={image} alt="Project Image"/>
        {textOne}<br></br>
        {textTwo}
      </p>
        <div className="modal__linkIconContainer">
            <a href={glink} target="_blank" title="GitHub"><GitHubIcon className="modal__linkIcon" style={{ fontSize: 40 }}/></a>
            <a href={plink} target="_blank" title="View Project"><PageviewIcon className="modal__linkIcon" style={{ fontSize: 50 }}/></a>
        </div>
    </div>
  );

  return (
    <div className="modal">
      <button className="modal__btn" type="button" onClick={handleOpen} title={title}>
        <img className="modal__image" src={image} alt="Project Image"/>
      </button>
      <Modal
        className="modal__modal"
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
