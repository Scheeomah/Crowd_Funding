import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openSupportModal } from '../redux/uiSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.ui.isModalOpen);

  // Early return if modal is not open
  if (!isModalOpen) return null;

  const handleCloseModal = (e) => {
    e.preventDefault();
    dispatch(closeModal());
  };

  const handleSupportClick = () => {
    // Close the main modal and open the support modal
    dispatch(closeModal());
    dispatch(openSupportModal());
  };

  return (
    <section className={`modal ${isModalOpen ? 'active' : ''}`}>
      <div className="modal--overlay" onClick={handleCloseModal}></div>

      <div className="modal--content">
        <div className="modal--box">
          <a href="#" className="close-btn" onClick={handleCloseModal}>
            <img src="./images/icon-close-modal.svg" alt="Close modal" />
          </a>

          <h3>Back this project</h3>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out into the world?
          </p>

          <div className="modal--box-content">
            <h4>Choose your pledge</h4>
            <label>
              <input type="radio" name="pledge" value="25" />
              Pledge $25 or more
            </label>
            <label>
              <input type="radio" name="pledge" value="50" />
              Pledge $50 or more
            </label>
            <label>
              <input type="radio" name="pledge" value="75" />
              Pledge $75 or more
            </label>
          </div>

          <div className="modal--box-slider">
            <label htmlFor="range">Select amount</label>
            <input type="range" id="range" min="25" max="100" step="25" defaultValue="25" />
          </div>

          <div className="modal--box-footer">
            <button className="support-btn" id="support-btn" onClick={handleSupportClick}>
              Support Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
