import { useState } from 'react'
import './App.css'
import styles from './app.module.css'

const App = () => {
	const nums = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState()

	const onNumClick = (index) => {
		operator === '' ?
		setOperand1(`${operand1}${nums[index]}`) :
		setOperand2(`${operand2}${nums[index]}`);
		console.log(operand1, operator, operand2, result)
	}

	const onOperatorClick = (operator) => {
		result != null ?
		setOperand1(result) & setOperator(operator) & setResult() :
		setOperator(operator);
		console.log(operand1, operator, operand2, result)
	}

	const onResultClick = () => {
		let updateResult;
		operator === '+' ? updateResult = +operand1 + +operand2 : updateResult = +operand1 - +operand2
		updateResult === 0 ? updateResult = '0' : updateResult;
		setResult(updateResult)
		setOperand1('');
		setOperand2('');
		setOperator('')
		console.log(operand1, operator, operand2, result)
	}

	const onClearClick = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setResult()
		console.log(operand1, operator, operand2, result)
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.nums}>
					<div className={[styles['nums-content'],
						result && styles.result,
						].join(' ')}>
						{!result ?
						operand1+operator+operand2 :
						result}
					</div>
					<ul className={styles['nums-list']}>
						{nums.map((id, index) => (
							<li className={[styles['nums-list-el'],
								index == '0' && styles.zero,
								index == '1' && styles.one,
								index == '2' && styles.two,
								index == '3' && styles.three,
								index == '4' && styles.four,
								index == '5' && styles.five,
								index == '6' && styles.six,
								index == '7' && styles.seven,
								index == '8' && styles.eight,
								index == '9' && styles.nine,
								].join(' ')}
								key={`nums--${id}`}>
								<button className={styles['nums-item-button']} onClick={() => onNumClick(index)}>{nums[index]}{console.log(index)}</button>
							</li>
						))}
						<li className={[styles['nums-list-el'],
						styles.plus].join(' ')}>
							<button className={styles['nums-item-button']} onClick={() => onOperatorClick('+')}>+</button>
						</li>
						<li className={[styles['nums-list-el'],
						styles.minus].join(' ')}>
							<button className={styles['nums-item-button']} onClick={() => onOperatorClick('-')}>-</button>
						</li>
						<li className={[styles['nums-list-el'],
						styles.result].join(' ')}>
							<button className={styles['nums-item-button']} onClick={onResultClick}>=</button>
						</li>
						<li className={[styles['nums-list-el'],
						styles.clear].join(' ')}>
							<button className={styles['nums-item-button']} onClick={onClearClick}>C</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default App;

