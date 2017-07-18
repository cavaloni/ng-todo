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

## CouchDB/Cloudant/PouchDB integration for persistance

The security settings for individual databases using CouchDB makes is such that every user can read everything within the database if they wanted. This is a security concern for things that we want to keep private, like our TODOs here. The reccomended and most widely used pattern to keep user's data private when using CouchDB is to use a database-per-user model. This allows a user to have only the data in that particular database sent to them and not have access to another database. In fact, it is the only way that I have found. The user is then set to be their own admin to perform CRUD operations on their own database.

#### Overview of implementation

It took some time to grasp the implementation details of this pattern, as guides and assistance is sparsely available online. The server.js file in the root directory does show an initial node.js start to setup the Cloudant connection, and then setting the user as the database name and admin for their database. The next steps would be to setup the databse on Cloudant to include a _users directory. (This is because Cloudant does not use the default CouchDB setup for authorization, and we need it to keep a password for the user.) Once the users DB has been created and their admin and password set, a session cookie is obtained on the node server, and then sent to the client side to use for its connection to the database. This is so that the PouchDB can sync with Cloudant, and therefore minimize lag, without using the node.js server as a proxy, which would slow down syncing considerably. 

#### Details

The implementation details are still being researched. The current difficulty is in setting up the Cloudant databse _user database and finding an appropriate password hashing solution. From there, the next challenge will be setting the cookie session to be only applicable to the database admin, and not the account admin. Once this is set then the rest of the implementation outlined above should be relatively painless. Most of the information needed to complete this is here: [https://stackoverflow.com/questions/33152085/managing-cloudant-access-through-users-database](https://stackoverflow.com/questions/33152085/managing-cloudant-access-through-users-database)
I will be working on this as time allows.

## Update on Tests

I am running into troubles gettin the onSubmit to properly trigger the form submission. I have tried about 10 different methods listed on line to trigger it. Karma/Jasmine does recognize that it has been triggered, because this line passes:

    expect(component.addItem).toHaveBeenCalled();

  But then none of the code on the method actually updates the component. This is after using detectChanges() and whenStable(). I have scoured the web and was not able to find something to fix this. There is a possible alternative to re-write the structure of the form to include the use of FormGroup, FormControl, and FormBuilder. But this seemed excessive for a one input element form model, so if anything, restrucuring to remove the form altogether would make it more testable. This is demonstrated well here: [https://codecraft.tv/courses/angular/unit-testing/model-driven-forms/](https://codecraft.tv/courses/angular/unit-testing/model-driven-forms/). Re-writing to simply fit tests seems a bit anti-pattern, so I have left it as a simple test which verifies what I mentioned above in the code block. So in conclusion, more research is necessary to properly test a form and its input.
