# 1. values

## *methodical*

### flx-mode
*type:* keyword  
*default:* grid

**grid** - classical grid calculator  
**experimental** - supports relative, fix & flexible item widths, but might be buggy

### flx-direction
*type:* keyword  
*default:* row

Defines the direction and axis of the grid flow.
Is equal to the flex-direction property (- fixed to ltr).


## *mathematic*

### flx-units
*type:* number  
*default:* 12

Defines the number of columns (or rows) within the grid.


### flx-width
*type:* number, length & percentage or keyword  
*default:* undefined (have to be defined as argument)

Defines the number of columns a item spans.

*grid mode:* only numbers are valid

*experimental mode:* number, length & percentage or „flex“ as keyword works. „Flex“ set an item to a self sizing flexbox. Notice that in *experimental mode* the *flx-width* must be the first argument given (to a flx-item mixin).


### flx-margin
*type:* length & percentage  
*default:* 10px

Defines the margin between two grid items, in direction of grid flow (direction). All valid margin values works.

*Notice that in „column“ and „column-reverse“ percentages break the grid*


### flx-margin-b
*type:* length & percentage  
*default:* undefined ( - equals flx-margin if undefined)

Defines the margin between two grid items, parallel to direction of grid flow (direction). All valid margin values works.


### flx-last
*type:* number & keyword  
*default:* undefined

Can be given to set a :nth-child() pseudo-class to the flx-last mixin. All valid :nth-child() values works.
