/**
 *  Generate unique ID like below: 
 *  - "2qgnkgnzf80"
 *  - "4ujah1g9xeo"
 */
export const generateID = () => {
  return (new Date().valueOf() + +(Math.random().toString().split('.')[1])).toString(36);
}