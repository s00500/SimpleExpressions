#include <SimpleExpressions.h>

#define ledDataPin 13
#define beeperPin 17

void setup() {
  Serial.begin(115200);
  SimpleExpressions.init(ledDataPin, beeperPin);
  SimpleExpressions.clearMouth();

  for (int i = 0; i < 18; i++) {
    Serial.println(i);
    SimpleExpressions.printMouth(i, 30, 0, 0);
    SimpleExpressions.playSound(i);
    delay(1000);
  }
}

void loop() {
  SimpleExpressions.writeMouth("cross", 30, 0, 0);
  delay(1000);
  SimpleExpressions.writeMouth("hook", 0, 30, 0);
  delay(1000);
  SimpleExpressions.writeMouth("leftarrow", 0, 15, 30);
  delay(1000);
  SimpleExpressions.writeMouth("rightarrow", 0, 15, 30);
  delay(1000);
}
