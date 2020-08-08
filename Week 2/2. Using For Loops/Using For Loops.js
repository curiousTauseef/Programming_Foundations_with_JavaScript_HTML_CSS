//////////////...Using For Loops.../////////////
var image = new SimpleImage(200,200);
print(image);

/////////////////////////...YELLOW...///////////////////////////////
for(var pixel of image.values())
{
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(0);
}
print("YELLOW: ", image);
///////////////////////////////////////////////////////////////////


/////////////////////////...MAGENTA...///////////////////////////////
for(var pixel of image.values())
{
    pixel.setRed(255);
    pixel.setGreen(0);
    pixel.setBlue(255);
}
print("MAGENTA: ", image);
///////////////////////////////////////////////////////////////////