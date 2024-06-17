# 3D ASCII Cube Animation
<img width="1114" alt="Screenshot 2024-06-17 at 11 41 31 AM" src="https://github.com/nicoguerra18/Spinning-Cube/assets/139820627/3e9dcecc-8604-4a29-b354-811ae018abb3">

This was a one day project I decided to do to utlize some basic linear algebra concepts I learned in university. This 3D cube animation project leverages 
basic 3-D rotations to create realistic and dynamic rotational effects. At its 
core, the project utilizes rotational matrices to compute the new positions of tiles on the cube's surfaces. These matrices involve trigonometric functions that 
rotate points in three-dimensional space around the x, y, and z axes. Specifically, the calculateX, calculateY, and calculateZ functions apply these rotational 
transformations by incorporating angles A, B, and C, which represent the cube's rotation around each respective axis. By updating these angles over time, the program 
simulates continuous rotation. The mathematical transformations ensure that the tiles move smoothly and accurately, 
maintaining the cube's structural integrity while it rotates. During my time at university, I struggled to see the real-world applications of the linear algebra we studied. 
However, as I’ve gained more experience in programming, I’ve come to appreciate the usefulness and power of linear algebra in software engineering. 
This project is a testament to that realization, demonstrating how basic linear algebra concepts can serve as the building blocks for creating much more powerful animations.


## Resources 
https://en.wikipedia.org/wiki/Rotation_matrix
