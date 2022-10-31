import axios from "axios";
import React from "react";

const UsersList = ({ usersList }) => {
  return (
    <div>
      <h1>Users List</h1>
      {usersList.results.map((user) => {
        return (
          <p key={user.id}>
            Name: {user.name}, Status: {user.status}
          </p>
        );
      })}
    </div>
  );
};

export default UsersList;

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return {
    props: {
      usersList: data,
    },
  };
}
