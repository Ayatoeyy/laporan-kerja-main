import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifikasi = () => {
  const notify = () => toast("Ingatkan Tugas!");

  return (
    <div>
      <h2>Notifikasi</h2>
      <button onClick={notify}>Kirim Pengingat</button>
      <ToastContainer />
    </div>
  );
};

export default Notifikasi;
