import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';


const App = () => {
	// Можно задать 2 состояния — steps и activeIndex

	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const onBackClick = () => {
		setActiveIndex(activeIndex-1);
	};

	const onForwardClick = () => {
		setActiveIndex(activeIndex+1 === data.length ? 0 : activeIndex + 1);
	};

	const onStepClick = (index) => {
		setActiveIndex(index)
	}
	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	const firstStep = activeIndex === 0;
	const lastStep = activeIndex === data.length-1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
					<p key={steps[activeIndex].id}>{steps[activeIndex].content}</p>
					</div>
					<ul className={styles['steps-list']}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
						{steps.map(({id}, index) => (
							<li className={[
								styles['steps-item'],
								activeIndex > index && styles.done,
								activeIndex === index && styles.active,
								].join(' ')}
								key={`steps-list--${id}`}>
								{/* При клике на кнопку установка выбранного шага в качестве активного */}
								<button className={styles['steps-item-button']} onClick={() => onStepClick(index)}>{index+1}</button>
								Шаг {index+1}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button onClick={onBackClick} disabled={firstStep}>Назад</button>
						<button onClick={onForwardClick}>{lastStep ? 'Начать сначала' : 'Далее'}
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
