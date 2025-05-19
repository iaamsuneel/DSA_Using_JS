Box Model : box model is fundamental concept in css ,
that defines how elements are displyed and spaced in webpage.

             it consists of following layers ( Content, Padding, Margin, Border)

             1. Content : The Actual Text , Image , or Child elements
             2. Padding : Space around the content , inside the border
             3. Border  : A Boundary around the padding
             4. Margin  : Space outside the border , seprating it from other components

Advanced Box Model Properties:
1. Box-Sizing : By default, the width and height only apply to the content area.
However, using the box-sizing property can change this behavior.

                box-sizing: border-box; makes the width and height include padding and borders

2. auto margin : The auto value for margins can be used to center elements horizontally.

3. Overflow : This property controls what happens if content overflows the element’s box.
   Values: visible (default), hidden, scroll, auto.

4. Positioning: position can affect the box model.
   The most common positioning values are static, relative, absolute, and fixed.

5. Flexbox and Grid Layout : Both Flexbox and CSS Grid layout models are designed to control element,
   positioning and spacing more easily than the basic box model.
   They allow you to distribute space dynamically.

6. Z-Index: Controls the stacking order of elements that overlap.
   Higher values are stacked above lower ones.

7. Border Radius: This property rounds the corners of the box,
   making the borders look curved.
