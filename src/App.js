import logo from './logo.svg';
import './App.css';
import '../../admin-panel-makeup/blocks/rcheckbox-radio.css';

function App() {
  return (
    <div class="wrapper">
      <div class="frame frame_checkbox-radio">
        <div class="checkbox-block">
          <div class="checkbox">
            <input class="custom-checkbox" type="checkbox" id="checkbox-1" />
            <label for="checkbox-1"></label>
          </div>
          <div class="checkbox">
            <input
              class="custom-checkbox"
              type="checkbox"
              id="checkbox-2"
              checked
            />
            <label for="checkbox-2"></label>
          </div>
        </div>
      </div>

      <div class="frame frame_checkbox-radio">
        <div class="radio-block">
          <div class="radio">
            <input
              class="custom-radio"
              id="radio-1"
              type="radio"
              name="radio-group"
              value="radio1"
            />
            <label for="radio-1"></label>
          </div>
          <div class="radio">
            <input
              class="custom-radio"
              id="radio-2"
              type="radio"
              name="radio-group"
              checked
              value="radio2"
            />
            <label for="radio-2"></label>
          </div>
        </div>
      </div>
    </div>
    );
}

export default App;
