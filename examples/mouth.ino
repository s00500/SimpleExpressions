#include <SimpleExpressions.h>

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  SimpleExpressions.init(13, 14);
  //SimpleExpressions._tone(440, 5000,1);

}

void loop() {
  // for (int i = 0; i < 18; i++) {
  SimpleExpressions.writeMouth("cross", 30, 0, 0);
  //Serial.println(i);
  delay(1000);
  SimpleExpressions.writeMouth("hook", 0, 30, 0);
  delay(1000);
  SimpleExpressions.writeMouth("leftarrow", 0, 15, 30);
  delay(1000);
  SimpleExpressions.writeMouth("rightarrow", 0, 15, 30);
  delay(1000);
  //}
}
