
let state: any = [];
let setters: any = [];
let firstRun = true;
let cursor = 0;

const createSetter = (cursor: number) => {
  return function setterWithCursor(newVal: any) {
    state[cursor] = newVal;
		
  };
}

// This is the pseudocode for the useState helper
export const useState = (initVal: any) => {
  if (firstRun) {
    state.push(initVal);
    setters.push(createSetter(cursor));
    firstRun = false;
  }

  const setter = setters[cursor];
  let value = state[cursor];	
	

  cursor++;
  return [value, setter];
}
