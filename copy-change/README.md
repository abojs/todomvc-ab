# Unflickering

Usually you have to wait until the page loads to change something on it.
However, in that case the user will see the old version of the page until before
it is changed. It is called flickering.

To avoid flickering, you can hide the page before it started to render.
```js
var html = document.getElementsByTagName('html')[0];
html.style.visibility = 'hidden';
```

After your experiment did all the transformation, you can show the page.
```js
html.style.visibility = '';
```

The users will never see the old version of the page.
