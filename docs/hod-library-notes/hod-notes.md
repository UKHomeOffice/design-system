# Home
## Resources
* accessibility
* gds principles/standards
* design elements
* inspiration

## Processess
* contributing
* using

## Patterns
* primary navigation
* secondary navigation
* file upload
* linked content
* icons
* buttons (functions and multiple buttons on pages)
* tables
* summary
* search results
* warnings
* error messages
* dates (from and to)
* calendar
* user profiles (dashboards)
* search
* filtering
* notifications (ios style)


* atoms (elements) – possible move all to components and make assumption GDS elements is the elements
   * icons
   * buttons (functions and multiple buttons on pages)
   * notifications (ios style)
* components ()
   * warnings
   * calendar
   * linked content
* modules
   * error messages
   * dates (from and to)
   * filtering
   * search
   * tables
* templates
   * primary navigation
   * secondary navigation
   * user profiles (dashboards)
   * search results
   * summary
   * file upload
* pages


## Comments
* Tools not rules
* Design guidance and pattern library

## Dependencies
* icomoon – fonts
* fractals(?) – code

# Contributing to the patterns
* Talk about it (crit)
   * At least 3 people present
   * Bring along something to discuss at crit, something new, something you want feedback on
   * IxD wide crits are planned for once every 2 weeks but more informal ones should be held when possible
   * Collectively we can discuss and then you can make decisions on what changes are made
* Add it to the trello board (patterns)
   * Include what the problem the pattern solves,
* Include in the pattern library
   * Add to the sketch file
   * Add to the code repository
* Let people know the changes

# Process for including in your prototype
You can link directly to the css file to include or you can include as a npm sub-module.

Linking directly to the heroku application isn't recommended as it may change or be down without warning, but you can include using `https://home-office-digital-patterns.herokuapp.com/public/stylesheets/application.css`

1. updating your `package.json` file.
* this repository will install as a node dependancy in their package.json file.  The styles and assets will then be available in `node_modules/hod-patterns`
2. import the sass files required into your stylesheet.
* You may need to setup a symlink from the folder
* setup a build process using the same processors as this repository

Example of how to include the package in package.json

```json
{
    "devDependencies": {
        "hod-patterns": "https://github.com/hod/hod-patterns.git#v1.0.0",
    }
}
```



# Including in your designs
* For sketch/wireframes
   * no documentation required
* 

* After completion of a project, spend a day analysing to identify any different patterns


