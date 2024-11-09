import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './PaymentPage.module.css'


function PaymentPage() {
  const { plan } = useParams(); // Dapatkan plan dari URL
  const navigate = useNavigate();
  const [showBankOptions, setShowBankOptions] = useState(false);

  const handlePaymentSuccess = () => {
    alert('Pembayaran berhasil!');
    navigate('/'); // Redirect ke halaman lain setelah pembayaran berhasil.
  };

  const handlePaymentCancel = () => {
    navigate('/'); // Navigasi kembali jika pembayaran dibatalkan
  };

  const handleBankTransfer = () => {
    setShowBankOptions(true); // Tampilkan opsi bank
  };

  const handleSelectBank = (bank) => {
    alert(`Anda memilih transfer bank melalui ${bank}. Lanjutkan pembayaran.`);
    handlePaymentSuccess();
  };

  return (
    <div className="payment-page">
      <h1>Pembayaran</h1>
      <p>Anda sedang memilih paket {plan}.</p>
      <p>Silakan pilih metode pembayaran di bawah ini:</p>

      {/* Metode pembayaran */}
      <div className="payment-methods">
        <button onClick={handlePaymentSuccess}>Kartu Kredit</button>
        <button onClick={handleBankTransfer}>Transfer Bank</button>
      </div>

      {/* Conditional rendering untuk tombol bank di atas tombol "Batal" */}
      {showBankOptions && (
        <div className="bank-options">
          <h3>Pilih Bank Anda</h3>
          <div className="bank-buttons">
            <button onClick={() => handleSelectBank('Bank BCA')}>Bank BCA</button>
            <button onClick={() => handleSelectBank('Bank Mandiri')}>Bank Mandiri</button>
            <button onClick={() => handleSelectBank('Bank BNI')}>Bank BNI</button>
            <button onClick={() => handleSelectBank('Bank BRI')}>Bank BRI</button>
            <button onClick={() => handleSelectBank('Bank CIMB Niaga')}>Bank CIMB Niaga</button>
          </div>
        </div>
      )}

      {/* Tombol Batal */}
      <div className="payment-methods">
        <button onClick={handlePaymentCancel}>Batal</button>
      </div>
    </div>
  );
}

export default PaymentPage;

