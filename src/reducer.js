export let reducer = (state, action) => {
    switch (action.type) {
      
      case "DELETE":
        let newArr = [...state]
        newArr.pop(action.value)
        return newArr;
      case "EDIT":
        state[action.index] = action.product;
        let newArr2 = [...state]; 
        return newArr2;
      default:
        return [...state];
        
    };
}  