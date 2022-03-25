import { Radio, Checkbox, Row } from '../components'

import styles from './checkboxRadioForm.module.css'; 

export const CheckboxRadioForm = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.frame}>
                <Row className={styles.block}>
                    <Checkbox 
                        id='checkbox_1'
                        checked={false}
                    />
                    <Checkbox 
                        id='checkbox_2'
                        checked={true}
                    />

                </Row>
            </div>
            <div className={styles.frame}>
                <Row className={styles.block}>
                    <Radio 
                        name='radioGroup1'
                        id='radio_1'
                        value='radio1' 
                        checked= {true}
                    />
                    <Radio 
                        name='radioGroup1'
                        id='radio_2'
                        value='radio2' 
                    />
                </Row>
            </div>
        </div>
    )
}
export default CheckboxRadioForm;