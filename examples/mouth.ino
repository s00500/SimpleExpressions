#include <SimpleExpressions.h>

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  SimpleExpressions.init(13, 14);

}

void loop() {

  SimpleExpressions.printMouthShape(0);
  //SimpleExpressions.writeMouth("zeros");
  delay(500);
  SimpleExpressions.printMouthShape(1);
  //SimpleExpressions.writeMouth("happySmall");
  delay(500);
  //SimpleExpressions.writeMouth("happyFull");
  SimpleExpressions.printMouthShape(2);
  delay(500);
  SimpleExpressions.printMouthShape(3);
  //SimpleExpressions.writeMouth("zeros");
  delay(500);
  //SimpleExpressions.writeMouth("sadSmall");
  SimpleExpressions.printMouthShape(4);
  delay(500);


}
