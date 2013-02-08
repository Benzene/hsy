HSY is a minimalistic client-side templating engine, built on the premise that a templating engine shouldn't be more than 5 lines of code long.

```html
<div id="content"></div>

<!-- Define a template -->
<script id="mytemplate" type="text/template">
	<p>Hej, my name is {{ name }} and I am {{ age }}</p>
</script>

<script type="text/javascript">

	/* Define some objects */
	ctxts = [];
	ctxts.push({ "name": "Bob", "age": 31});
	ctxts.push({ "name": "Matt", "age": 25});
	ctxts.push({ "name": "Lovisa", "age": 26});
			
	/* Render some stuff on them */
	for (var i = 0; i < ctxts.length; ++i) {
		document.getElementById("content").innerHTML += hsy("mytemplate",ctxts[i]);
	}
</script>
```

That's all.
