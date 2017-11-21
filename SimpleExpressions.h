#ifndef SimpleExpressions_h
#define SimpleExpressions_h
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif

#include "Shapes.h"

#define debug true


class SimpleExpressionsClass
{
  public:

    void init(int mouthPin, int buzzerPin);

    void writeMouth(unsigned int mouth);
    void clearMouth();

    void writeMouthRecolored(int mouth, uint32_t color);
    void writeMouthGeneric(const unsigned int mouthArray[7][3]);

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
