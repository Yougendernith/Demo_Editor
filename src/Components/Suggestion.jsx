import React from 'react';
import Suggestion_input from './suggestion_input';

function suggestion(){
      return (
        <div class="suggestion_form">
          <form>
            <label>
              <h1>Suggestion</h1>
              <i>(First add the item and then click on the item to paste it in the Output Section)</i>
            </label>
            <Suggestion_input />
          </form>
        </div>
      );

}

export default suggestion;