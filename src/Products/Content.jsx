import EnhancedEncryptionTwoToneIcon from '@mui/icons-material/EnhancedEncryptionTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import LoopTwoToneIcon from '@mui/icons-material/LoopTwoTone';
import SellTwoToneIcon from '@mui/icons-material/SellTwoTone';
import React from 'react';
import './Content.css';

function Content() {
  return (
    <div className="Content">
      <div className="content1">
        <span>
          <LocalShippingTwoToneIcon /> FREE SHIPPING
        </span>
        <span>From all orders over $100</span>
      </div>
      <div className="content2">
        <span>
          <LoopTwoToneIcon /> FREE RETURN
        </span>
        <span>Return money within 30 days</span>
      </div>
      <div className="content3">
        <span>
          <EnhancedEncryptionTwoToneIcon /> SECURE SHOPPING
        </span>
        <span>You're in safe hands</span>
      </div>
      <div className="content4">
        <span>
          <SellTwoToneIcon /> OVER 10,000 STYLES
        </span>
        <span>We have everything you need</span>
      </div>
    </div>
  );
}

export default Content;
