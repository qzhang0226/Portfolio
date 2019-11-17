import * as React from 'react';

export interface IAppProps {
    name: string;
    className?: string
}

export default function Header (props: IAppProps) {
  return (
    <div className={props.className}>
      {props.name}
    </div>
  );
}

