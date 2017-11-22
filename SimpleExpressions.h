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

    void writeMouth(char mouthName[]);
    void printMouthShape(int number);

    void clearMouth();

    void writeMouthRecolored(int mouth, uint32_t color);
    void writeMouthGeneric(const int mouthArray[7][3]);

    void putAnimationMouth(int anim, int index);

    //-- Sounds
    void _tone (float noteFrequency, long noteDuration, int silentDuration);
    void bendTones (float initFrequency, float finalFrequency, float prop, long noteDuration, int silentDuration);
    void sing(int songName);

    //-- Gestures
    void playGesture(int gesture);


  private:
    int pinBuzzer;
    Adafruit_NeoPixel mouth;

    long int getMouthShape(int number);
    long int getAnimShape(int anim, int index);
};

extern SimpleExpressionsClass SimpleExpressions;

#endif
