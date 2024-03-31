import React, { useState } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";
import EditTask from "../modals/EditTask";
const TodoCards = ({ taskObj, index, deleteTodo, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const colors = [
    {
      primaryColor: "rgb(0, 255, 255)", // Neon Cyan
      secondaryColor: "rgba(0, 255, 255, 0.4)", // Transparent Neon Cyan
    },
    {
      primaryColor: "rgb(255, 0, 255)", // Neon Magenta
      secondaryColor: "rgba(255, 0, 255, 0.4)", // Transparent Neon Magenta
    },
    {
      primaryColor: "rgb(255, 255, 0)", // Neon Yellow
      secondaryColor: "rgba(255, 255, 0, 0.4)", // Transparent Neon Yellow
    },
    {
      primaryColor: "rgb(0, 255, 0)", // Neon Green
      secondaryColor: "rgba(0, 255, 0, 0.4)", // Transparent Neon Green
    },
    {
      primaryColor: "rgb(255, 105, 180)", // Neon Pink
      secondaryColor: "rgba(255, 105, 180, 0.4)", // Transparent Neon Pink
    },
    {
      primaryColor: "rgb(50, 205, 50)", // Lime Green
      secondaryColor: "rgba(50, 205, 50, 0.4)", // Transparent Lime Green
    },
  ];

  const deleteCard = () => {
    deleteTodo(index);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };
  return (
    <>
      <div
        className=" mb-3 card-ver"
        style={{
          "border-bottom": `4px solid ${colors[index % 6].primaryColor}`,
        }}
      >
        <h5
          tag="h5"
          className=" name"
          style={{ background: colors[index % 6].secondaryColor }}
        >
          {taskObj.Name}
        </h5>
        <CardBody>
          <CardText tag="p" className=" desc">
            {taskObj.Description}
          </CardText>
          <div className="icons">
            <i
              className="far fa-edit edit"
              style={{
                color: colors[index % 6].primaryColor,
                cursor: "pointer",
              }}
              onClick={() => setModal(true)}
            ></i>
            <i
              className="fas fa-trash"
              style={{
                color: colors[index % 6].primaryColor,
                cursor: "pointer",
              }}
              onClick={deleteCard}
            ></i>
          </div>
        </CardBody>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </>
  );
};

export default TodoCards;
