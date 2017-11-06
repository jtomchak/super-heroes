## Super Heroes be had!!!

1. Create superheroes.js inside your src folder with provided json of superheroes.
2. In App.js, we want to add state, with 2 properties. title, and heroes. 
3. Import the superheroes data from superheroes.js as Superheroes 
```js
state = {
    title: "Super Heroes",
    heroes: SuperHeroes.HEROES
  };
```
4. Now that we have an array hero objects. We want to convert the array of objects, to an array of react elements. **MAP**
We want to map over the array of heroes and return an array of react elements. 
5. Sweet. Now we can render that array, heroesList, as a child of a created ul element. 
```js
<div>
        <h1>{this.state.title}</h1>
        <ul>{heroesList}</ul>
      </div>
```