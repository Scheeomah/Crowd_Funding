import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
  isModalOpen: false,
  isSupportModalOpen: false,
  isPledgeConfirmationModalOpen: false, 
  isPledgeButtonModalOpen: false,       
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    openSupportModal: (state) => {
      state.isSupportModalOpen = true;
    },
    closeSupportModal: (state) => {
      state.isSupportModalOpen = false;
    },
    openPledgeConfirmationModal: (state) => {
      state.isPledgeConfirmationModalOpen = true;
      state.isPledgeButtonModalOpen = false; // Ensure Pledge Button Modal is closed when Pledge Confirmation is open
    },
    closePledgeConfirmationModal: (state) => {
      state.isPledgeConfirmationModalOpen = false;
    },
    openPledgeButtonModal: (state) => {
      state.isPledgeButtonModalOpen = true;
      state.isPledgeConfirmationModalOpen = false; // Ensure Pledge Confirmation Modal is closed when Pledge Button Modal is open
    },
    closePledgeButtonModal: (state) => {
      state.isPledgeButtonModalOpen = false;
    },
  },
});

export const {
  toggleMenu, openModal, closeModal, openSupportModal, closeSupportModal,
  openPledgeConfirmationModal, closePledgeConfirmationModal, openPledgeButtonModal, closePledgeButtonModal
} = uiSlice.actions;

export default uiSlice.reducer;
