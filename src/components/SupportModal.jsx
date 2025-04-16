import React from 'react';
import { useDispatch } from 'react-redux';
import { closeSupportModal } from '../redux/uiSlice';
import { updateBackedAmount, updateBackers } from '../redux/crowdfundingSlice'; // Import the actions

const SupportModal = () => {
  const dispatch = useDispatch();

  // Close the modal and update the backedAmount and backers count when user clicks "Got it!"
  const handleCloseSupport = () => {
    dispatch(closeSupportModal()); // Close the modal
    dispatch(updateBackedAmount(0)); 
    dispatch(updateBackers());  
  };

  return (
    <div className="support active">
      <section className="support-modal">
        <img src="./images/icon-check.svg" alt="check" />
        <h2>Thanks for your support!</h2>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
          You will get an email once our campaign is completed.
        </p>
        <button className="main--btn btn" id="support-btn" onClick={handleCloseSupport}>
          Got it!
        </button>
      </section>
    </div>
  );
};

export default SupportModal;
