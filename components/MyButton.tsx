import React from 'react';

interface MyButtonProps extends React.Props<any> {
  onClick?: ()=> any ;
  items: string[];
}

export default function MyButton (props: MyButtonProps) {
  return (
    <div {...props.onClick}>
      <ul>
        { props.items.map((listitem, v) => {
          <li key={v}>listitem</li>
        }) }
      </ul>
      <div>New Item</div>
    </div>
  )
}