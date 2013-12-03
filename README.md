# jQuery Transit for Meteor

Super-smooth CSS3 transformations and transitions for jQuery

This Meteor package contains the latest release of [jQuery Transit](https://github.com/rstacruz/jquery.transit/).

## How to install

1. `npm install -g meteorite` (if not already installed)
2. `mrt add jquery-transit`

## Usage

After installing this package, you can set transformations as you would set any CSS property in jQuery.

```javascript
$("#box").css({ x: '30px' });
```

Animate with CSS3 transitions using `$.fn.transition()`.

```javascript
$("#box").transition({ opacity: 0.1, scale: 0.3 });
```

## Documentation

[https://github.com/rstacruz/jquery.transit/](https://github.com/rstacruz/jquery.transit/)