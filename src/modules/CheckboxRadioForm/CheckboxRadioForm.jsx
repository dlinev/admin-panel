import { Radio, Checkbox, Row } from "../../components/components";

import styles from "./CheckboxRadioForm.module.css";

export const CheckboxRadioForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        <Row className={styles.block}>
          <Checkbox key="checkbox_1" id="checkbox_1" checked={false} />
          <Checkbox key="checkbox_2" id="checkbox_2" checked={true} />
        </Row>
      </div>
      <div className={styles.frame}>
        <Row className={styles.block}>
          <Radio
            name="radioGroup1"
            key="radio_1"
            id="radio_1"
            value="radio1"
            checked={true}
          />
          <Radio name="radioGroup1" key="radio_2" id="radio_2" value="radio2" />
        </Row>
      </div>
    </div>
  );
};
