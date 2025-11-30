import React from 'react'
import './ContactModal.css'

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose}>
          ×
        </button>
        <h2>تواصل معنا</h2>
        <div className="contact-info">
          <div className="contact-item">
            <strong>الهاتف:</strong>
            <div>
              <a href="tel:+97092322777">+970 9 2322777</a>
            </div>
            <div>
              <a href="tel:+97092326222">+970 9 2326222</a>
            </div>
            <p className="contact-note">
              اطلب الرقم 972 بدلا من 970 عند الاتصال من الدول غير العربية
            </p>
          </div>
          
          <div className="contact-item">
            <strong>البريد الإلكتروني:</strong>
            <a href="mailto:info@alarz.ps">info@alarz.ps</a>
          </div>
          
          <div className="contact-item">
            <strong>العنوان:</strong>
            <p>شركة الآرز للأيس كريم المحدودة</p>
            <p>P.O.Box: 20</p>
            <p>المنطقة الصناعية الشرقية</p>
            <p>نابلس، فلسطين</p>
          </div>
        </div>
        <div className="contact-footer">
          <p>© Al Arz</p>
        </div>
      </div>
    </div>
  )
}

export default ContactModal

