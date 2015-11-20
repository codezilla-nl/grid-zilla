#Grid-zilla
A no-nonsense Flexbox grid system

###Features
* use columns (12 column setup), mobile uses 3 columns
* use flex-align-left, flex-align-right and flex-space-between to arrange columns on the grid
* use offsets to include empty spaces between columns
* opt-in to remove the gutter from columns
* [USING gridzilla-aware] No breakpoints. Set a minimum width on a column instead and flexbox will figure out the rest.

###Installation
* npm install 
* gulp build
* include gridzilla-aware.css or gridzilla-default.css on top of your stylesheet.

###Usage
Use it out of the box. Or make it your own and add awesomeness wherever you need.

####Grid, column basic setup
Wrap your cols in .gz-grid and you're good to go. It is a 12-column grid by default (mobile is 3 column).
When not specifying a column size for mobile, gridzilla will decide the most suitable grid for you.
Ex. .gz-col-4 (33%) will show as .gz-col-s-1 (33%) on mobile.

```
<div class="gz-grid">
    <div class="gz-col-5">column</div>
    <div class="gz-col-7">column</div>
    <div class="gz-col-2">column</div>
    <div class="gz-col-2">column</div>
    <div class="gz-col-2">column</div>
</div>
```

####Column offset
add gz-col-l-offset-x or gz-col-m-offset-x to your column to add an offset between columns.
```
<div class="gz-grid">
    <div class="gz-col-3">column</div>
    <div class="gz-col-3 gz-col-l-offset-3">column</div>
    <div class="gz-col-3">column</div>
</div>
```
####Using breakpoints (with gridzilla-default)
Use gz-col-x, gz-col-m-x and gz-col-s-x to define grid sizes for different breakpoints.
```
<div class="gz-grid">
    <div class="gz-col-5 gz-col-s-3">column</div>
    <div class="gz-col-7 gz-col-m-6 gz-col-s-3">column</div>
    <div class="gz-col-2 gz-col-m-6 gz-col-s-3">column</div>
    <div class="gz-col-2 gz-col-s-3">column</div>
    <div class="gz-col-2 gz-col-s-3">column</div>
</div>
```

####Using content awareness (with gridzilla-aware)
Instead of using breakpoints, leave it up to flexbox. Just specify your initial column size and a minimum width for a column.
Width is calculated in steps of 20px / step.
Ex. gz-col-min-10 = 10 x 20px = 200px;
```
<div class="gz-grid">
    <div class="gz-col-3 gz-col-min-10">column</div>
    <div class="gz-col-3 gz-col-min-10">column</div>
    <div class="gz-col-3 gz-col-min-10">column</div>
    <div class="gz-col-3 gz-col-min-10">column</div>
</div>
```

####Grid gutter
By default, the grid will set a gutter. But you can opt-out.
```
<div class="gz-grid gz-grid--no--gutter">
    <div class="gz-col-6">column</div>
    ...
</div>
```

####Grid column alignment (only works with gridzilla-default)
Tell flexbox how to align the columns. It's a wrapper for flexbox justify-content really.
Use gz-grid--align--left, gz-grid--align--right or gz-grid--space--between (default)
```
<div class="gz-grid gz-grid--align--left">
    <div class="gz-col-6">column</div>
    ...
</div>
```

####vertical align columns
You must have been there. Designers want their content to align vertically. Think titles that are longer than one line. That was a real headache. Until flexbox came that is.
```
<div class="gz-grid gz-valign">
    <div class="gz-col-4"><p>Kittens</p></div>
    <div class="gz-col-4"><p>Too many kittens... Argh fell to second line</p></div>
    <div class="gz-col-4"><p>No more kittens</p></div>
</div>
```

###Browser Support
It uses Flexbox. That means IE10+. But be honest, how many mobile devices use IE9- anyway?

