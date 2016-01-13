![header](https://raw.githubusercontent.com/jhogoforbroke/ng-class-on-mobile/master/examples/ngclass-img-responsive-ilustrator.png)

[AngularJS](http://angularjs.org/) directive to change the class of an element if the device accessing it is a mobile device


See the [Example Page](http://jhogoforbroke.github.io/ng-class-on-mobile/example.html)


# ngClass On Mobile 
> a simple way to help you make your page responsive in all devices. **in a angular way!**


Sometimes it's harder to create a uniform, functional and beautiful layout with the **same style** for all render sizes and several devices. Even media query wouldn't help, because it's not enough to rely on the screen size or media types to get the best user experience for each specific device.


## How to use it

Include the `ngClassOnMobile` dependency on your Angular module:
```javascript
var app = angular.module('demoapp', ['ngClassOnMobile']);
```

set the directive in element that you want
```html
<div ng-class-on-mobile
  class-to-add="only-on-mobile"
  class-to-remove="no-mobile"
  remove-css-inline="true"
  style="color: #000; padding: 15px;"
  class="no-mobile">
    Some Thing
  </div>
```

**and let's look for this attributes:**

### class-to-add
> param class name

the class that will be **added** if the device accessing it is a mobile

in the example above ```.only-on-mobile``` is added.


### class-to-remove
> param class name


the class that will be **removed** if the device accessesing it is a mobile

in the example above ```.no-mobile``` is removed.


### remove-css-inline
> param bool

It indicates if the inline css in the element will be removed.

## Run-it-yourself

install
----------
```npm install```

run
-----
```grunt server```

build
-----
```grunt build```
