#include <SimpleExpressions.h>

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  SimpleExpressions.init(13, 14);
  //SimpleExpressions._tone(440, 5000,1);

}

void loop() {

  SimpleExpressions.writeMouth("zeros");
  delay(500);
  SimpleExpressions.printMouthShape(1);
  delay(500);
  SimpleExpressions.writeMouth("happyFull");
  delay(500);
  SimpleExpressions.writeMouth("zeros");
  delay(500);
  SimpleExpressions.writeMouth("sadFull");
  delay(500);
  SimpleExpressions.writeMouth("sadSmall");
  delay(500);

}
