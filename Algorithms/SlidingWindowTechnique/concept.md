Sliding Window Technique

// General Sliding Window Template:
function slidingWindowExample(str) {
   let left = 0;
   let result = 0;
   let window = new Map(); // or Set or Object depending on use-case
   for (let right = 0; right < str.length; right++) {
    let char = str[right];
   Expand window
  Update window state with str[right]
  while ( window violates condition ) {
  Shrink window from the left
  Update window state by removing str[left]
  left++;
}
  Update result (e.g., max length, count, etc.)
  result = Math.max(result, right - left + 1);
}
  return result;
}
