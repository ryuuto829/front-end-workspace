function isBalanced(s) {
  const stack = [];

    for (let bracket of s) {

      if (bracket === '{' || bracket === '[' || bracket === '(' ) {
        if (bracket === '{') {
          bracket = '}';
        }
        if (bracket === '[') {
          bracket = ']';
        }
        if (bracket === '(') {
          bracket = ')';
        }
        stack.push(bracket);
      } else {
        if (bracket === stack[stack.length - 1]) {
            const res = stack.pop();
          if (!res) {
            return 'NO';
          }
        } else {
          return 'NO';
        }
      }
    }
    
    if (stack.length === 0) {
        return 'YES';
    } else {
      return 'NO';
    }
}