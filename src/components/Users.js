import React, { useEffect, useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import useUsers from "../store/store.user";
import InputForm from "./InputForm";
const Users = () => {
  const { users, getUsers, deleteUser } = useUsers();
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <InputForm />
      {users.length > 0 && (
        <Grid container spacing={3}>
          {users.map((user) => (
            <Grid item sm={3} key={user.id}>
              <Paper sx={{ p: 1, m: 2, textAlign: "center" }}>
                <h5>{user.name}</h5>
                <h5>ID: {user.id}</h5>
                <Button onClick={() => deleteUser(user.id)}>Delete</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Users;
