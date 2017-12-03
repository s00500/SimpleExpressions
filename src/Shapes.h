#ifndef Shapes_h
#define Shapes_h

struct Frame
{
    char name[20];
    bool data[7];
}
typedef Frame;


struct MulticolorFrame
{
    char name[20];
    int data[7][3];
}
typedef MulticolorFrame;

//***********************************************************************************
//*********************************MOUTHS DEFINES************************************
//***********************************************************************************

#define frameCount 19
#define colorFrameCount 1

// TODO: calculate me

const PROGMEM Frame shapes[] = {
  {
    "zeros",
    {0, 0, 0, 0, 0, 0, 0}
  },
  {
    "happySmall",
    {0, 0, 1, 1, 0, 0, 0}
  },
  {
    "happyFull",
    {0, 1, 1, 1, 1, 0, 0}
  },
  {
    "sadSmall",
    {0, 0, 0, 0, 0, 1, 1}
  },
  {
    "sadFull",
    {0, 1, 0, 0, 1, 1, 1}
  },
  {
    "neutral",
    {1, 1, 0, 0, 1, 0, 0}
  },
  {
    "circle",
    {0, 1, 1, 1, 1, 1, 1}
  },
  {
    "center",
    {1, 0, 0, 0, 0, 0, 0}
  },
  {
    "hook",
    {1, 0, 0, 1, 1, 0, 1}
  },
  {
    "upsidedownhook",
    {1, 0, 1, 0, 1, 1, 0}
  },
  {
    "kooh",
    {1, 1, 1, 0, 0, 1, 0}
  },
  {
    "upsidedownkooh",
    {1, 1, 0, 1, 0, 0, 1}
  },
  {
    "cross",
    {1, 0, 1, 1, 0, 1, 1}
  },
  {
    "rect",
    {0, 0, 1, 1, 0, 1, 1}
  },
  {
    "leftarrow",
    {1, 1, 0, 1, 1, 1, 0}
  },
  {
    "rightarrow",
    {1, 1, 1, 0, 1, 0, 1}
  },
  {
    "lefthalf",
    {0, 0, 0, 1, 1, 1, 0}
  },
  {
    "righthalf",
    {0, 1, 1, 0, 0, 0, 1}
  },
};





const PROGMEM MulticolorFrame colorShapes[] = {
  {
    "colorCircle",
    {
       {50,0,0},
       {0,50,0},
       {0,0,50},
       {50,0,0},
       {0,50,0},
       {0,0,50},
       {50,0,0}
    }
  }
};
#endif
