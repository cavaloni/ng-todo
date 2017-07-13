# Angular TODO

----
## Features

* Add tasks
* Shift to in progress
* From 'in progress', shift back to 'remaining tasks' or to completed
* Drag and drop tasks from any level of progress to another, and in any order.

## Live Site
You can view the live site at [https://cavaloni.github.io/ng-todo/](https://cavaloni.github.io/ng-todo/)

This uses GitHub Pages to host the static site. In order to achieve this in a simple way, it was first compiled:

    ng build

then followed by an npm package:

    angular-cli-ghpages 

----
## Technical walk-through

### Imported from Angle

The only component imported from Angle was **SortableList** (called Multi sortable list in the Angle elements demo). This will be covered in detail below.

Other Bootstrap elements in the demo were used:

* Button
* Button Pills
* Rounded corners classic input

### Removed from seed

Many different elements were removed and altered from the seed in order to match the UI wireframe provided, such as:

* Altered Angle logo
* Removed Angle loading script elements
* Removed mock user
* Removed unused buttons on NavBar
 

Some CSS needed updates to fit elements well with each other. Some of these include:

* Input element resize
* Element position attributes
* Padding with buttons to reduce size
* other minor fixes

### Angular framework specific specs

##### SortableList

This component was the only full imported component. The entire component directory was copied to the seed project to preserve the spirit of the project in using only the Angle components. 

The routing structure set by the Angle app made it so that copying the component to the Home module and within the Home directory made most sense, since routes were defaulted to this component. So the component resides at:

    src/routes/home/home/sortable

Since the Home Module is a sub-module of the Routes Module (which is itself a sub-module of App Module), the component needed to be listed in the NgModule decorator of Home Module under the declarations. This makes the exposed directive selector, 'app-sortable', useable in the templates within that module.

##### Drag and Drop

The drag and drop was already implemented in this component, but required a little additional setup in order to function properly: it simply required for the module to be an 'import' in the Home Module.

Even if it were not setup easily, the process is quite simple with this package. Step 9 in the GitHub page of the package details how it was implemented in Angle component, which can be viewed at [https://github.com/akserg/ng2-dnd#9-simple-sortable-with-drag-and-drop] (https://github.com/akserg/ng2-dnd#9-simple-sortable-with-drag-and-drop)

Basically this works by defining 'zones' in which the 'dnd-sortable' items can be placed. The 'dnd-sortable' directive also allows for the items to be sorted through drag and drop, rather than just be placed in different 'zones' only.

##### Using SortableList to create TODO

The SortableList component was setup to maintain its lists through simple Arrays on the component. In the component you will see three of these for each list:

    remainingTasks: Array<string> = [];
    inProgress: Array<string> = [];
    completed: Array<string> = [];

These properties are bound to one of the three 'ul' list groups, where an '*ngFor' directive loops through the list to create the children 'li'.

These values are updated through the ngModel directive which passes the value to the addItem method when the form is submitted. From there, the addItem method simply pushes the value to the remainingTasks. 

The other buttons use event binding to pass in a string value of which array the item will be passed to, which is then handled by the moveTo method.

## Misc notes
* Test writing is in progress for SortableList. The issue may be that the form process may need to include FormGroup and FormControl in order to update the values manually to be able to test with. This action is questionable to create a test so research is still underway.
* Most of the original code in the component was simply commented out, so as to preserve its original state, in the spirit of using only components from Angle
* Small changes were not noted in here, though they did require some research and knowledge; such as the settings component, which uses the HostBinding module.

