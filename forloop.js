
//This is a for loop
// 0 cancels out a particular color
// 250 increases that color to the max

image = new Simpleimage ("flowers.jpg");
for (pixel: image) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
}
print(image);
