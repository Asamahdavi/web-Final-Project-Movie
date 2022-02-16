/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import {useState} from 'react';
// material ui as frontend library
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//axios for connecting to the back
import axios from 'axios';

export default function DeletePopUp({id,handleDelete}) {
  const [open, setOpen] = useState(false);
  
  const deleteMovie = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8888/backend/api/movie/delete.php?id=${id}`).then(function(response){
      if(response.status===200){
        handleDelete(id);
        setOpen(false);
      }
    console.log(response.status);
    //200/201 deleted successful
    //404 not found error in sending data

});
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='w-1 p-0 '>
      <Button className='w-1' onClick={handleClickOpen}>
      <img
            
            className="w-11"
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/26e07f/external-delete-miscellaneous-kiranshastry-lineal-kiranshastry.png"
          />
      </Button>
      <Dialog
      
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          {"Delete Movie "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>cancel</Button>
          <Button onClick={() => deleteMovie(id)} >
            delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}