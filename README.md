# Buy Me a Pie! Button Plugin

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
