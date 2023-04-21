function DessertsList(props) {
//Implement the component here.
  const lowCalorieDessertList = props.data
  .filter((dessert) => {
   /* Get all the low calorie desserts */
   return desserts.calories < 500;
})
  .sort((a, b) => {
    /* Sort the above desserts by calories in ascending manner */
    return a.calories - b.calories;
})
  .map((dessert) => {
    /* Transform the list */
    return (
    <li>
      {dessert.name} - {dessert.calories} cal
    </li> 
    );
  });
  
  return (
    <ul>
      {lowCalorieDessertsList}
    </ul>
  );
}

export default DessertsList;
