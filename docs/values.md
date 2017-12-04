# 1. values

## *methodical*

### grd-mode
*type:* keyword  
*default:* grid

**grid** - classical grid calculator  
**experimental** - supports relative, fix & flexible item widths, but might be buggy

### grd-direction
*type:* keyword  
*default:* row

Defines the direction and axis of the grid flow.
Is equal to the flex-direction property (- fixed to ltr).


## *mathematic*

### grd-units
*type:* number  
*default:* 12

Defines the number of columns (or rows) within the grid.


### grd-width
*type:* number, length & percentage or keyword  
*default:* undefined (have to be defined as argument)

Defines the number of columns a item spans.

*grid mode:* only numbers are valid

*experimental mode:* number, length & percentage or „flex“ as keyword works. „Flex“ set an item to a self sizing flexbox. Notice that in *experimental mode* the *grd-width* must be the first argument given (to a grd-item mixin).


### grd-margin
*type:* length & percentage  
*default:* 10px

Defines the margin between two grid items, in direction of grid flow (direction). All valid margin values works.

*Notice that in „column“ and „column-reverse“ percentages break the grid*


### grd-margin-b
*type:* length & percentage  
*default:* undefined ( - equals grd-margin if undefined)

Defines the margin between two grid items, parallel to direction of grid flow (direction). All valid margin values works.


### grd-last
*type:* number & keyword  
*default:* undefined

Can be given to set a :nth-child() pseudo-class to the grd-last mixin. All valid :nth-child() values works.
