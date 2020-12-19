import React from 'react';
import ReactTooltip from 'react-tooltip';

function list_items(props){
      return(
            <div onClick={()=>{
                  props.onChecked(props.id);
            }}>
                  <li>{props.text}</li>
            </div>
      )
}

export default list_items;