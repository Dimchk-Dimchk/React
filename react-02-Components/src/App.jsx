import { useState } from 'react';
import styles from './app.module.css';

function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');
		console.log(promptValue);
		promptValue.length < 3
			? setError('Введенное значение должно содержать минимум 3 символа')
			: setValue(promptValue) & setError('');
	};

	const isValueVaild = Boolean(value.length >= 3);

	const onAddButtonClick = () => {
		const id = Date.now();
		const date = new Date().toLocaleString();
		console.log(date);
		const updateList = [...list, { id, value, date }];

		if (value.length >= 3) {
			setList(updateList) & setError('') & setValue('');
		}
		console.log(updateList);
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: `
				<output className={styles['current-value']}>{value}</output>`
			</p>
			<div className={styles.error}>{error}</div>
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{!list.length && (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				)}
				<ul className={styles.list}>
					{list.map(({ id, value, date }) => (
						<li className={styles['list-item']} key={id}>
							{value} {date}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
