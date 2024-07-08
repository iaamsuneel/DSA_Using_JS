//Comparing onClick Handlers in React
/* `onClick={someFunction}`
 • 𝐃𝐢𝐫𝐞𝐜𝐭 𝐂𝐚𝐥𝐥: Points straight to someFunction.
 • 𝐖𝐡𝐞𝐧 𝐂𝐥𝐢𝐜𝐤𝐞𝐝: Executes someFunction on click.
 • 𝐄𝐟𝐟𝐢𝐜𝐢𝐞𝐧𝐭: No extra function is created each time.

`onClick={() => someFunction()}`
 • 𝐀𝐫𝐫𝐨𝐰 𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧: Uses an arrow function to invoke someFunction.
 • 𝐍𝐞𝐰 𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧 𝐄𝐚𝐜𝐡 𝐓𝐢𝐦𝐞: Creates a fresh function with each render.
 • 𝐏𝐚𝐬𝐬 𝐀𝐫𝐠𝐮𝐦𝐞𝐧𝐭𝐬: Ideal for passing arguments or adding extra logic.

When to Use:
 • 𝐃𝐢𝐫𝐞𝐜𝐭 𝐑𝐞𝐟𝐞𝐫𝐞𝐧𝐜𝐞: Simple, efficient handlers.
 • 𝐀𝐫𝐫𝐨𝐰 𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧: For arguments or additional operations before invoking the function. */
