#ifndef SimpleExpressions_h
#define SimpleExpressions_h
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif

#include "Shapes.h"

class SimpleExpressionsClass
{
  public:

    void init(int mouthPin, int buzzerPin);

    void writeMouth(int mouth);
    void clearMouth();

    void writeMouthRecolored(int mouth, u_int32 color);
    void writeMouthGeneric(int[7][3] mouthArray);

    void putAnimationMouth(unsigned long int anim, int index);

    //-- Sounds
    void _tone (float noteFrequency, long noteDuration, int silentDuration);
    void bendTones (float initFrequency, float finalFrequency, float prop, long noteDuration, int silentDuration);
    void sing(int songName);

    //-- Gestures
    void playGesture(int gesture);


  private:
    Adafruit_NeoPixel mouth;

    int pinBuzzer;

    unsigned long int getMouthShape(int number);
    unsigned long int getAnimShape(int anim, int index);
};

extern SimpleExpressionsClass SimpleExpressions;

#endif
