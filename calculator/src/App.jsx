import { useState } from 'react'
import './App.css'
import styles from './app.module.css'

const App = () => {
	const nums = ['0',' 1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const [operand1, setOperand1] = useState('')
	const [operand2, setOperand2] = useState('')
	const [operator, setOperator] = useState('')

	const onNumClick = (index) => {
		const updateOperand = +nums[index]
		operator === '' ? setOperand1(updateOperand) : setOperand2(updateOperand);

	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{operand1}
					</div>
					<ul className={styles['steps-list']}>
						{nums.map((id, index) => (
							<li
								key={`nums--${id}`}>
								<button className={styles['steps-item-button']} onClick={() => onNumClick(nums[index])}>{nums[index]}</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default App;

