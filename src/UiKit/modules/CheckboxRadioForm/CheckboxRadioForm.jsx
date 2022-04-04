import { Radio, Checkbox, Row, Label } from "../../../components";

import styles from "./CheckboxRadioForm.module.css";

export const CheckboxRadioForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        <Row>
          <Checkbox className={styles.block} id="checkbox_1" />
          <Checkbox className={styles.block} id="checkbox_2" checked={true} />
        </Row>
      </div>
      <div className={styles.frame}>
        <Row className={styles.block}>
          <Radio
            className={styles.block}
            name="radioGroup1"
            id="radio_1"
            value="radio1"
          />
          <Radio
            className={styles.block}
            name="radioGroup1"
            id="radio_2"
            value="radio2"
            checked={true}
          />
        </Row>
      </div>
    </div>
  );
};
