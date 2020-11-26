import React, { useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';

const DeleteButton = ({ id }) => {
  const { setLoading } = useContext(AppContext);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const willDelete = await swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover your account!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      });
      if (willDelete) {
        try {
          await axios({
            method: 'DELETE',
            url: `/api/user/${id}`,
            withCredentials: true
          });
          swal('We hope you found your love in the stars!', {
            icon: 'success'
          });
          setLoading(false);
        } catch (error) {
          swal(`Oops!`, 'Something went wrong.');
        }
      } else {
        swal('Your account is safe!');
      }
    } catch (error) {
      swal(`Oops!`, 'Something went wrong.');
    }
  };
  return (
    <div>
      {/* style how you want it! <div className="button" onClick={handleDelete} ><span className="buttonText">Delete</span></div> */}
    </div>
  );
};

export default DeleteButton;
