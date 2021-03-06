# Buy Me a Pie! JS Button Plugin

This is a javascript plugin that adds a button to your web pages containing [Schema-structured](https://schema.org/Recipe) recipes (Microdata format).
The button will allow a user to export ingredients from the recipe to the [Buy Me a Pie! App](http://buymeapie.com/).

See [an example](https://buymeapie.com/examples/bmap-button-plugin.html).

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
          js.src = "https://buymeapie.com/javascripts/plugins/bmap-button-plugin.v1.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'bmap-button-plugin'));
  </script>
  ```

2. Place the following code where you want to have a button:

  ```html
  <div class="bmap-export-button"></div>
  ```

Also see an example: [source](examples/recipe.html), [live](https://buymeapie.com/examples/bmap-button-plugin.html).

## Advanced installation

### Configuration parameters

#### Global parameters

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
        js.src = "https://buymeapie.com/javascripts/plugins/bmap-button-plugin.v1.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'bmap-button-plugin'));
</script>
```

Available parameters:

* `lang` - language to use. Supported values: `en`, `ru`. By default the plugin tries to obtain the language from the browser.
* `buttonClassName` - a class name of the DOM objects to search on the page and draw a button inside. Default: `bmap-export-button`.
* `customButton` -  if you want to use your own button, set this parameter to `true`. DOM objects with the specified class name `buttonClassName` will be used as buttons. Default: `false`.

#### Button-specific parameters

You can specify button-specific parameters as attributes to a button container:

```html
<div class="bmap-export-button" data-button-title="Custom Button Title"></div>
```

At the moment only one parameter is supported:

* `data-button-title` - a button title. Not used when `customButton` set to `true`.

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

### Providing ingredient name & amount

[Recipe microformat](https://schema.org/Recipe) prescribes that an ingredient should be placed in the field `recipeIngredient` or `ingredients`. It usually contains a string like "5 ml olive oil". We extend the recipe microformat with two fields where you can put an ingredient name and its amount. This way a user can export a more detailed recipe. Here is an example of the recipe markup:

```html
 ...
 Ingredients:
  - <span itemprop="recipeIngredient"><span itemprop="amount">5 ml</span> <span itemprop="name">olive oil</span></span>
  - <span itemprop="recipeIngredient"><span itemprop="amount">3/4 cup</span> <span itemprop="name">sugar</span></span>
 ...
```

See the full example [here](examples/recipe.html).
