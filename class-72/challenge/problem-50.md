# Challenge: Movie Watchlist Manager

## Introduction

In this challenge, you will build a simple **movie watchlist manager** using 
JavaScript arrays.

Streaming platforms and entertainment apps often store lists of movies or shows 
that users plan to watch. These lists are constantly updated as users add, remove, 
or reorganize movies.

Your task is to simulate this behavior using an array and practice 
**basic array manipulation methods**, loops, and conditional logic.

You will work with operations such as:

- Finding the number of elements using `length`
- Adding movies with `push()`
- Removing movies with `pop()`
- Accessing elements by index
- Iterating through the array
- Using conditions to analyze the list

---

## Problem Description

A user has the following movies saved in their watchlist:

```javascript
let watchlist = ["Inception", "Interstellar", "The Matrix", "Gladiator"];
```

---

## Write a JavaScript program that performs the following tasks:

1. Print the total number of movies in the watchlist.
2. Add the movie`"The Dark Knight"` to the watchlist.
3. Add the movie `"Avatar"` to the watchlist.
4. Remove the last movie from the watchlist.
5. Print the first movie in the watchlist.
6. Print the last movie in the watchlist.
7. Check if the watchlist has 4 or more movies:
    - If true, print `"You have many movies to watch!"`
    - If false, print `"Your watchlist is small."`
8. Print all movies in the watchlist with their position number, starting from 1.

---

## Example output format:

1 - Inception
2 - Interstellar
3 - The Matrix
...

## Hints

**Hint 1**
> Use the length property to determine how many movies exist in the array.

**Hint 2**
> To add movies to the end of the array, use the `push()` method.

**Hint 3**
> To remove the last movie, use the `pop()` method.

**Hint 4**
> The first element of an array is located at index `0`.

**Hint 5**
> The last element can be accessed using:

```javascript
watchlist[watchlist.length - 1]
```

**Hint 6**
> To print all movies, use a for loop that goes from `0` to `watchlist.length`.

**Hint 7**
> To display positions starting from 1 instead of `0`, print `(i + 1)` inside the loop.
