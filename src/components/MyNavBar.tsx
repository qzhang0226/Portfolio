import React, { useState, useEffect } from 'react';
import Header from './Header';
import { IFormState } from '../interfaces';

export interface IAppProps {
}

export default function MyNavBar (props: IFormState) {
  return (
    <div>
        <Header name="Qi Zhang" />     
    </div>
  );
}

