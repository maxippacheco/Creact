import { MiniFramework, render, FrameworkEl } from './src/main';
import { useState } from './src/hooks/useState';

const myMarkup = (props: string) => {

	const [counter, setCounter] = useState(10);
	
	

	return (
		<div data-x="data attribute test">
			<div id="id-test">
				<h1>Mini Framework</h1>
				<input
					type="text"
					placeholder="Part 2: data binding & hooks coming soon"
				/>

				<div>{ counter }</div>
				<div>
					<button onClick={ () => setCounter( 2 )}>+1</button>
				</div>
			</div>
		</div>
	);
};



render(myMarkup("El pepe") as FrameworkEl, document.querySelector("#app"));
