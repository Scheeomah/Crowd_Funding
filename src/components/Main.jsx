import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../redux/uiSlice';
import { updateBackedAmount, updateBackers } from '../redux/crowdfundingSlice';

const Main = () => {
  const dispatch = useDispatch();

  const backedAmount = useSelector((state) => state.crowdfunding.backedAmount);
  const backers = useSelector((state) => state.crowdfunding.backers);
  const goal = 100000;
  const progress = Math.min((backedAmount / goal) * 100, 100);

  // Handle opening the modal for both "Back this project" and "Select Reward"
  const handleBackProjectClick = () => {
    dispatch(openModal());
  };

  const handleSelectRewardClick = () => {
    dispatch(openModal());
  };

  // Handle updating the backed amount and backers count when a reward is pledged
  const handlePledge = (amount) => {
    dispatch(updateBackedAmount(amount));  // Update the backed amount with the pledge
    dispatch(updateBackers());  // Increment the backers count by 1
  };

  return (
    <main className="main">
      <div className="main--box main--top">
        <a className="main--top-logo" href="#">
          <img src="./images/logo-mastercraft.svg" alt="logo-mastercraft" />
        </a>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className="main--top-links">
          <button className="main--btn btn" id="select-btn" onClick={handleBackProjectClick}>
            Back this project
          </button>
        </div>
      </div>

      <div className="main--box main--range">
        <ul className="main--range-items">
          <li>
            <h2>${backedAmount.toLocaleString()}</h2>
            <p>of ${goal.toLocaleString()} backed</p>
          </li>
          <li>
            <h2>{backers.toLocaleString()}</h2>
            <p>total backers</p>
          </li>
          <li>
            <h2>56</h2>
            <p>days left</p>
          </li>
        </ul>
        <div className="progress-bar">
          <input type="range" id="range" min="0" max="100" value={progress} readOnly />
        </div>
      </div>

      <div className="main--box main--content">
        <h3>About this project</h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to
          improve your posture and make you more comfortable while at work, helping you stay focused on
          the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your
          computer to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>

  
        <div className="main--content-item">
          <div>
            <h3>Bamboo Stand</h3>
            <span className="pledge">Pledge $25 or more</span>
          </div>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional
            campaign, and you’ll be added to a special Backer member list.
          </p>
          <div>
            <h2>101 <span id="left">left</span></h2>
            <button className="main--btn btn" id="select-btn" onClick={() => handlePledge(25)}>
              Select Reward
            </button>
          </div>
        </div>

        <div className="main--content-item">
          <div>
            <h3>Black Edition Stand</h3>
            <span className="pledge">Pledge $75 or more</span>
          </div>
          <p>
            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to
            our Backer member list. Shipping is included.
          </p>
          <div>
            <h2>64 <span id="left">left</span></h2>
            <button className="main--btn btn" id="select-btn" onClick={() => handlePledge(75)}>
              Select Reward
            </button>
          </div>
        </div>

        <div className="main--content-item">
          <div>
            <h3>Mahogany Special Edition</h3>
            <span className="pledge">Pledge $200 or more</span>
          </div>
          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
            You’ll be added to our Backer member list. Shipping is included.
          </p>
          <div>
            <h2>0 <span id="left">left</span></h2>
            <button className="main--btn btn" id="select-btn" disabled>
              Out of Stock
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
