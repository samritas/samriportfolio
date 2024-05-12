import React, { useState } from "react";
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const style = {
  top: "50%",
  left: "50%",
  bgcolor: "rgba(0, 0, 0, 2)", // Adjust the alpha value for the desired transparency
  transform: "translate(-50%, -50%)",
  // bgcolor: "background.gray",
  boxShadow: 24,
  p: 4,
  position: "relative",
  width: "80%",
  maxWidth: 800,
};

export default function ({ open, handleOpen, handleClose, props }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{ ...style, maxHeight: "93vh", overflowY: "auto" }}
          className="projectDetailviwe "
        >
          <IconButton
            onClick={handleClose}
            size="large"
            aria-label="close"
            style={{
              color: "white",
              position: "absolute",
              top: "13px",
              right: "13px",
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="detailContainer">
            <div className="project_img ColumncontainerStyle">
              <Card
                className="project-card-view"
                style={{
                  maxWidth: "300px",
                  width: "100%",
                  height: "auto",
                  maxHeight: "150px",
                  objectFit: "cover",
                  display: "flex", // Added to enable flexbox layout
                  justifyContent: "center", // Center the image horizontally
                  alignItems: "center", // Center the image vertically
                  // marginBottom:"15px"
                }}
              >
                <Card.Img variant="top" src={props.imgPath} alt="card-img" />
              </Card>
              {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{
                  // position: "absolute",
                  // bottom: "0",
                  // marginBottom: "30px",
                  // left: "11%" /* Center the button horizontally */,
                  // transform:
                  //   "translateX(-50%)" /* Center the button horizontally */,
                  maxWidth: "300px",
                  width: "100%",
                  marginTop:"15px"
                }}
              >
                <div style={{ display: "flex" }}>
                  <PlayArrowIcon /> &nbsp;
                  {"Live"}
                </div>
              </Button>
              )} 
            </div>
            <Card.Body style={{ marginLeft: "13px" }}>
              <Card.Title style={{ paddingTop: "3px" }}>{props.title}</Card.Title>
              <Card.Text>
                <h6 style={{ fontWeight: "bold" }} className="purple">{"Overview :"}</h6>
                 <p  style={{ marginLeft: "13px" }}>{props.Overview}</p> 
                <h6 style={{ fontWeight: "bold" }}className="purple">{"Features :"}</h6>
                <p  style={{ marginLeft: "13px" }}>{props.Features}</p>
                <h6 style={{ fontWeight: "bold" }} className="purple">{"Tech Stack:"}</h6>
                <p  style={{ marginLeft: "13px" }}>{props.Tech_Stack}</p>
              </Card.Text>
            </Card.Body>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
