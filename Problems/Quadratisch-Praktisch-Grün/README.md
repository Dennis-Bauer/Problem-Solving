# Quadratisch-Praktisch-Grün
This problem comes from a competition in Germany called [JWINF](https://bwinf.de/jugendwettbewerb/). It is from the 42nd competition and was the first time I participated. Since it is a German competition, the documentation is also in German. You can find the original repository [here](https://github.com/Dennis-Bauer/JWINF-42_Runde-3). The original PDF is also included, this solution earned me the maximum possible points, so if you want to take a look at it, you can find it [here](./Junioraufgabe1.pdf).

The task itself was presented on a large board, which I won’t include here. I only copied the text into this documentation, but if you want to see the original version, you can visit the official [repository](https://github.com/Dennis-Bauer/JWINF-42_Runde-3).

The original program I wrote was in Java, but now I migrated it to TypeScript. Because of that, there are some rounding differences. In a few test cases, the last decimal place may therefore differ from the test cases in the documentation.

## Task
Herr Grün hat ein großes Grundstück, auf dem eine Kleingartenanlage eingerichtet werden soll. Dazu soll das Grundstück in mehrere Kleingärten gleicher Größe aufgeteilt werden. Am besten sind quadratische Kleingärten, denn sie können besonders vielfältig bepflanzt werden. Es haben sich schon einige Interessenten gemeldet. Herr Grün fragt sich, wie er das Grundstück möglichst passend aufteilen kann. Wenn beispielsweise sein Grundstück 42 m x 66 m groß wäre und er 23 Interessenten hätte, könnte er folgende Aufteilungen machen.
*Hier ist nun ein Bild mit mehren Aufteilungen zu sehen, die möglich wären.*

Wie man sieht, ergibt die Aufteilung in 24 Kleingärten fast quadratische Kleingärten und gefällt Herrn Grün am besten.

Hilf Herrn Grün und schreibe ein Programm, das die Grundstücksgröße und die Anzahl von Interes-senten einliest und eine Aufteilung in Kleingärten vorschlägt. Es müssen mindestens so viele Kleingärten entstehen, wie es Interessenten gibt, aber höchstens 10 % mehr. Unter dieser Bedingung sollen die Kleingärten so quadratisch wie möglich sein. Überlege dir zunächst, was „so quadratisch wie möglich“ bedeuten könnte und dokumentiere dies.

# Documentation

## Problembeschreibung 
Herr  Grün  hat  einen  Garten,  der  *a  *  b*  groß  ist.  Er  möchte  diesen  jetzt  in  *x* 
Kleingärten unterteilen. Die Anzahl dieser Kleingärten hängt von der Anzahl der 
Interessenten  ab.  Ihm  ist  wichtig,  dass  diese  Kleingärten so  quadratisch wie 
möglich sind. Herr Grün braucht also ein Programm, das die Anzahl der 
Interessenten  und  die  Größe  des  Gartens  einliest  und  berechnet,  in  wie  viele 
Kleingärten das Grundstück am besten aufgeteilt werden kann, damit 
möglichst quadratische Kleingärten entstehen.

## Was bedeutet so quadratisch wie möglich? 
Da  der  Garten  laut  der  Aufgabenstellung  immer  rechteckig  ist  (eine  Form  mit 
vier  Seiten,  wobei  jeweils  zwei  gleich  lang  sind  *(a  *  b)*),  können  wir  davon 
ausgehen, dass die berechneten Kleingärten ebenfalls rechteckig sein werden. 
Herr  Grün  möchte  jedoch,  dass  diese  so  quadratisch  wie  möglich  sind.  Ein 
Quadrat  ist  wie  ein  Rechteck,  nur  mit  immer  gleich  langen  Seiten  *(a  *  a)*.  Also 
bedeutet  „so  quadratisch  wie  möglich“,  dass  die  beiden  Seiten  *a*  und  *b*  eines  
Kleingartens  <u>gleich  bzw.  so  nah  wie  möglich  beieinander  liegen  müssen.  Die 
Differenz der beiden Werte *a* und *b* muss gleich oder nahe null sein. </u>
 
## Lösungsidee
Der erste Schritt, den ich mir überlegte, war was das Programm berechnen
muss: Das Programm soll ein Rechteck in *x* gleich große und möglichst
quadratische Unterrechtecke aufteilen, wobei *x* die Anzahl der Interessenten
darstellt. Da die Gesamtanzahl der Unterrechtecke jedoch um bis zu 10%
höher sein darf, muss das Programm alle möglichen Aufteilungen des
Rechtecks berechnen und die beste Lösung präsentieren.


Die Aufteilung basiert auf der Anzahl der Unterrechtecke (oder Kleingärten) in
der Höhe und Breite des Rechtecks. Zur Vereinfachung nenne ich die Anzahl
der Unterrechtecke in der Höhe *n* und in der Breite *m*. Die Gesamtanzahl der
Unterrechtecken bezeichne ich als *xn*. Die Formel für *xn* lautet also *m * n* . Da *m*
ein Teiler von *xn* sein muss (ein Teiler einer Zahl ist eine ganze Zahl, die die Zahl ohne Rest teilt), überprüfe ich jeden Wert von 1 bis *xn*, um festzustellen, ob er
ein Teiler von *xn* ist. Wenn m ein Teiler von *xn* ist, kann ich nun *n* berechnen,
indem ich *xn* durch *m* dividiere. Auf diese Weise habe ich eine einzelne
Aufteilung berechnet. Diesen Schritt wiederhole ich für alle Werte von m, die
Teiler von *xn* sind.


So habe ich alle möglichen Aufteilungen für *xn* berechnet und bestimme jetzt
die Höhe und Breite der Unterrechtecke (Kleingärten) für jede einzelne
Aufteilung, indem ich die Gesamtbreite des Rechtecks durch *m* und die
Gesamthöhe durch *n* dividiere. Dann berechne ich die Differenz zwischen der
Breite und der Höhe der Unterrechtecke, um herauszufinden, wie quadratisch
die Unterrechtecke sind. Je kleiner diese Differenz ist, desto quadratischer
sind die Unterrechtecke. Die Aufteilung, bei der die Differenz am kleinsten ist,
stellt die beste Aufteilung für das Rechteck mit insgesamt *xn* Unterrechtecken
dar.


Diese beiden Schritte wiederhole ich für alle möglichen Werte von *xn* und
berechne für jede Aufteilung die Differenz der Unterrechtecke. Am Ende bietet
die Aufteilung, bei der die Differenz am kleinsten ist, die beste Aufteilung für
das Grundstück.


Ich habe nun die Anzahl der Kleingärten pro Höhe und pro Breite des
Grundstücks sowie die Gesamtanzahl der Kleingärten ermittelt. Diese
Gesamtanzahl überschreitet nie 10% der Anzahl der Interessenten, und die
Kleingärten sind immer so quadratisch wie möglich gestaltet.
￼
## [Umsetzung](solver.ts)
~~Ich programmiere ein konsolenbasiertes Java-Programm. Da ich nur mit der
Konsole und keinen anderen grafischen Funktionen arbeiten kann, habe ich
mich entschieden, eine selbst programmierte Klasse in mein Projekt zu
importieren, mit der ich die Farbe und den Stil des Textes ändern kann. Mein
erster Schritt war es, die Klasse in mein Programm zu importieren.~~
*Dieser Teil beschreibt wie das Programm in der Konsole Text ausgibt. Dies macht die Version des Programmes nicht.*

~~Ich habe als zweiten Schritt eine Funktion erstellt, die die Werte für die Anzahl
der Interessenten, die Grundstücksbreite und die Grundstückshöhe einliest
(getValues()) und diese als Double-Array zurückgibt. Der erste Wert (Anzahl der
Interessenten) wird als Integer eingelesen und anschließend in einen Double
umgewandelt, um im Array gespeichert zu werden. Die Funktion weist den
Benutzer darauf hin, wenn ein ungültiger Wert (wie Buchstaben oder
Sonderzeichen) eingegeben wird. Dies wird durch einen try-catch-Block
realisiert. Außerdem prüft die Funktion, ob der eingegebene Wert größer als 0
ist, da es keine negativen oder null Interessenten geben kann und auch das
Grundstück nicht kleiner oder gleich null sein darf. Falls eine falsche Eingabe
erfolgt, stürzt das Programm nicht direkt ab, sondern informiert den Benutzer
über den Fehler und fordert ihn zur erneuten Eingabe auf (siehe Eigenes-
Beispiel-1). Um Wiederholungen im Code zu vermeiden, wird eine Schleife
verwendet, die so lange läuft, bis alle drei Werte erfolgreich eingegeben
wurden. Der Zähler (i) wird dabei nur erhöht, wenn eine gültige Eingabe erfolgt
ist.~~
*Dieser Teil ist fürs einlesen der Daten da. Dies ist in der Version hier durch eine Simple function geregelt. Wichtig hier zu erwähnen ist, das bei falscher Eingabe eine Error geschmissen wird.*


~~Nachdem die Eingabe erfolgt ist, speichert das Programm die drei Werte, die
als Rückgabe der Funktion in einem Array gespeichert sind, in drei einzelnen
Variablen (customers, gardenHeight, gardenWidth). Diese Werte gibt das
Programm dann in der Konsole aus, damit der Benutzer sicherstellen kann,
dass er die richtigen Werte eingegeben hat. Diese Variablen werden dann als
Parameter an eine Funktion, die die Ergebnisse berechnet (calculateAnswers(int
customers, int gardenHeight, int gardenWidth)), übergeben.~~
*Dieser Teil beschreibt nun was mit der Eingabe gemacht wird. Im grunde wird nun einfach die Function calculateAnswers(...) aufgerufen, was unsere eigentlich Funktion in dieser Version ist.*

Die Funktion, die die Ergebnisse berechnet und ausgibt, arbeitet wie folgt,
entsprechend meiner Lösungsidee:

Die Funktion berechnet als ersten Schritt den Flächeninhalt des Gartens ~~und
gibt diesen in der Konsole aus~~, um dem Benutzer einen groben Überblick zu
geben, wie viel Fläche ihm zur Verfügung steht. Als nächsten Schritt erstellt sie
ein ~~Array~~|Object, in dem die Kleingärten pro Höhe und Breite gespeichert sind. Diese Werte erhält sie mithilfe der Funktion *calculateBestDividing(customers: number, width: number, height: number)*. Diese Funktion berechnet die Aufteilung des
Grundstücks in Kleingärten, also wie viele Kleingärten es pro Höhe, pro Breite
und insgesamt gibt.


Die Funktion berechnet die Aufteilung in dem sie zuerst eine Variable erstellt
und einen ~~Array~~|Object. Die Variable *bestDiff* speichert die bisher beste Differenz
zwischen der Breite und der Höhe eines Kleingartens. Sie ist ein Objekt der
Klasse *~~BigDecimal~~|Decimal*, da die Differenz eine hohe Anzahl an Nachkommastellen
haben kann, die der Datentyp *~~double~~|number* nicht präzise genug darstellen kann. Das
*~~Array~~|Object* speichert die zur Differenz gehörigen Werte: *m* (steht für Kleingärten in
der Breite) und *n* (steht für Kleingärten in der Höhe).


Als nächstes startet eine for-Schleife, die von 1 bis zu 10 % der Gesamtanzahl
der Interessenten durchläuft. So läuft die Schleife jeden *xn* (steht für die Anzahl
an Kleingärten) Wert einmal durch.


Zuerst wird der neue *xn* Wert berechnet, indem die Anzahl an Interessenten mit
*i*(der aktuellen Schleifeniteration) addiert wird(*nCustomers*). Anschließend
werden drei Variablen definiert: Die ersten beiden speichern die bisher besten
Werte für *m* und *n* in Bezug auf den aktuellen *xn* Wert, während die dritte
Variable die bisher kleinste Differenz der Seitenlängen eines Kleingartens
festhält. Da diese zu Beginn nicht bekannt ist, setze ich sie auf *~~Double.Max~~|infinity*,
um sicherzustellen, dass sie anfangs immer größer als eine neu berechnete
Differenz ist. Diese Variable ist auch ein Objekt der *~~BigDecimal~~|Decimal* Klasse. Danach
wird eine zweite Schleife gestartet, die alle möglichen Werte für *m* durchläuft.
In dieser Schleife repräsentiert *m* nicht nur die Anzahl an Kleingärten pro
Breite, sondern auch die Anzahl der Schleifendruchläufe. Der erste Schritt in
dieser Schleife besteht darin, zu überprüfen, ob *m* ein Teiler von *xn*
(*nCustomers*) ist. Ein Teiler gehört zu einer Zahl, die er durch sich teilen kann,
sodass kein Dezimalwert entsteht. Um dies zu testen, verwende ich den
Modul-Operator von ~~Java~~|JavaScript, der den Rest einer Division berechnet. Solang der
Rest der Division von *m* durch *xn* (*nCustomers*) gleich 0 ist, gilt *m* ist ein Teiler
von *xn* und kann somit als mögliche Anzahl der Kleingärten pro Breite
betrachtet werden.


Im nächsten Schritt berechnen wir *n*, indem wir *xn* durch *m* dividieren. Dieser
Wert wird in einer Variablen gespeichert.


Anschließen berechnet das Programm die Differenz zwischen der Länge und
der Breite eines Kleingarten. Die Länge wird berechnet, indem *m* durch die
Breite des Grundstückes(*width*) und *n* durch die Höhe (*height*) der Grundstücks
dividiert wird. Diese beiden Werte werden dann voneinander subtrahiert, und
das Ergebnis wird mit der *Math.abs()*-Methode in einen positiven Wert
umgewandelt, falls es negativ sein sollte. Diese berechnete Differenz wird dann
in einer Variablen gespeichert (*diff*), die wieder ein Objekt der Klasse
*~~BigDecimal~~|Decimal* ist.

Die Variable *diff* wird im nächsten Schritt mit der bis zu diesem Zeitpunkt
kleinsten Differenz(*minDiff*) verglichen. Falls die aktuelle Differenz(*diff*) kleiner
als die bisher kleinste Differenz ist, wird *minDiff* auf den Wert von *diff*
aktualisiert. Die Variablen, die die bisher besten Werte für *m* und *n* speichern
(*bestM*, *bestN*) werden entsprechend mit den aktuellen Werten von *m* und *n*
überschrieben. Diese Schritte wiederholen sich *xn* (*nCustomers*) mal. Am Ende
dieser zweiten Schleife ist somit die Beste Aufteilung mit *bestM* und *bestN*
gespeichert, die mit dem aktuellen Wert von *nCustomers* möglich ist.


Nach dieser Schleife wird überprüft, ob die in *bestM* und *bestN* gespeicherte
Aufteilung besser ist als die bisher Beste. Dies geschieht erneut durch
Berechnung der Längen und der Differenz zwischen diesen vier Variablen.
Sollte die neue Differenz kleiner sein als die bisherige, werden *bestM* und
*bestN* im *dividing-~~Array~~|Object* gespeichert und die kleinste Differenz entsprechend
aktualisiert. Anschließend wird geprüft, ob die aktuelle Differenz *0* beträgt.
Falls dies der Fall ist, bricht das Programm die Schleife ab und gibt das *~~Array~~|Object*
zurück, da eine Differenz von 0 das bestmögliche Ergebnis darstellt.


Falls die Differenz nie 0 beträgt, wird die Schleife alle möglichen *xn* Werte
vollständig durchlaufen und am Ende das *dividing-~~Array~~|Object* mit der bestmöglichen
Aufteilung zurückgeben.


(Nun sind wir wieder in der eigentlichen *calculateAnswers* Funktion)


~~Nach dem die Werte in dem Array gespeichert sind, werden diese in extra
Variablen gespeichert (mGardenPerHeight, mGardenPerWidth) um das
Programm übersichtlicher zu gestalten.~~


~~Diese Werte werden dann in der Konsole ausgeben.~~


Alls letztes werden 4 Variablen erstellt: ~~eine Integer-Variable und 3 Double-
Variablen~~|Number Variablen. In der ersten Variablen (*mGardenTotal*) wird die Gesamtanzahl an
Kleingärten gespeichert. Diese wird berechnet, indem die Anzahl der
Kleingärten in der Höhe mit der Anzahl an Kleingärten in der Breite multipliziert
wird. Die nächsten beiden Variablen(*mGardenHeight*, *mGardenWidth*) speichern
die Höhe und Breite eines Kleingartens. Das Programm berechnet diese Werte,
indem es die Gartenhöhe (*gardenHeight*) durch die Anzahl an Kleingärten pro
Höhe und die Gartenbreite (*gardenWidth*) durch die Anzahl der Kleingärten pro
Breite dividiert. ~~Da die Werte, mit denen das Programm diese Ergebnisse
berechnet, ganzzahlige Werte sind, werden sie mit der Funktion
Double.valueOf() in einen Double umgewandelt, um auch ein Double als
Ergebnis zu bekommen.~~ Die letzte Variable(*mGardenSize*) speichert nun den
tatsächlichen Flächeninhalt eines Kleingarten. Dieser wird berechnet, indem
die beiden Variablen für die Seitenlängen der Kleingärten (*mGardenHeight*,
*mGardenWidth*) multipliziert werden. *Hier noch hinzu zu fügen ist, das alle werte auf 2 Nachkomma stellen gerundet werden. Dies passiert in der anderen Version bei der Ausgabe und wird so nicht erwähnt.*


~~Schließlich werden auch diese Werte in der Konsole ausgegeben. Alle Werte,
die in der Konsole angezeigt werden, werden mit Hilfe der String.format()-
Methode auf zwei Nachkommastellen gerundet, um die Zahlen übersichtlicher
zu präsentieren.~~


*m -> Mini (mGarden -> Mini garden)*

------------------------------------------------------------------------
