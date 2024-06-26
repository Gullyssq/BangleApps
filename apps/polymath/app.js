// Clock with date day and moon based on the "Anton Clock"


Graphics.prototype.setFontmoonphases = function() {
  // Actual height 23 (23 - 1)
  return this.setFontCustom(
    atob('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEACAH/nAH/nAAACAAAAAAAAAAAAAHwAAH4AAAAAAAAAAGAAAH4AAHgAAAAAAAAAAAQgAAQhAAQ/AA/4AH8gAGQgAAQjAAR/AA/4AH4gAEQgAAQgAAA4APg8APwMAY4EAQ4EB///AQcEAQcMAcP8AeP4AADwAAAAAB4AAD8AAHOAAECBAECDAGGGAH8cAD44AABgAAHAAAMAAAY+ABz/ADDDAGCBAECBAADnAAB+AAA8AAAAAAAAAAB8AAD+ADz/AH+DAGeBAEOBAEPBAELhAH5zADw6ABg+AAEeAAF/AAHnAAGDAAEBAAABAAAAAAAAAH4AAHwAAAAAAAAAAP/gA//4B8B8DgAOGAACEAADAAAAAAAAEAADGAACDgAOB8B8A//4AP/gAAAAAAAAAH4AA//AB//gD//wH//4P//8P//8f//+f//+f//+f//+f//+f//+f//+f//+P//8P//8H//4D//wB//gA//AAP8AAAAAAAAAAAAAAH4AAf+AB//gD//wD//wH//4H//8P//8P//8P//8P//8P//8P//8P//8H//4H//4D//wB//gA//AAf+AADwAAAABAAAxAAA+AAA8AAAAAAAAAAAAAABgAABgAABgAABgAABgAABgAAAAAAAAAAACAAAHAAAHAAACAAAAAAAHAAA8AAHwAA+AADwAAHAAAAAAAAAAAH4AA//AB//gD//wH//4P//8P//8f//+f//+f//+f//+f//+f//+f//+f//+P//8P//8H//4D//wB//gA//AAP8AAAAAAAAAAAAAABABADABACABAH//AH//AAABAAABAAABAAAAAAAAAAAAAHAHAHAHAEAPAEAbAEAzAGBjAHPDAD+DAD8DAAADAAAAAAAAADAPAHADAGABAEEBAEEBAEGBAGODAH7HAD7+AAh8AAAAAAA4AAB4AAHYAAMYAAYYABwYADgYAH//AH//AAAYAAAYAAAAAAAAAAAGAH8PAGEDAGEBAGEBAGEBAGGDAGGDAGD+AAD8AAAQAAAAAA/4AB/+ADyPAGGDAEEBAEEBAEGBAGHHAHD+AAB8AAAAAAAAAAAAAHgAAGABAGAHAGAeAGB4AGHgAGeAAH4AAHgAAEAAAAAAABx8AD7+AH/HAGOBAEEBAEEBAGODAH/HAD7+ABx8AAAAAAAAAB8GAD+HAHvBAGDBAEBBAEBBAGBDAHjOAD/8AB/4AAAAAAAAAAICAAcHAAcHAAICAAAAAAAAAAAAAAABAHAzAHA+AHA8AAAAAAAAAAAAAAGAAAHAAANAAANgAAZgAAYwAAwwAAwYAAgYABgIABAMAAAAAAAAAAAAABAMABgIAAgYAAwQAAQwAAYgAAJgAANgAAPAAAHAAAGAAAAAAAAAAAAAAHAAAGAAAEAHAED3AECHAGGAAH8AAD8AAAwAAAAAAAAAAP8AA4HABgBgCAAQEAAIMAAMIAAEYAAGQAACQAACQAACQAACQAACQAACYAAGIAAEMAAMGAAYDAAwBgBgA8PAAH4AAAAAAAAAAH4AA//AB//gD//wH//4P//8P//8f//+f//+f//+f//+f//+f//+f//+f//+P//8P//8H//4D//wB//gA5nAAP8AAAAAAAAAAH4AA//AB//gD//wH//4P//8P//8f//+f//+f//+f//+f//+f//+f//+f//+P//8P//8F//oCf+QBjxgA4HAAP8AAAAAAAAAAH4AA//AB//gD//wH//4P//8P//8f//+f//+f//+f//+f//+f//+f//+f//+L//0N//sEf+ICAAQBgBgA4HAAP8AAAAAAAAAAH4AA//AB//gD//wH//4P//8P//8f//+f//+f//+f//+f//+f//+f//+b//2J//kMP8MEAAICAAQBgBgA4HAAP8AAAAAAAAAAH4AA//AB//gD//wH//4P//8P//8f//+f//+f//+f//+f//+f//+X//6Y//GIAAEMAAMEAAICAAQBgBgA4HAAP8AAAAAAAAAAH4AA//AB//gD//wH//4P//8P//8f//+f//+f//+f//+f//+X//6QBgCYAAGIAAEMAAMEAAICAAQBgBgA4HAAP8AAAAAAAAAAH4AA//AB//gD//wH//4P//8P//8f//+f//+f//+f//+QAACQAACQAACYAAGIAAEMAAMEAAICAAQBgBgA4HAAP8AAAAAAAAAAH4AA//AB//gD//wH//4P//8P//8f//+f//+fAA+YAAGQAACQAACQAACYAAGIAAEMAAMEAAICAAQBgBgA4HAAP8AAAAAAAAAAH4AA//AB//gD//wH//4P//8P//8f4H+eAAeYAAGQAACQAACQAACQAACYAAGIAAEMAAMEAAICAAQBgBgA4HAAP8AAAAAAAAAAH4AA//AB//gD//wH//4P//8PgB8eAAeYAAGQAACQAACQAACQAACQAACYAAGIAAEMAAMEAAICAAQBgBgA4HAAP8AAAAAAAAAAH4AA//AB//gD//wH8P4PAA8OAAcYAAGYAAGQAACQAACQAACQAACQAACYAAGIAAEMAAMEAAICAAQBgBgA4HAAP8AAAAAAAAAAH4AA//AB//gD4HwHAA4OAAcMAAMYAAGYAAGQAACQAACQAACQAACQAACYAAGIAAEMAAMEAAICAAQBgBgA4HAAP8AAAAAAAAAAH4AA//AB4HgDgBwGAAYMAAMIAAEYAAGQAACQAACQAACQAACQAACQAACYAAGIAAEMAAMEAAICAAQBgBgA4HAAP8AAAAAAAAAAP8AA4HABgBgCAAQEAAIMAAMIAAEYAAGQAACQAACQAACQAACQAACQAACYAAGIAAEMAAMGAAYDgBwB4HgA//AAH4AAAAAAAAAAP8AA4HABgBgCAAQEAAIMAAMIAAEYAAGQAACQAACQAACQAACQAACYAAGYAAGMAAMOAAcHAA4D4HwB//gA//AAH4AAAAAAAAAAP8AA4HABgBgCAAQEAAIMAAMIAAEYAAGQAACQAACQAACQAACQAACYAAGcAAOOAAcPAA8H8P4D//wB//gA//AAH4AAAAAAAAAAP8AA4HABgBgCAAQEAAIMAAMIAAEYAAGQAACQAACQAACQAACYAAGYAAGeAAePgB8P//8H//4D//wB//gA//AAH4AAAAAAAAAAP8AA4HABgBgCAAQEAAIMAAMIAAEYAAGQAACQAACQAACQAACYAAGeAAef4H+P//8P//8H//4D//wB//gA//AAH4AAAAAAAAAAP8AA4HABgBgCAAQEAAIMAAMIAAEYAAGQAACQAACQAACYAAGfgB+f//+f//+P//8P//8H//4D//wB//gA//AAH4AAAAAAAAAAP8AA4HABgBgCAAQEAAIMAAMIAAEYAAGQAACQAACQAACf//+f//+f//+f//+P//8P//8H//4D//wB//gA//AAH4AAAAAAAAAAP8AA4HABgBgCAAQEAAIMAAMIAAEYAAGQH4CX//6f//+f//+f//+f//+f//+P//8P//8H//4D//wB//gA//AAH4AAAAAAAAAAP8AA4HABgBgCAAQEAAIMAAMIAAEY//GX//6f//+f//+f//+f//+f//+f//+P//8P//8H//4D//wB//gA//AAH4AAAAAAAAAAP8AA4HABgBgCAAQEAAIMf+MJ//kf//+f//+f//+f//+f//+f//+f//+f//+P//8P//8H//4D//wB//gA//AAH4AAAAAAAAAAP8AA4HABgBgCAAQEf+IN//sL//0f//+f//+f//+f//+f//+f//+f//+f//+P//8P//8H//4D//wB//gA//AAH4AAAAAAAAAAP8AA4HABjxgCf+QF//oP//8P//8f//+f//+f//+f//+f//+f//+f//+f//+P//8P//8H//4D//wB//gA//AAH4AAAAAAAAAAH4AA8PAB//gD//wH//4P//8P//8f//+f//+f//+f//+f//+f//+f//+f//+P//8P//8H//4D//wB//gA//AAP8AAAAAAAAAAAAAD///D///CAADCAADCAABAAAAAHAAAB4AAAfAAAD4AAAeAAADAAAAAAAACAABCAADCAADD///D///AAAAAAAA'),
    32,
    atob("GAgKDAwUEwQICBgXBggGBxgMDAwMDAwMDAwHBw4ADgsYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgIBwg="),
    24|65536
  );
}

Graphics.prototype.setFontInknutAntiqua24 = function() {
  // Actual height 24 (23 - 0)
  return this.setFontCustom(
    atob('AAAAAB4AAD4AAD4AAD4AABwAAAAAAAAAAAAAAAAPAAD/AA/4AP+AD/gAf4AAeAAAAAAAAAAAAYAAB/AAD/gAH/wAP/4APH4AcB4AcA4AcA4AcA4AeA4AfBwAf/wAP/gAH/AAD+AAA4AAAAAAAAAAIAYAcAYAcA4Af/4Af/4Af/4Af/4AcAYAYAYAAAQAAAAACAIAGAYAOA4AeB4AcD4AcH4AcP4Aef4Af94Af54APx4APh4ADH4AAH8AAAAAAAAACAAAGAAYOAAYeAA4cCAwcHBwefBwf/ngP//gPz/AHj+ACB8AAAwAAAAAAAwAABwAAHwAAPwAAfwAA8wABwwADgwAPBwAP//wf//wf//wf//gAAwAAAwAAAwAAAAAAHAGD/AOH/AMHvgMHngcHnwYHn44Hj/wHj/wfh/gfw/AAAeAAAAAAAAAAAAAAB8AAP/AAf/gA//wB//4D8D4HwB4HsA4POA4ePA4cPh44H/w4H/gAD/AAB+AAAYAAAAAAAAA/gAAfgAAeAAYeAB4eAHweAfAeB8AeHwAePAAe8AAf4AAfgAAeAAAYAAAAAAAAAAAAAeADg/APx/gP7/gf//w/+Dw4+Bw4fBw4fBw8fhw//zwf3/gfj/gPD/AAB+AAAYAAAAAAAAAA+AAD/AAH/gYH/wYP/w4OD5wcA5wcAzgeAPgfAfAP/+AP/8AH/4AD/wAB/AAAAAAAAAAAAAAHB4APj4APj4APj4APBwAAAAAAAAA'),
    46,
    atob("CAkTDBANEQ8SEBISCA=="),
    24|65536
  );
};

Graphics.prototype.setFontInknutAntiqua66 = function() {
  // Actual height 66 (65 - 0)
  return this.setFontCustom(
    atob('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AAAAAAAAAH/AAAAAAAAAP/AAAAAAAAAf/gAAAAAAAAf/gAAAAAAAA//wAAAAAAAA//wAAAAAAAA//wAAAAAAAB//gAAAAAAAA//gAAAAAAAA//gAAAAAAAA//AAAAAAAAAf+AAAAAAAAAP8AAAAAAAAAH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAfAAAAAAAAAH/AAAAAAAAB//AAAAAAAAf//AAAAAAAH///AAAAAAB///8AAAAAA////AAAAAAP///wAAAAAD///8AAAAAA////AAAAAAP///wAAAAAD///8AAAAAA////AAAAAAf///gAAAAAH///4AAAAAAf//+AAAAAAAf//gAAAAAAAf/4AAAAAAAAf+AAAAAAAAAfgAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAf/gAAAAAAAB//8AAAAAAAH//+AAAAAAAP///gAAAAAAf///wAAAAAA////4AAAAAB////8AAAAAD////8AAAAAH////+AAAAAP/////AAAAAP/////AAAAAf/////AAAAAf+AH//gAAAA/wAA//gAAAA/gAAf/gAAAB/AAAH/gAAAB/AAAD/wAAAD/AAAB/wAAAD+AAAB/wAAAD+AAAB/wAAAD+AAAA/wAAAD+AAAA/wAAAD/AAAA/gAAAH/AAAA/gAAAH/AAAA/gAAAD/gAAA/gAAAD/gAAB/AAAAD/wAAB/AAAAD/8AAD/AAAAD//AAH+AAAAD//4A/+AAAAB/////8AAAAB/////8AAAAA/////4AAAAA/////wAAAAAf////gAAAAAP////gAAAAAP////AAAAAAH///+AAAAAAB///4AAAAAAA///wAAAAAAAP//AAAAAAAAD/8AAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAA4AAAAHgAAAD4AAAAPgAAAD8AAAAfgAAAD8AAAAfgAAAD8AAAA/gAAAD8AAAB/gAAAD+AAAD/gAAAD//////gAAAD//////gAAAD//////gAAAD//////gAAAD//////gAAAD//////gAAAD//////gAAAD//////gAAAD//////gAAAD//////gAAAD//////gAAAD/gAAA/gAAAD/AAAAfgAAAD+AAAAfgAAAD+AAAAfgAAAD8AAAAPgAAAD4AAAAPgAAADwAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAHgAAAAD8AAAPgAAAAD8AAAfgAAAAH4AAA/gAAAAP4AAB/gAAAAfwAAD/gAAAA/wAAD/gAAAA/wAAH/gAAAB/gAAP/gAAAD/gAAf/gAAAD/gAA//gAAAD/AAB//gAAAD/AAB//gAAAD/AAD//gAAAD/AAH//gAAAD/AAP//gAAAD/gAf//gAAAD/gB///gAAAD/wD///gAAAD/8P/f/gAAAD///+f/gAAAD///+f/gAAAD///8f/gAAAB///4f/gAAAB///wf/gAAAB///gf/gAAAA///Af/gAAAA//+Af/gAAAAf/8Af/gAAAAf/4Af/gAAAAP/wAf/gAAAAH/AA//gAAAAB8AH//gAAAAAAAP//wAAAAAAAP//wAAAAAAAP//wAAAAAAAP//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAADwAAAAAAcAAH4AAAAAAfAAH4AAAAAA/AAPwAAAAAA/AAfwAAAAAA/AA/gAAAAAB+AB/gAAAAAB+AB/AAAAAAD+AD/AAAAAAD8AH/AAAAAAH8AH+AAAAAAH4AH+AAHgAAP4AH+AAPwAAP4AH/AAfwAAfwAH/AA/4AAfwAH/gD/4AA/gAH/4P/8AB/gAH////+AD/AAD/////AH/AAD/////wf+AAD///////+AAB///v///8AAB///P///8AAA//+H///4AAA//8H///wAAAf/4D///wAAAP/wB///gAAAP/gB///AAAAD+AA//+AAAAA4AAf/8AAAAAAAAP/wAAAAAAAAH/AAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAB8AAAAAAAAAH8AAAAAAAAAP8AAAAAAAAAf8AAAAAAAAA/8AAAAAAAAB/8AAAAAAAAH/8AAAAAAAAP/8AAAAAAAAf/8AAAAAAAA//8AAAAAAAB/38AAAAAAAH/n8AAAAAAAP/H8AAAAAAAf+H8AAAAAAA/4H8AAAAAAD/wH8AAAAAAH/gH8AAAAAAP/AH8AAAAAAf8AH8AAAAAA/4AH8AAAAAD/wAH8AAAAAH/gAH8AAAAAP/AAH8AAAAAf8AAH8AAAAA////////8AA////////4AB////////4AB////////4AB////////wAD////////wAD////////wAD////////gAH////////gAH////////AAH////////AAAAAAAH8AAAAAAAAAH8AAAAAAAAAH8AAAAAAAAAH8AAAAAAAAAH8AAAAAAAAAH8AAAAAAAAAH8AAAAAAAAAH8AAAAAAAAAH4AAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAH4AAAAPgAAAH4AAAH/gAAAH4AAD//wAAAPwAB///wAAAPwAf///wAAAPwA////4AAAfgA////4AAAfgA//D/8AAAfgA//D/8AAA/AA//D/8AAA/AA//B/+AAB/AA//B/+AAB+AA//A//AAD+AA//A//AAD+AA//A//gAH8AA//Af/wAP8AA//Af/wAP4AA//AP/4A/4AA//AP/+D/wAA//AH////wAA//AH////gAA//AD////gAA//AD////AAA//AB///+AAB//AB///+AAP//AA///8AAf//gAf//4AAf//gAP//wAAf//gAH//gAAf//gAD//AAAAAAAAB/8AAAAAAAAAPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8AAAAAAAB///gAAAAAAP///4AAAAAA////+AAAAAB/////AAAAAH/////gAAAAP/////wAAAAf/////4AAAA//////8AAAB//////8AAAD//////+AAAH//////+AAAP//4B///AAAf/+AAH//AAA//wAAB//AAB//AAAAf/AAD/+AAAAP/gAD/4AAAAH/gAH/wMAAAD/gAP/geAAAD/gAP+B+AAAB/gAf8B/AAAB/gA/4B/gAAB/AA/wB/gAAB/AB/wB/wAAB/AB/gB/4AAD/AD/AB/+AAD+AH+AA//gAP+AH8AA//8A/8AP8AA/////8AP4AAf////4AfwAAf////4AfgAAP////wAfgAAH////gAPAAAH////AACAAAD///+AAAAAAB///8AAAAAAA///4AAAAAAAf//wAAAAAAAH//AAAAAAAAB/8AAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//4AAAAAAAH//4AAAAAAAD//8AAAAAAAD//8AAAAAAAD//wAAAAAAAD//AAAAAACAD/8AAAAAAPAD/8AAAAAA/AD/8AAAAAD/gD/8AAAAAP/gD/8AAAAA//AD/8AAAAD/8AD/8AAAAP/wAD/8AAAAf/AAD/8AAAB/8AAD/8AAAH/wAAD/8AAAf/AAAD/8AAB/+AAAD/8AAH/4AAAD/8AAf/gAAAD/8AB/+AAAAD/8AD/4AAAAD/8AP/gAAAAD/8A/+AAAAAD/8D/4AAAAAD/8P/gAAAAAD/8//AAAAAAD///8AAAAAAD///wAAAAAAD///AAAAAAAD//8AAAAAAAD//wAAAAAAAD//AAAAAAAAD/8AAAAAAAAD/wAAAAAAAAD/gAAAAAAAAD+AAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AAAAAAAAAD/wAAAAAAAAH/8AAAAAAAAf/+AAAAf4AA///AAAB/+AB///gAAD//AB///wAAH//gD///4AAf//wH///4AAf//4P///8AA///8P///8AB///+f///+AD///+////+AD/////gD/+AH////+AA//AP////8AAP/AP+D//4AAH/AP4A//wAAD/AfwAf/4AAD/AfwAP/8AAB/gfgAH/8AAB/gfgAD/+AAA/g/gAD/+AAA/g/wAB//AAA/gfwAA//gAA/gf4AA//wAA/gf8AD//wAB/Af/AP//4AB/Af/////8AD/Af//////AH+AP///z//gf+AP///j////8AH///B////4AH//+B////4AD//8A////wAB//4Af///gAA//wAf///AAAf/AAP///AAAP8AAH//+AAAAgAAD//4AAAAAAAB//wAAAAAAAAf/gAAAAAAAAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf+AAAAAAAAD//gAAAAAAAH//4AAAAAAAf//8AAAAAAA///+AAAAAAB////AAAAAAD////gAAMAAH////gAAfAAP////wAA/gAP////4AA/AAf////4AB/AAf////8AD+AA/+A//8AD+AA/wAH/8AH8AB/gAB/+AP8AB/AAAf+Af4AD/AAAP+Af4AD+AAAH+A/wAD+AAAH+B/wAD+AAAD+D/gAD+AAAB+H/AAD/AAAB4P/AAH/AAAAwf+AAD/gAAAA/8AAD/wAAAD/8AAD/4AAAH/4AAD/8AAAf/wAAD//AAD//gAAD//8Af//gAAB///////AAAB//////+AAAA//////8AAAA//////4AAAAf/////wAAAAP/////gAAAAH/////AAAAAD////8AAAAAB////4AAAAAAf///gAAAAAAH//+AAAAAAAB//wAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAB8AAAAAD/AAH+AAAAAP/gAP/AAAAAP/gAf/gAAAAf/wAf/gAAAA//wA//wAAAA//wA//wAAAA//wA//wAAAA//wA//gAAAA//gA//gAAAA//gA//gAAAA//AA//AAAAAf/AAf+AAAAAP+AAP8AAAAAH4AAH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=='),
    46,
    atob("FhczISslMCkyKzMyFg=="),
    66|65536
  );
};

Graphics.prototype.setFontInknutAntiqua88 = function() {
  // Actual height 88 (87 - 0)
  return this.setFontCustom(
    atob('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAA/4AAAAAAAAAAAAH/wAAAAAAAAAAAA//gAAAAAAAAAAAH//AAAAAAAAAAAA//+AAAAAAAAAAAD//4AAAAAAAAAAAf//gAAAAAAAAAAB//+AAAAAAAAAAAH//4AAAAAAAAAAAf//gAAAAAAAAAAB//+AAAAAAAAAAAH//4AAAAAAAAAAAf//AAAAAAAAAAAB//8AAAAAAAAAAAH//gAAAAAAAAAAAP/8AAAAAAAAAAAAf/gAAAAAAAAAAAA/8AAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAP8AAAAAAAAAAAAP/wAAAAAAAAAAAf//AAAAAAAAAAAf//8AAAAAAAAAAf///wAAAAAAAAAf////AAAAAAAAAf////wAAAAAAAAf////wAAAAAAAAf////gAAAAAAAAf////gAAAAAAAAf////gAAAAAAAA/////gAAAAAAAA/////gAAAAAAAA/////gAAAAAAAA/////gAAAAAAAA/////gAAAAAAAA/////gAAAAAAAA/////gAAAAAAAA/////gAAAAAAAA/////gAAAAAAAAP////gAAAAAAAAA////AAAAAAAAAAD///AAAAAAAAAAAH//AAAAAAAAAAAAf/AAAAAAAAAAAAB/AAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAB//wAAAAAAAAAAAf//wAAAAAAAAAAH///wAAAAAAAAAB////wAAAAAAAAAP////gAAAAAAAAB/////gAAAAAAAAP/////AAAAAAAAB/////+AAAAAAAAP/////4AAAAAAAB//////wAAAAAAAP//////gAAAAAAB///////AAAAAAAP//////8AAAAAAA///////4AAAAAAH///////gAAAAAAf//////+AAAAAAD//AB///8AAAAAAf/gAAf//wAAAAAB/8AAAf//AAAAAAH/gAAAf/+AAAAAA/8AAAAf/4AAAAAD/gAAAA//gAAAAAf+AAAAD/+AAAAAB/wAAAAH/4AAAAAH/AAAAAP/gAAAAAf8AAAAA/+AAAAAD/wAAAAD/4AAAAAP/AAAAAH/gAAAAA/8AAAAAf+AAAAAD/wAAAAB/4AAAAAP/AAAAAH/gAAAAA/+AAAAAf+AAAAAD/4AAAAB/wAAAAAP/gAAAAH/AAAAAA//AAAAAf8AAAAAD/+AAAAD/gAAAAAP/8AAAAP+AAAAAA//4AAAB/4AAAAAD//wAAAP/AAAAAAH//wAAB/8AAAAAAf//4AAf/gAAAAAB////A//+AAAAAAD///////wAAAAAAP///////AAAAAAAf//////4AAAAAAB///////AAAAAAAD//////8AAAAAAAP//////gAAAAAAAf/////8AAAAAAAA//////gAAAAAAAB/////8AAAAAAAAD/////gAAAAAAAAH////8AAAAAAAAAP////gAAAAAAAAAP///4AAAAAAAAAAf//+AAAAAAAAAAAf//gAAAAAAAAAAAH/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAHgAAAAAB8AAAAAB+AAAAAAPwAAAAAP8AAAAAB/AAAAAA/wAAAAAP8AAAAAD/AAAAAA/wAAAAAP8AAAAAH/AAAAAA/4AAAAA/8AAAAAD/gAAAAH/wAAAAAP+AAAAA//AAAAAA////////8AAAAAD////////wAAAAAP////////AAAAAA////////8AAAAAD////////wAAAAAP////////AAAAAA////////8AAAAAD////////wAAAAAP////////AAAAAA////////8AAAAAD////////wAAAAAP////////AAAAAA////////8AAAAAD////////wAAAAAP////////AAAAAA//AAAAAf8AAAAAD/4AAAAA/wAAAAAP/gAAAAD/AAAAAA/8AAAAAP8AAAAAD/gAAAAA/wAAAAAP8AAAAAB/AAAAAA/gAAAAAH8AAAAAD+AAAAAAfwAAAAAHwAAAAAA8AAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAB8AAAAAAAPgAAAAPwAAAAAAB/AAAAB/AAAAAAAP8AAAAP8AAAAAAB/wAAAB/wAAAAAAP+AAAAH/AAAAAAA/4AAAA/8AAAAAAH/AAAAH/wAAAAAA/8AAAA//AAAAAAH/gAAAH/8AAAAAA/+AAAAf/wAAAAAD/4AAAD//AAAAAAf/AAAAf/8AAAAAB/8AAAD//wAAAAAP/wAAAf//AAAAAA/+AAAD//8AAAAAD/4AAAf//wAAAAAP/gAAB///AAAAAA/+AAAP//8AAAAAD/4AAB///wAAAAAP/gAAP///AAAAAA//AAB///8AAAAAD/8AAP///wAAAAAP/wAB////AAAAAA//gAf///8AAAAAD//AD/9//wAAAAAP/+A//n//AAAAAA/////8f/8AAAAAD/////h//wAAAAAH////+H//AAAAAAf////wf/8AAAAAB////+B//wAAAAAH////wH//AAAAAAP///+Af/8AAAAAA////wB//wAAAAAD///+AH//AAAAAAH///wAf/8AAAAAAf//+AB//wAAAAAA///wAH//AAAAAAB//+AAf/8AAAAAAD//wAB//wAAAAAAP/8AAH//AAAAAAAP/gAB//8AAAAAAAf4AA///wAAAAAAAAAAP///gAAAAAAAAAB///+AAAAAAAAAAH///4AAAAAAAAAAP///gAAAAAAAAAA////AAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAB4AAAAAAAADgAAAP4AAAAAAAAP4AAA/gAAAAAAAA/gAAH+AAAAAAAAH+AAA/wAAAAAAAAf4AAH/AAAAAAAAB/AAA/4AAAAAAAAP8AAD/gAAAAAAAA/wAAf8AAAAAAAAH+AAD/wAAAAAAAAf4AAf+AAAAAAAAB/gAD/4AAAAAAAAP8AAP/gAAAAAAAA/wAA/+AAAAAAAAH/AAD/wAAAAAAAAf4AAP/AAAHwAAAD/gAB/8AAA/gAAAP8AAD/4AAH+AAAB/wAAP/gAA/8AAAH/AAA/+AAH/4AAA/4AAD/8AA//gAAH/gAAP/4AP//AAAf8AAA//8H//+AAD/wAAD//////8AAf+AAAP//////4AD/4AAAf//////wA//AAAB///////9//8AAAH//////////gAAAP///8/////+AAAA////j/////wAAAD///+H/////AAAAH///wf////4AAAAf//+A/////AAAAA///wD////4AAAAB//+AH////gAAAAD//wAf///8AAAAAH/+AA////gAAAAAP/gAB///8AAAAAAf8AAD///gAAAAAAOAAAP//8AAAAAAAAAAAf//AAAAAAAAAAAAf/wAAAAAAAAAAAA/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAAAAAAAAAAH8AAAAAAAAAAAAA/wAAAAAAAAAAAAH/AAAAAAAAAAAAA/8AAAAAAAAAAAAH/wAAAAAAAAAAAB//AAAAAAAAAAAAP/8AAAAAAAAAAAB//wAAAAAAAAAAAP//AAAAAAAAAAAB//8AAAAAAAAAAAf//wAAAAAAAAAAD///AAAAAAAAAAAf//8AAAAAAAAAAD/9/wAAAAAAAAAA//n/AAAAAAAAAAH/8f8AAAAAAAAAA//h/wAAAAAAAAAH/4H/AAAAAAAAAA//Af8AAAAAAAAAP/4B/wAAAAAAAAB//AH/AAAAAAAAAP/4Af8AAAAAAAAB/+AB/wAAAAAAAAP/wAH/AAAAAAAAD/+AAf8AAAAAAAAf/wAB/wAAAAAAAD/8AAH/AAAAAAAAf/gAAf8AAAAAAAD/8AAB/wAAAAAAA//gAAH/AAAAAAAH/8AAAf8AAAAAAA//AAAB/wAAAAAAH//////////+AAAf//////////4AAB///////////gAAP//////////8AAA///////////wAAD///////////AAAf//////////4AAB///////////gAAP//////////+AAA///////////wAAD///////////AAAf//////////8AAB///////////gAAH//////////+AAA///////////wAAAAAAAAAH/AAAAAAAAAAAAAf8AAAAAAAAAAAAB/wAAAAAAAAAAAAH/AAAAAAAAAAAAAf8AAAAAAAAAAAAB/wAAAAAAAAAAAAH/AAAAAAAAAAAAAf8AAAAAAAAAAAAB/wAAAAAAAAAAAAH/AAAAAAAAAAAAAf8AAAAAAAAAAAAB+AAAAAAAAAAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAfwAAAAAAfAAAAAB/gAAAAA/+AAAAAH8AAAAB//4AAAAA/wAAAD///gAAAAD/AAAH////AAAAAP4AAP////8AAAAB/gAD/////wAAAAH+AAP/////gAAAA/wAA/////+AAAAD/AAD//g//4AAAAP8AAP/+D//wAAAB/gAA//4H//AAAAH+AAD//gf/+AAAA/4AAP/+B//4AAAD/AAA//4D//wAAAP8AAD//gP//AAAB/wAAP/+A//+AAAH+AAA//4B//4AAA/4AAD//gH//wAAH/AAAP/+AP//AAAf8AAA//4A//+AAD/wAAD//gD//8AAf+AAAP/+AH//4AD/4AAA//4Af//wAf/AAAD//gA///gH/8AAAP/+AD//////gAAA//4AH/////+AAAD//gAf/////wAAAP/+AA//////AAAA//4AD/////4AAAD//gAH/////AAAAP/+AAf////8AAAD//4AA/////gAAA///gAB////8AAAf///AAH////gAAD///8AAP///+AAAP///wAAf///wAAAf///AAA///+AAAB///+AAB///gAAAH///4AAD//8AAAAAAAAAAAD//AAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8AAAAAAAAAAB///+AAAAAAAAAAf///+AAAAAAAAAP////+AAAAAAAAD/////+AAAAAAAAf/////8AAAAAAAH//////8AAAAAAA///////4AAAAAAP///////wAAAAAB////////gAAAAAP///////+AAAAAB////////8AAAAAP////////4AAAAB/////////gAAAAP/////////AAAAB/////////8AAAAP///8Af///wAAAB///4AAD///gAAAP//8AAAB//+AAAB///AAAAB//4AAAH//wAAAAD//wAAA//8AAAAAD//AAAH//gAAAAAH/8AAA//4AAAAAAP/wAAD//AGAAAAA//AAAf/4B4AAAAB/8AAD/+APwAAAAH/wAAP/wD/AAAAAf/AAB/+AP+AAAAA/8AAP/wA/8AAAAD/gAA/+AD/wAAAAP+AAH/4AP/gAAAA/4AAf/AA//AAAAH/gAD/4AD/+AAAAf8AAf/AAP/8AAAB/wAB/4AAf/8AAAP/AAP/AAB//8AAB/4AA/8AAH//8AAf/gAH/gAAP///gf/8AAf8AAA///////wAD/gAAD//////+AAP+AAAH//////4AB/wAAAf//////AAH+AAAA//////4AA/4AAAB//////AAA/AAAAH/////8AAA4AAAAP/////gAAAAAAAAf////8AAAAAAAAA/////gAAAAAAAAB////8AAAAAAAAAD////AAAAAAAAAAH///4AAAAAAAAAAH//+AAAAAAAAAAAH//gAAAAAAAAAAAH/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB///8AAAAAAAAAAH///4AAAAAAAAAAP///gAAAAAAAAAA///+AAAAAAAAAAD///8AAAAAAAAAAP///gAAAAAAAAAA///wAAAAAAAAAAB//8AAAAAAAAGAAH//AAAAAAAAB8AAf/8AAAAAAAAPwAB//wAAAAAAAD/gAH//AAAAAAAA/+AAf/8AAAAAAAP/8AB//wAAAAAAD//gAH//AAAAAAA//4AAf/8AAAAAAP/+AAB//wAAAAAD//gAAH//AAAAAAf/8AAAf/8AAAAAH//AAAB//wAAAAB//wAAAH//AAAAAf/8AAAAf/8AAAAH//AAAAB//wAAAB//wAAAAH//AAAAf/8AAAAAf/8AAAD//AAAAAB//wAAA//4AAAAAH//AAAP/+AAAAAAf/8AAD//gAAAAAB//wAA//4AAAAAAH//AAP/+AAAAAAAf/8AD//gAAAAAAB//wA//4AAAAAAAH//AH/+AAAAAAAAf/8B//wAAAAAAAB//wf/8AAAAAAAAH//H//AAAAAAAAAf/9//wAAAAAAAAB////8AAAAAAAAAH////AAAAAAAAAAf///wAAAAAAAAAB///8AAAAAAAAAAH///gAAAAAAAAAAf//4AAAAAAAAAAB//+AAAAAAAAAAAH//gAAAAAAAAAAAf/4AAAAAAAAAAAB/+AAAAAAAAAAAAH/gAAAAAAAAAAAAf4AAAAAAAAAAAAB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/AAAAAAAAAAAAA//gAAAAAAAAAAAH//gAAAAAAAAAAA///AAAAAACAAAAP//+AAAAAD/wAAB///8AAAAA//wAAP///4AAAAH//wAA////wAAAA///gAH////gAAAH///AA/////AAAA///+AH////8AAAH///8A/////4AAA////4D/////gAAH////wf/////AAA/////D/////8AAH////+f/////4AAf////9//v///gAD///////AA//+AAf//////wAA//8AB//////+AAA//wAP//////wAAB//AA/+A///+AAAD/8AH/wA///wAAAH/4Af8AB///AAAAP/gB/wAB//+AAAA/+AP+AAD//4AAAB/4A/4AAP//wAAAH/gD/gAAf//AAAAP+AP+AAA//+AAAA/4A/4AAB//8AAAD/gD/gAAH//wAAAP+AP+AAAP//gAAA/4A/8AAAf//AAAD/gD/wAAB//8AAAP+AP/wAAf//4AAA/4A//gAH///wAAH/AD//gB////gAAf8AH////////AAD/wAf///////+AAf+AB/////3//+AH/4AD////+P//+B//AAP////w//////8AA////+B//////gAB////wH/////+AAD///+AP/////wAAP///wAf////+AAAf//+AB/////wAAA///wAD/////AAAB//+AAH////4AAAD//gAAP////AAAAH/8AAA////4AAAAD/AAAB////AAAAAAAAAAD///4AAAAAAAAAAD//+AAAAAAAAAAAH//wAAAAAAAAAAAP/8AAAAAAAAAAAAP/AAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/8AAAAAAAAAAAA//+AAAAAAAAAAAP//8AAAAAAAAAAD///8AAAAAAAAAAf///4AAAAAAAAAH////wAAAAAAAAA/////gAAAAAAAAH/////AAAAAAAAA/////+AAAAYAAAH/////8AAAD4AAA//////wAAAfwAAD//////gAAB/gAAf//////AAAP+AAD//////8AAB/wAAP//////4AAH/AAB///////gAA/4AAH/+Af//+AAH/gAA//AAH//8AAf8AAD/wAAD//wAD/wAAf+AAAD//AAf+AAB/wAAAH/+AD/4AAH/AAAAP/4Af/AAA/8AAAAf/gB/4AAD/gAAAA/+AP/gAAP+AAAAB/4B/8AAA/4AAAAD/gP/wAAH/gAAAAP+B/+AAAf/AAAAAf4P/4AAB/8AAAAB+B//AAAH/wAAAADgP/4AAAf/gAAAAMB//gAAB/+AAAAAAP/8AAAH/8AAAAAD//gAAAf/4AAAAAf/+AAAB//wAAAAH//wAAAD//wAAAB//+AAAAP//wAAAf//wAAAA///4AAP//+AAAAB////Af///4AAAAH/////////AAAAAf////////4AAAAA/////////AAAAAD////////4AAAAAH////////AAAAAAP///////4AAAAAA////////AAAAAAB///////4AAAAAAD//////+AAAAAAAH//////wAAAAAAAP/////+AAAAAAAAP/////gAAAAAAAAf////4AAAAAAAAAf///+AAAAAAAAAAP///AAAAAAAAAAAH//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+AAAD/AAAAAAAA/8AAAf+AAAAAAAH/4AAD/8AAAAAAA//wAAf/4AAAAAAH//gAD//wAAAAAA//+AAf//AAAAAAD//4AB//8AAAAAAf//gAP//wAAAAAB//+AA///AAAAAAH//4AD//8AAAAAAf//gAP//wAAAAAB//+AA///AAAAAAH//4AD//8AAAAAAf//AAP//gAAAAAB//8AA//+AAAAAAD//gAB//wAAAAAAH/8AAD/+AAAAAAAf/gAAP/wAAAAAAAf8AAAP+AAAAAAAAfAAAAPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),
    46,
    atob("HR9FLTkxQDdDOkNDHQ=="),
    88|65536
  );
};

{ // must be inside our own scope here so that when we are unloaded everything disappears
  // we also define functions using 'let fn = function() {..}' for the same reason. function decls are global
  
let drawStatusTimeout;
  
let drawStatus = function(){ // battery and 24h line clock, remove if ou want  to display wigets instead
  
g.clearRect(0,22,175,22);
g.setColor(g.theme.fg); // draw battery 
g.drawLine(0,2,E.getBattery()*1.75,2);
  // draw line for 24 h clock
  var x = g.getWidth() / 2;
  var y = g.getHeight() / 2;
  var ix;
  var shade;
  var w ;
  var date = new Date();
  for ( ix = 0; ix < 176; ix=ix+4){
    shade = 2*Math.PI * ((date.getHours()-6)/24);
    shade = Math.sin(2*Math.PI* ix/176 + shade );
    shade = shade * 0.5 + 0.5;
    shade = 1- shade ;
g.setColor(shade,shade,shade);
g.drawLine(ix,18, ix+3,18);
  }
g.setColor(g.theme.fg); // draw dots at noon / midnight
ix = x-(((date.getHours())%12)/24)*176;
g.drawLine(ix,16,ix+2,18);
g.drawLine(ix+2,18,ix, 20);
g.drawLine(ix,20,ix-2,18);
g.drawLine(ix-2,18,ix,16);
  
ix = ix + 176/2;
g.drawLine(ix,16,ix+2,18);
g.drawLine(ix+2,18,ix, 20);
g.drawLine(ix,20,ix-2,18);
g.drawLine(ix-2,18,ix,16);

// queue next drawStatus
  if (drawStatusTimeout) clearTimeout(drawStatusTimeout);
  drawStatusTimeout = setTimeout(function() {
    drawStatusTimeout = undefined;
    drawStatus();
    //draw();
    //drawWeek();    
  }, 30*60000 - (Date.now() % 30*60000));
  
};//------------------<< status
  
  
  
let drawWeekTimeout;
  
let drawWeek = function() {
  //  date and day of week, moonphase, next quater moon
  var date = new Date();
  var weekday = Math.abs(date.getDay() -1 % 7);
  var dateStr = date.getDate() ;
  
  g.reset().clearRect(0,175-36,175,175-36);
  g.setColor(g.theme.fg);
  g.fillRect(0, 175-15, 175, 175);
  var pos;
  var d;
 for ( d=0; d< 7; d++){ 
    pos = d * 25;
     if (d < 5 ){
       g.setColor(g.theme.bg);
       g.fillRect(pos, 175-15, pos+22, 175);
     }else{        
       g.setColor(g.blendColor(g.theme.bg,g.theme.fg,0.25));
       g.fillRect(pos, 175-15, pos+22, 175);
     }
    
 }
g.setColor(g.theme.fg);
g.setFontAlign(0, 0).setFont("InknutAntiqua24", 1).drawString(dateStr,  weekday*(176/7)+11, g.getHeight() - 15);

var mphaseq=-1; // moonphase 0-3
var qday = -1; // day in week quater moon
var moonssince; // full moons since May 5th 2023
var lundaymo; // lunation day monday
var tms = date.getTime() + 86400000;//
var weekdayms = weekday * 86400000 ;//seconds since monday
var startd = tms - weekdayms; // monday
var perc;// percent of cycle
tms = startd - 1683308000000 ;//may5th 1734h 2023;
moonssince = tms /2551442823.5;//div ms in a lunar month
perc = moonssince - Math.floor(moonssince); 
lundaymo = perc * 29.530588235;
mphaseq =Math.round((lundaymo)/ 7.38264705875);
   
qday = Math.round( 7.38264705875 - (lundaymo- (mphaseq* 7.38264705875))) % 7; // next quater phase day
mphaseq = (mphaseq+1) % 4; // set to next quater phase
  

g.setColor(0,0,0); // black moon bg
var yoffset = (qday == weekday )*24;
g.setFontAlign(0, 0).setFont("moonphases", 1).drawString(String.fromCharCode(48), qday*(176/7)+11, g.getHeight() - 22- yoffset);
g.setColor(1,1,1); // moonshape
   //g.setFontAlign(0, 0).setFont("moonphases", 1).drawString(String.fromCharCode(65+mphaseq*26/4), qday*(176/7)+11, g.getHeight() - 26- yoffset); // next moon or :
  // exception for full moon:
  var char;
  if (Math.round(65+perc*26)==77) { 
       char = 48;
      }else{
   char = Math.round(65+perc*26);
      }
g.setFontAlign(0, 0).setFont("moonphases", 1).drawString(String.fromCharCode(char), qday*(176/7)+11, g.getHeight() - 22- yoffset);

// queue next drawWeek
  if (drawWeekTimeout) clearTimeout(drawWeekTimeout);
  drawWeekTimeout = setTimeout(function() {
    drawWeekTimeout = undefined;
    draw();
    drawWeek();
  }, 180*60000 - (Date.now() % 180*60000)); 

};//-------------------<< week
  
let drawTimeout;

//  draw  clock
let draw = function() {
  var x = g.getWidth() / 2;
  var y = g.getHeight() / 2;
  var xoffset =0;
  var minute;
  var hour;
  var hour_old;
  var date;
  var digit1;
  var digit2;
  
  g.reset().clearRect(0,25,175,175-36); // clear area

  date = new Date();
  hour_old = hour;
  hour = date.getHours(); // hour 
  if (hour_old != hour){ // only draw if hour has changed
  if (hour > 12) {
    hour = hour % 12;
  }
  digit2 = hour % 10;
  digit1 = hour - digit2;
  if (digit1 > 0 ){ // draw hours, one or two digits
  xoffset = -10;
  g.setColor(g.theme.fg);
   g.setFontAlign(1, 0).setFont("InknutAntiqua66",1).drawString(hour, x+xoffset, y);
  }
  else {
    xoffset = -15;
  g.setColor(g.theme.fg);
  g.setFontAlign(1, 0).setFont("InknutAntiqua88",1).drawString(hour, x+xoffset, y);  
  }
  }
   minute = date.getMinutes(); //   minutes
  digit2 = minute % 10;
  digit1 = Math.floor(minute / 10);
  minute = digit1.toString() + digit2.toString();
  
    g.setColor(g.blendColor(g.theme.bg,g.theme.fg,0.5));
  g.setFontAlign(-1, 0).setFont("InknutAntiqua66",1).drawString(minute, x+xoffset , y);
  
// queue next draw
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = setTimeout(function() {
    drawTimeout = undefined;
    draw();
  }, 60000 - (Date.now() % 60000));
 
};//-----------------------<< clock  
  

// Show launcher when middle button pressed
Bangle.setUI({
  mode : "clock",
  remove : function() {
    // Called to unload all of the clock app
    if (drawStatusTimeout) clearTimeout(drawStatusTimeout);
    drawStatusTimeout = undefined;
    if (drawTimeout) clearTimeout(drawTimeout);
    drawTimeout = undefined;
    if (drawWeekTimeout) clearTimeout(drawWeekTimeout);
    drawWeekTimeout = undefined;
    delete Graphics.prototype.setFontmoonphases;
    delete Graphics.prototype.setFontInknutAntiqua24;
    delete Graphics.prototype.setFontInknutAntiqua66d;
    delete Graphics.prototype.setFontInknutAntiqua88;
    
    
  }});
//Load widgets
//Bangle.loadWidgets();
g.reset().clearRect(0,0,g.getWidth(),g.getHeight());
draw();
drawWeek();
drawStatus(); // remove if ou want wigets to draw instead
//
//setTimeout(Bangle.drawWidgets,0);
}
