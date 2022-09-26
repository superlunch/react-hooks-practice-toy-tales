import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  const { id, name, image, likes } = toy;

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        onDeleteToy(toy);
      });
  }

  function handleLikeClick() {
    const updateObj = {
      likes: toy.likes + 1,
    };

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((res) => res.json())
      .then(onUpdateToy);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"♥"}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to Goodwill
      </button>
    </div>
  );
}

export default ToyCard;
