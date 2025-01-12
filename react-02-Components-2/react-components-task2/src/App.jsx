import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';


const App = () => {
	// Можно задать 2 состояния — steps и activeIndex

	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	console.log(steps)
	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const onBackClick = () => {
		setActiveIndex(activeIndex-1);
		console.log(activeIndex);
	};

	const onForwardClick = () => {
		setActiveIndex(activeIndex+1);
		console.log(activeIndex);
	};

	const onStartClick = () => {
		setActiveIndex(0);
	};

	const onStepClick = () => {

	}
	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	const firstStep = Boolean(activeIndex === 0);
	const lastStep = Boolean(activeIndex === data.length-1);
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
					<p key={steps[activeIndex].id}>{steps[activeIndex].title} <br></br> {steps[activeIndex].content}</p>
					</div>
					<ul className={styles['steps-list']}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						{steps.map(({id}) => (
							<li className={activeIndex+1 > id.slice(2) ?
								styles['steps-item'] +
								' ' +
								styles.done :
								activeIndex+1 == id.slice(2) ?
								styles['steps-item'] +
								' ' +
								styles.done +
								' ' +
								styles.active :
								styles['steps-item']
								}
								key={id}>
								<button className={styles['steps-item-button']} onClick={onStepClick}>{id.slice(2)}</button>
								Шаг {id.slice(2)}
							</li>
						))}

							{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
							{/* При клике на кнопку установка выбранного шага в качестве активного */}

					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={onBackClick} disabled={firstStep}>Назад</button>
						{lastStep ? <button className={styles.button} onClick={onStartClick}> Начать сначала </button> : <button className={styles.button} onClick={onForwardClick}>
							Далее
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
