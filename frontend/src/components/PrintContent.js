import React, { forwardRef } from 'react';
import AccionPersonal from '../pages/AccionPersonal';
import AccionPersonal2 from '../pages/AccionPersonal2';

const PrintContent = forwardRef((props, ref) => (
  <div ref={ref}>
    <AccionPersonal />
    <AccionPersonal2 />
  </div>
));

export default PrintContent;
