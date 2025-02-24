---
layout: '../../../layouts/LessonLayout.astro'
chapter: 'Die Sprache der Mathematik: Aussagenlogik, Mengen, Abbildungen'
lesson: 'Arten der Beweisführung'
type: 'Lecture'
num: 2
chapterNum: 2
---

Bevor wir mit dem Thema Mengen weitermachen, widmen wir dem Thema Beweise ein eigenes Unterkapitel. Beweise sind für den gesamten Kurs wichtig. Die meisten Beweise sind ähnlich aufgebaut. Daher ist es nützlich die drei wichtigsten Beweisarten zu verstehen.

Nachfolgend werden Aussagen wieder mit Großbuchstaben abgekürzt.

1. Der Direkte Beweis

Gehen wir direkt vor und zeigen unmittelbar, dass, wenn $A$ gilt, auch folgt, dass $B$ richtig ist, so nennen wir den Beweis einen direkten Beweis und können dieses Vorgehen logisch durch $A => B$ angeben.

2. Der indirekte Beweis (Kontraposition)

Den Begriff Kontraposition haben wir bereits im Kapitel Aussagenlogik kennengelernt. Hier zeigen wir, wenn $B$ nicht gilt, folgt, dass auch A nicht wahr ist. Formal können wir diesen Beweis durch die Implikation $(¬B)⇒(¬A)$ angeben.

3. Widerspruchsbeweis

Bei dieser Argumentation starten wir mit der Annahme, dass $A$ und $¬B $ wahr sind, und führen diese Annahme auf einen Widerspruch. Fomal zeigen wir, dass die Aussage $¬(A ∧ ¬B)$ wahr ist.

### Ausfürhrliches Beispiel zu den drei Beweisarten

Damit man die Konzepte besser versteht, betrachten wir ein Beispiel.
Die Behauptung lautet, dass für zwei positive Zahlen $a$ und $b$ aus $a² < b²$ die Ungleichung $a < b$ folgt.

Aussage $A$ lautet: $a² < b²$ und Aussage $B$: $a < b.$
Beweisen sollen wir, dass die Implikation $A ⇒ B$ wahr ist.

1. Direkter Beweis „$A ⇒ B$“

$a² < b²$ wird mit $a²$ auf beiden subtrahiert. $0 < b² - a²$. Rechts erkennt man die binomische Formel. $0 < (b-a)(b+a)$. Da $a$ und $b$ positiv sind, ist auch $(b+a) > 0$, d.h. wir dürfen durch $(b+a)$ dividieren. Wir erhalten: $0 < (b-a)$ und damit $a < b$.

2. Indirekter Beweis „$(¬B)⇒(¬A)$“

Wir gehen von $¬B$ aus, also von$ a >= b$. Diese Ungleichung mit a multipliziert ergibt $a² > ab$ und ebenso auch mit $b$: $ab >= b²$. Kombinieren wir beide Ungleichungen so gilt: $a² >= ab >= b²$. Dies ist genau ¬A.

3. Widerspruch „$(¬B)∧(A)$ führt zu Widerspruch"

$¬B$ lautet $b <= a$. Multiplizieren wir $¬B$ mit $a$ erhalten wir $ab <= a²$. Zusammen mit der Annahme, dass $A$ wahr ist, ergibt sich die Ungleichung $ab <= a² < b²$. Nun multiplizieren wir $¬B$ mit $b$ und erhalten $b² <= ab$. Insgesamt ergibt dies: $ab <= a² < b² <= ab$, also $ab < ab$, was nicht sein kann.
