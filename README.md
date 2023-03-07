# OOP-Bootcamp

## Use Case #1
A basket contains the following things:

- Banana's (6 pieces, costing €1 each)
- Apples (3 pieces, costing €1.5 each)
- Bottles of wine (2 bottles, costing €10 each)

### Without using classes, do the following in your code:

- Calculate the total price
- Calculate how much of the total price is tax (fruit goes at 6%, wine is 21%)

Next, do the same with classes. What style do you prefer? Do you notice any difference in time needed to code, structure or readability? From now on, if nothing is stated specifically, it's recommended to use classes.

## Use Case #2
Consider the same basket as in use case 1. The shop owner wants to have a way to have 50% off every fruit. Can you find a way to implement the discount once, and re-use it efficiently for every fruit?

## Use Case #3
We are preparing three types of content for a website:

- Articles
- Ads
- Vacancies

All of those have a title and text. When showing the title, they are modified as follows: articles remain as they are, ads are shown in all caps and vacancies are appended with " - apply now!". The original title should still be retrievable, so no modification is permanent.

Have an array with two articles, one ad and one vacancy. Use this array to show all content types (title + text).

Bonus: an article can be marked as "breaking news". If this is the case, the title is prepended with "BREAKING: ". Extra bonus: display all the content with the appropriate html tags.

## Use Case #4
There's two groups, both of 10 students. Every student has a name (even Jaqen) and gets a grade. You can have some fun coming up with the content here :-)

- Provide an easy way to calculate the average score of a group.
- Add a function to move a student from one group to another.
- Show the average score of both groups. Move the top student from one group with the lowest scoring student from another. Show the averages again - how were these affected?