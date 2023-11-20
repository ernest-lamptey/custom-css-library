# Custom CSS Library
This Custom CSS library is packed with essential utility classes for seamless web design. It includes versatile classes for setting padding, margins, font sizes, flexible layout with flexbox, a wide range of color options, and responsive media queries for various screen widths.

## Getting Started
- Run "npm install" to install all dependencies
- Run "gulp" to live compile sass

## Utility Classes
Variations exit for these utility classes from 0 to 5. For example, m-5 means "a margin of 5 times the base margin"

### Margin
- The base margin represented by 1 is 0.75rem
- ml represents margin-left, mr represents margin-right and so on...
- For example, ml-2 is a will be a CSS rule of "margin-left: 1.5rem"

### Padding
- The base padding represented by 1 is 0.75rem
- pl represents padding-left, pr represents padding-right and so on...
- For example, pl-2 is a will be a CSS rule of "padding-left: 1.5rem"

### Opacity
- The opacity is set using the letter "o"
- o-10 represents a 10% opacity and so on

### Border Radius
- The default border radius represented by br is 20px
- Border radius can be set to **none** which represents a border radius of 0. 
- br-xs, br-sm, br-lg and br-full represent different values of the border radius

### Font Size
- Font sizes could be sm, md, lg, xl, xxl with **md** being the base font size of 1rem

### Display
- Display properties are set using display and the first letter of the value. For example, to set an item display to block will be "display-b", "display-i-b" for inline-block, "display-i" for inline and so on.