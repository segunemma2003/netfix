import React from 'react';
import Plan from '../../components/Plans';
import productss from '../api/products';

function SignPlan() {
  return (
    <Plan products={productss} />
  );
}

export default SignPlan;
