![header](https://github.com/jhogoforbroke/ng-class-on-mobile/blob/master/examples/ngclass-img-responsive-ilustrator.png)

[AngularJS](http://angularjs.org/) directive for change the class of a element if the device that is accessing is a _mobile device

# ngClass On Mobile 
> a simple way to help you make you page responsive in all devices. **in a angular way!**

Sometimes is harder with the **same style** create a uniform, funcional and beatyfull layout for all render sizes and several devices. And even media query wouldn't help, because it is not enough be based on the screen size for to get the best user experience for a specific device.


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

the class that will be **added** if the device that accesses is a mobile
in the above exemple ```.only-on-mobile``` is added.

### class-to-remove
> param class name

the class that will be **removed** if the device that accesses is a mobile, to enable changes...
in the above exemple ```.no-mobile``` is removed.

### remove-css-inline
> param bool

It indicates whether to be removed the inline css that is in element.

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
