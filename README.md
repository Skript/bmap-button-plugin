# Buy Me a Pie! JS Button Plugin

This is a javascript plugin that adds a button to your web pages containing [Schema-structured](https://schema.org/Recipe) recipes.
The button will allow a user to export ingredients from the recipe to the [Buy Me a Pie! App](http://buymeapie.com/).

## Simple installation

1. Place the following code on your page inside the `body` HTML tag:

  ```html
  <script type="text/javascript">
      window.bmapAsyncInit = function() {
          BMAP.init();
      };
      (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "//buymeapie.com/js/plugins/bmap-button-plugin-v1.0.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'bmap-button-plugin'));
  </script>
  ```

2. Place the following code where you want to have a button:

  ```html
  <div class="bmap-export-button"></div>
  ```

Also see [an example](example/recipe.html).

## Advanced installation

### Configuration parameters

You can pass configuration parameters into `BMAP.init()` function as shown below:

  ```html
  <script type="text/javascript">
      window.bmapAsyncInit = function() {
          BMAP.init({
              lang: 'ru',
              buttonClassName: 'bmap-export-button'
          });
      };
      (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "//buymeapie.com/js/plugins/bmap-button-plugin.latest.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'bmap-button-plugin'));
  </script>
  ```

Available parameters:

* `lang` - language to use. Supported values: `en`, `ru`. By default the plugin tries to obtain the language from the browser.
* `buttonClassName` - a class name of the DOM objects to search on the page and draw a button inside. Default: `bmap-export-button`.

### Multiple recipes on the page

By default the plugin only searches for the first recipe on the page. If your page contains multiple recipes and you
want to draw a button for each of them, you need to link the button containers and the recipes with identifiers:

```html
<div itemscope itemtype="http://schema.org/Recipe" id="recipe-1">
...
</div>

...

<div class="bmap-export-button" data-recipe-id="recipe-1"></div>

...

<div itemscope itemtype="http://schema.org/Recipe" id="recipe-2">
...
</div>

...

<div class="bmap-export-button" data-recipe-id="recipe-2"></div>
```
