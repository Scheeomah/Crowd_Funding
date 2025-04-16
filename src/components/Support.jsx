import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSupportModal } from '../redux/uiSlice';

const Support = () => {
  const dispatch = useDispatch();
  
  // Get the state of the support modal from Redux
  const isSupportModalOpen = useSelector((state) => state.ui.isSupportModalOpen);

  const handleSupportClick = () => {
    dispatch(closeSupportModal()); // Close the support modal
  };

  if (!isSupportModalOpen) return null; 

  return (
    <section className="support active"> 
      <img src="./images/icon-check.svg" alt="check" />
      <h2>Thanks for your support!</h2>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
        You will get an email once our campaign is completed.
      </p>
      <button className="main--btn btn" id="support-btn" onClick={handleSupportClick}>
        Got it!
      </button>
    </section>
  );
};

export default Support;
