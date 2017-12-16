#ifndef SimpleExpressions_h
#define SimpleExpressions_h
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif

#include "Shapes.h"
#include "Sounds.h"

#define debug true


class SimpleExpressionsClass
{
  public:
    // General
    void init(int mouthPin, int buzzerPin);
	  void initMouth(int mouthPin);
	  void initBuzzer(int buzzerPin);

    // Mouths
    void printMouth(int number, int r, int g, int b);
    void writeMouth(char mouthName[], int r, int g, int b);

    void printMouth(int number);
    void writeMouth(char mouthName[]);

    void clearMouth();

    void writeMouthGeneric(const int mouthArray[7][3]);
    void writeMouthGeneric(const bool mouthArray[7], int r, int g, int b);

    // Sounds
    void _tone (float noteFrequency, long noteDuration, int silentDuration);
    void bendTones (float initFrequency, float finalFrequency, float prop, long noteDuration, int silentDuration);
    void playSound(int soundName);


  private:
    Adafruit_NeoPixel mouth;
    void clearPixels();
    int buzzerPin;
};

extern SimpleExpressionsClass SimpleExpressions;

#endif
