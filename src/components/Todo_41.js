import { useState } from 'react';
import Backdrop_41 from '../components/Backdrop_41';
import Modal_41 from '../components/Modal_41';

function Todo_41(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }
  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={showModalHandler}>
            Delete
          </button>
        </div>
      </div>
      {showModal && <Backdrop_41 onClose={closeModalHandler} />}
      {showModal && (
        <Modal_41 text='Are you sure?' onClose={closeModalHandler} />
      )}
    </div>
  );
}

export default Todo_41;
