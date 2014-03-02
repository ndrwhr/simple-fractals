# Implementing Fractals

NOTE: This is an archive of a blog post from 2010-05-17 about my fractal experiment which can be found [here](http://andrew-hoyer.com/experiments/fractals/).

This experiment is something I had been thinking about for quite some time, but it was only recently that I decided to finally dive in and try implementing it. One the the biggest things encountered with this was trying to make the fractals responsive but still detailed.

One thing about generating fractals is that it is very very repetitive... On top of that, it is often easiest to generate them recursively, meaning using the same idea over and over again to tackle smaller and smaller problems until you find a solution or meet some condition. Using this idea makes programming the fractals a trivial matter, but if there are any expensive operations they could be executed hundreds of times every time the fractal is updated.

That being said, some of the most expensive operations involve using math libraries. To cut down the number computations per update I decided that instead of recalculating angles and sizes every time something needed to be drawn, I would calculate all of the angles and sizes before actually delving into the recursion. These calculations are then stored in an array that can just be referenced.

As a quick example we can look at a simplified version of the Pythagoras tree. Say, every time we needed to draw a branch (square) we needed to perform only a single calculation (the new size of the square for example). In my first implementation, all the calculations were done inside in the recursion used to draw the fractal. Doing it this way meant about 1024 calculations, but by moving them outside of the recursion, the number of calculations is reduced to about 9. Thats a pretty big difference...

The last thing that I wanted to talk about was the Sierpinski Carpet. This is the only fractal here that is not drawn recursively. This is simply because the problem size grows very rapidly and the recursion would begin to bog things down. Instead everything (the spacing between the squares, the size of the squares etc) is calculated ahead of time, so that when it comes time to draw it is just a matter using a couple really simple loops.

## Further Reading:

If you're interested in reading some more about fractals. You can find a giant list here:

[List of fractals by Hausdorff dimension (wikipedia)](http://en.wikipedia.org/wiki/List_of_fractals_by_Hausdorff_dimension)
