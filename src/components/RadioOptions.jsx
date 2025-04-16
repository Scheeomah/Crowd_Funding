import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRadio } from '../redux/uiSlice';

const RadioOptions = () => {
  const dispatch = useDispatch();
  const { selectedRadioIndex } = useSelector((state) => state.ui);

  const options = [
    {
      title: 'Pledge with no reward',
      description: 'Choose to support us without a reward.',
    },
    {
      title: 'Bamboo Stand',
      description: 'You get an ergonomic stand made of bamboo.',
    },
    {
      title: 'Black Edition Stand',
      description: 'A black special edition stand.',
    },
  ];

  return (
    <>
      {options.map((option, i) => {
        const isActive = selectedRadioIndex === i;

        return (
          <div
            className={`modal--box ${isActive ? 'outline-change' : ''}`}
            key={i}
          >
            <div className="modal--box-content">
              <div>
                <input
                  type="radio"
                  name="select"
                  checked={isActive}
                  onChange={() => dispatch(selectRadio(i))}
                />
                <h3>{option.title}</h3>
              </div>
              <p>{option.description}</p>
            </div>

            <div className={`modal--box-footer ${isActive ? 'active' : ''}`}>
              <button id="price-btn">
                <span>Continue</span>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RadioOptions;
